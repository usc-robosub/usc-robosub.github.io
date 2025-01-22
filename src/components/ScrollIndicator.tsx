import React, { useState, useEffect } from 'react';

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 left-0 right-0 flex justify-center cursor-pointer transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleScroll}
    >
      <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-700"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}

export default ScrollIndicator;
