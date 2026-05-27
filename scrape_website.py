#!/usr/bin/env python3
"""
Website Scraper for uscfrl.com
Uses Playwright to render JavaScript and extract all text content.
"""

import time
import re

try:
    from playwright.sync_api import sync_playwright
    USE_PLAYWRIGHT = True
except ImportError:
    USE_PLAYWRIGHT = False
    print("Playwright not installed. Will try requests as fallback.")
    import requests
    from bs4 import BeautifulSoup

BASE_URL = "https://uscfrl.com"

# Common page paths to try
COMMON_PATHS = [
    "/",
    "/about",
    "/about-us",
    "/team",
    "/members",
    "/projects",
    "/gallery",
    "/contact",
    "/sponsors",
    "/competitions",
    "/robosub",
]

def scrape_with_playwright():
    """Use Playwright to render JavaScript and scrape content."""
    all_content = []
    discovered_urls = set()
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = context.new_page()
        
        # First, get homepage and discover all navigation links
        print(f"\nFetching homepage: {BASE_URL}")
        try:
            page.goto(BASE_URL, wait_until='networkidle', timeout=30000)
            time.sleep(2)  # Extra wait for dynamic content
            
            # Get all links from the page
            links = page.query_selector_all('a[href]')
            for link in links:
                href = link.get_attribute('href')
                if href:
                    if href.startswith('/'):
                        discovered_urls.add(BASE_URL + href)
                    elif href.startswith(BASE_URL):
                        discovered_urls.add(href)
                    elif href.startswith('#'):
                        discovered_urls.add(BASE_URL + '/' + href)
            
            print(f"Discovered {len(discovered_urls)} links from homepage")
            
        except Exception as e:
            print(f"Error loading homepage: {e}")
        
        # Add common paths to check
        for path in COMMON_PATHS:
            discovered_urls.add(BASE_URL + path)
        
        # Also check for hash-based navigation (SPA)
        discovered_urls.add(BASE_URL + "/#about")
        discovered_urls.add(BASE_URL + "/#team")
        discovered_urls.add(BASE_URL + "/#projects")
        discovered_urls.add(BASE_URL + "/#contact")
        discovered_urls.add(BASE_URL + "/#sponsors")
        discovered_urls.add(BASE_URL + "/#gallery")
        
        print(f"\nTotal URLs to check: {len(discovered_urls)}")
        for url in sorted(discovered_urls):
            print(f"  - {url}")
        
        # Now scrape each URL
        visited = set()
        
        for url in sorted(discovered_urls):
            # Normalize URL
            clean_url = url.rstrip('/')
            if clean_url in visited:
                continue
            visited.add(clean_url)
            
            print(f"\nScraping: {url}")
            try:
                page.goto(url, wait_until='networkidle', timeout=15000)
                time.sleep(1)
                
                # Check if page loaded successfully (not 404)
                title = page.title()
                
                # Get full page content
                content = page.content()
                
                # Parse with BeautifulSoup for cleaner text extraction
                from bs4 import BeautifulSoup
                soup = BeautifulSoup(content, 'html.parser')
                
                # Remove script/style
                for element in soup(['script', 'style']):
                    element.decompose()
                
                page_data = extract_content(soup, url, title)
                
                if page_data['has_content']:
                    all_content.append(page_data)
                    print(f"  ✓ Found content: {len(page_data['paragraphs'])} paragraphs, {len(page_data['headings'])} headings")
                else:
                    print(f"  ✗ No significant content")
                    
            except Exception as e:
                print(f"  ✗ Error: {e}")
        
        browser.close()
    
    return all_content

