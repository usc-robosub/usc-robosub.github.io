import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Trophy,
  Calendar,
  ChevronRight,
  Github,
  Mail,
  School2,
  Box,
  Cpu,
  BrainCircuit as Circuit,
  Cog,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollIndicator from "../components/ScrollIndicator";

function Home() {
  const technologies = [
    {
      name: "ROS (Robot Operating System)",
      description:
        "Industry-standard robotics middleware for distributed computing & sensor integration",
      icon: Cpu,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      name: "Docker",
      description:
        "Containerization for consistent development & deployment environments",
      icon: Box,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      name: "Altium Designer",
      description: "Professional PCB design & electronic schematic software",
      icon: Circuit,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      name: "SOLIDWORKS",
      description: "3D CAD software for mechanical design & simulation",
      icon: Cog,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];
  const GOOGLE_CALENDAR_API_KEY = "AIzaSyA2TM5EbeSu_GX9WCH0F9k8KXoJ3WDI45w";
  const CALENDAR_ID =
    "c_92bf58bd05edbf6dda0f717791a550a51482ea60ac8cd9ffdb69cce9621288ad@group.calendar.google.com";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${GOOGLE_CALENDAR_API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          setEvents(data.items);
        }
      } catch (error) {
        console.error("Error fetching Google Calendar events:", error);
      }
    };

    fetchEvents();
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroTextRef.current) {
      observer.observe(heroTextRef.current);
    }

    return () => {
      if (heroTextRef.current) {
        observer.unobserve(heroTextRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <img
              src="/AUVbarracuda.png"
              alt="USC AUV Logo"
              className="w-48 h-48 mb-6 text-white invert"
            />
            <div
              ref={heroTextRef}
              className={`transition-opacity duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            ></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">USC AUV</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              University of Southern California's Premier Robotics Design Team
            </p>
            <Link
              to="/join"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
            >
              Join Our Team <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <ScrollIndicator />
        </div>
      </header>

      {/* About Section */}
      <section id="about-section" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-7">
            About Our Club
          </h2>
          <h3 className="text-2xl font-bold text-center mb-7">
            Where Innovation Meets the Ocean
          </h3>
          <div className="align-middle text-center mb-12">
            <p>
              USC RoboSub is a student-led organization pushing the boundaries
              of underwater robotics. Combining the expertise of our Software,
              Electrical, & Mechanical teams, we design & build autonomous
              underwater vehicles (AUVs), like our 2025 Barracuda. With a focus
              on cutting-edge technology, teamwork, & creativity, we compete in
              the annual RoboSub competition, showcasing our dedication to
              engineering excellence & innovation. Dive into our journey to
              revolutionize underwater automation & robotics!
            </p>
            <br />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <center>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student-Led</h3>
                <p className="text-gray-600">
                  Empowering students to take leadership roles and drive
                  innovation in underwater robotics.
                </p>
              </center>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <center>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitions</h3>
                <p className="text-gray-600">
                  Participating in RoboSub, an international student underwater
                  robotics competition.
                </p>
              </center>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <center>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <School2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning</h3>
                <p className="text-gray-600">
                  Hands-on experience in robotics, coding, & electrical &
                  mechanical systems.
                </p>
              </center>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-7">
            Our Technologies
          </h2>
          <p className="text-gray-600 text-center mb-12 mx-auto">
            We leverage industry-standard tools & technologies throughout our
            process — ranging all the way from designing & simulating in
            SOLIDWORKS to developing advanced circuits in Altium Designer. These
            state-of-the-art platforms enable us to design, build, & program our
            autonomous underwater vehicles with precision & efficiency.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <center>
                    <div
                      className={`${tech.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                    >
                      <IconComponent className={`w-6 h-6 ${tech.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </center>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {events.length > 0 ? (
              events
                .filter((event) => !event.recurrence)
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center gap-6"
                  >
                    <Calendar className="w-12 h-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.summary}
                      </h3>
                      <p className="text-gray-600">
                        {event.description + " | "}
                        {new Date(
                          event.start.dateTime || event.start.date
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-gray-600">
                No upcoming events found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            {/* Logo and Title */}
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/AUVsockpuppetNoText.png"
                alt="USC AUV Logo"
                className="w-8 h-8 text-white invert"
              />
              <span className="text-xl font-bold">USC AUV</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mb-8">
              <a
                href="https://www.instagram.com/robosubsc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.423.414a4.93 4.93 0 011.738 1.126 4.928 4.928 0 011.126 1.738c.174.453.36 1.253.414 2.423.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.414 2.423a4.93 4.93 0 01-1.126 1.738 4.93 4.93 0 01-1.738 1.126c-.453.174-1.253.36-2.423.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.423-.414a4.93 4.93 0 01-1.738-1.126 4.93 4.93 0 01-1.126-1.738c-.174-.453-.36-1.253-.414-2.423-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.414-2.423a4.93 4.93 0 011.126-1.738 4.93 4.93 0 011.738-1.126c.453-.174 1.253-.36 2.423-.414C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.756.131 4.611.312 3.678.645 2.633 1.005 1.785 1.53 1.03 2.285c-.756.756-1.28 1.604-1.64 2.649-.333.933-.514 2.078-.573 3.374C-.014 8.332 0 8.741 0 12c0 3.259-.014 3.668.072 4.948.059 1.296.24 2.441.573 3.374.36 1.045.884 1.893 1.64 2.649.756.756 1.604 1.28 2.649 1.64.933.333 2.078.514 3.374.573C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.296-.059 2.441-.24 3.374-.573 1.045-.36 1.893-.884 2.649-1.64.756-.756 1.28-1.604 1.64-2.649.333-.933.514-2.078.573-3.374.059-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.296-.24-2.441-.573-3.374-.36-1.045-.884-1.893-1.64-2.649-.756-.756-1.604-1.28-2.649-1.64-.933-.333-2.078-.514-3.374-.573C15.668.014 15.259 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </a>
              <a
                href="https://github.com/usc-robosub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5a11.499 11.499 0 00-3.636 22.453c.575.11.786-.25.786-.554v-2.167c-3.02.637-3.655-1.457-3.655-1.457a2.886 2.886 0 00-1.205-1.587c-.985-.673.076-.659.076-.659a2.28 2.28 0 011.664 1.123c.974 1.666 2.556 1.184 3.178.905a2.287 2.287 0 01.683-1.432c-2.414-.277-4.95-1.205-4.95-5.373a4.2 4.2 0 011.125-2.914 3.91 3.91 0 01.106-2.874s.914-.293 2.996 1.125a10.336 10.336 0 015.45 0c2.082-1.418 2.996-1.125 2.996-1.125a3.91 3.91 0 01.106 2.874 4.2 4.2 0 011.125 2.914c0 4.183-2.544 5.092-4.963 5.362.806.693 1.515 2.062 1.515 4.157v6.168c0 .311.21.67.793.554A11.499 11.499 0 0012 .5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/auv-usc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.983 3.5c0-1.373-1.11-2.5-2.49-2.5-1.388 0-2.497 1.126-2.497 2.5 0 1.366 1.102 2.5 2.49 2.5h.01c1.385 0 2.487-1.134 2.487-2.5zM.49 23.146V7.431h4.928v15.715H.49zM8.928 7.431h4.933v2.31c.685-.98 2.377-2.372 4.867-2.372 5.206 0 6.169 3.628 6.169 8.342v9.434h-4.938v-8.353c0-1.992-.033-4.552-2.768-4.552-2.771 0-3.198 2.168-3.198 4.412v8.493H8.928V7.431z" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/7jPvyPWc8T"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515c-.211.371-.452.864-.621 1.252a18.33 18.33 0 0 0-5.962 0 12.262 12.262 0 0 0-.622-1.252A19.788 19.788 0 0 0 3.683 4.37C.657 9.019.157 13.511.429 17.937a20.188 20.188 0 0 0 5.996 3.062c.482-.664.913-1.364 1.284-2.096a12.987 12.987 0 0 1-2.024-1.02c.17-.123.34-.251.502-.381a14.728 14.728 0 0 0 11.645 0c.165.13.335.258.504.381-.647.411-1.319.761-2.02 1.02.375.732.806 1.432 1.283 2.096a20.187 20.187 0 0 0 5.998-3.062c.27-4.427-.073-8.918-3.055-13.568zm-13.71 9.418c-1.185 0-2.154-1.13-2.154-2.519 0-1.388.952-2.52 2.154-2.52 1.207 0 2.176 1.132 2.154 2.52.001 1.389-.952 2.52-2.154 2.52zm10.785 0c-1.185 0-2.154-1.13-2.154-2.519 0-1.388.951-2.52 2.154-2.52 1.207 0 2.176 1.132 2.154 2.52 0 1.389-.951 2.52-2.154 2.52z" />
                </svg>
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-blue-300">
              <p>&copy; 2025 USC AUV. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