def extract_content(soup, url, title):
    """Extract structured content from BeautifulSoup object."""
    data = {
        'url': url,
        'title': title,
        'headings': [],
        'paragraphs': [],
        'lists': [],
        'links': [],
        'images': [],
        'full_text': '',
        'has_content': False
    }
    
    # Get headings
    for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
        text = h.get_text(strip=True)
        if text and len(text) > 1:
            data['headings'].append({
                'level': h.name,
                'text': text
            })
    
    # Get paragraphs
    for p in soup.find_all('p'):
        text = p.get_text(strip=True)
        if text and len(text) > 10:  # Filter out tiny fragments
            data['paragraphs'].append(text)
    
    # Get divs with text (many SPAs use divs instead of p)
    for div in soup.find_all('div'):
        # Only get divs that directly contain text (not nested)
        direct_text = ''.join(div.find_all(text=True, recursive=False)).strip()
        if direct_text and len(direct_text) > 20:
            if direct_text not in data['paragraphs']:
                data['paragraphs'].append(direct_text)
    
    # Get spans with significant text
    for span in soup.find_all('span'):
        text = span.get_text(strip=True)
        if text and len(text) > 30:
            if text not in data['paragraphs']:
                data['paragraphs'].append(text)
    
    # Get list items
    for li in soup.find_all('li'):
        text = li.get_text(strip=True)
        if text and len(text) > 2:
            data['lists'].append(text)
    
    # Get links with text
    for a in soup.find_all('a'):
        text = a.get_text(strip=True)
        href = a.get('href', '')
        if text:
            data['links'].append({'text': text, 'href': href})
    
    # Get image alt texts
    for img in soup.find_all('img'):
        alt = img.get('alt', '')
        if alt:
            data['images'].append(alt)
    
    # Full text
    data['full_text'] = soup.get_text(separator='\n', strip=True)
    
    # Check if there's meaningful content
    data['has_content'] = (
        len(data['headings']) > 0 or 
        len(data['paragraphs']) > 0 or
        len(data['full_text']) > 100
    )
    
    return data

def format_content_as_markdown(all_content):
    """Format all scraped content as a markdown document."""
    output = []
    output.append("# USC FRL Website - Complete Scraped Content\n")
    output.append(f"**Source:** {BASE_URL}")
    output.append(f"**Pages with content:** {len(all_content)}")
    output.append(f"**Scraped on:** {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    output.append("---")
    output.append("This document contains the **verbatim text content** extracted from each page.")
    output.append("---\n")
    
    for page in all_content:
        output.append(f"\n{'='*80}")
        output.append(f"## PAGE: {page['url']}")
        output.append(f"**Title:** {page['title']}")
        output.append(f"{'='*80}\n")
        
        if page['headings']:
            output.append("### 📌 Headings (Verbatim):\n")
            for h in page['headings']:
                level = int(h['level'][1])
                prefix = '  ' * (level - 1)
                output.append(f"{prefix}- **[{h['level'].upper()}]** {h['text']}")
            output.append("")
        
        if page['paragraphs']:
            output.append("### 📝 Text Content (Verbatim):\n")
            for i, p in enumerate(page['paragraphs'], 1):
                output.append(f"**[Text Block {i}]**")
                output.append(f"> {p}\n")
        
        if page['lists']:
            output.append("### 📋 List Items:\n")
            for item in page['lists']:
                output.append(f"- {item}")
            output.append("")
        
        if page['links']:
            output.append("### 🔗 Navigation/Links Found:\n")
            seen = set()
            for link in page['links']:
                key = f"{link['text']}|{link['href']}"
                if key not in seen and link['text']:
                    seen.add(key)
                    output.append(f"- [{link['text']}]({link['href']})")
            output.append("")
        
        if page['images']:
            output.append("### 🖼️ Image Descriptions:\n")
            for alt in page['images']:
                output.append(f"- {alt}")
            output.append("")
        
        output.append("\n### 📄 Full Raw Text:\n")
        output.append("```")
        # Limit and clean up the full text
        full_text = page['full_text']
        # Remove excessive whitespace
        full_text = re.sub(r'\n\s*\n', '\n\n', full_text)
        full_text = full_text[:8000]
        output.append(full_text)
        if len(page['full_text']) > 8000:
            output.append("\n... [truncated for length] ...")
        output.append("```\n")
    
    return '\n'.join(output)

def main():
    print("=" * 60)
    print("USC FRL Website Scraper (JavaScript-enabled)")
    print("=" * 60)
    
    if USE_PLAYWRIGHT:
        print("\nUsing Playwright for JavaScript rendering...")
        all_content = scrape_with_playwright()
    else:
        print("\nPlaywright not available. Please install it:")
        print("  pip install playwright")
        print("  playwright install chromium")
        return
    
    if not all_content:
        print("\nNo content was extracted. The website may be blocking scrapers.")
        return
    
    # Generate markdown
    markdown = format_content_as_markdown(all_content)
    
    # Save to file
    output_file = "USCFRL_SCRAPED_CONTENT.md"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown)
    
    print(f"\n{'='*60}")
    print(f"Scraping complete!")
    print(f"Pages with content: {len(all_content)}")
    print(f"Results saved to: {output_file}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
