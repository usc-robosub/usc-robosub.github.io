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
import Footer from "../components/Footer";

function Home() {
  const technologies = [
    {
      name: "SOLIDWORKS",
      description: "3D CAD software for mechanical design & simulation",
      icon: Cog,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
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
  ];
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing!");
  }
  const CALENDAR_ID =
    "c_7de42a20b43fb7449e37a073f230292599f78fc2482176f3bc26d53ee19d81f8@group.calendar.google.com";
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const nowTime = new Date().toISOString();
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&showDeleted=false&maxResults=4&timeMin=${nowTime}`
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

    events.forEach((event) => {
        var eventDateTime = new Date(event.start?.dateTime || event.start?.date);

        var deleteEvent = false;

        if (event.status === "cancelled") {
            deleteEvent = true;
        } else if (eventDateTime < new Date()) {
            // deleteEvent = true;
        }

        if (deleteEvent) {
            setEvents((prevEvents) => prevEvents.filter((e) => e.id !== event.id));
        }
        
    });

    
  
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
          <div className="align-middle text-center mb-12">
            <p>
              USC RoboSub is a student-led organization pushing the boundaries
              of underwater robotics. Combining the expertise of our Software,
              Electrical, & Mechanical teams, we design & build autonomous
              underwater vehicles (AUVs) and compete in
              the annual RoboSub competition, where we showcase our dedication to excellence in engineering and innovation. Dive in and join us on our journey in underwater robotics!
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
        <h2 className="text-3xl font-bold text-center mb-6">
            Upcoming Events
        </h2>
        <div className="flex justify-center">
        <Link
            to="https://calendar.google.com/calendar/u/0?cid=Y183ZGU0MmEyMGI0M2ZiNzQ0OWUzN2EwNzNmMjMwMjkyNTk5Zjc4ZmMyNDgyMTc2ZjNiYzI2ZDUzZWUxOWQ4MWY4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 flex justify-center rounded-full font-semibold items-center gap-2 transition mb-8"
        >
            Google Calendar Invite Link
        </Link>
        </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {
              events.map((event) => {

                    var location = event.location;
                    if (location === undefined) {
                        location = "TBD";
                    }

                    var formattedStartDate = new Date(event.start?.dateTime || event.start?.date).toLocaleString('default', {month: 'long', day: 'numeric'});
                    var formattedStartTime = new Date(event.start?.dateTime || event.start?.date).toLocaleTimeString('default',  {hour: 'numeric', minute: '2-digit'});


                    return (
                  <div
                    key={event.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center gap-6"
                  >
                    <Calendar className="w-12 h-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.summary}
                      </h3>
                      <div className="text-gray-700">
                        {formattedStartDate + " | " + formattedStartTime + " to " + new Date(event.end?.dateTime).toLocaleTimeString('default',  {hour: 'numeric', minute: '2-digit'})}
                        <span>&nbsp;|&nbsp;</span><span className="font-bold">{location}</span>
                      </div>
                    </div>
                  </div>
                  )
                
            }
              )
            
            }
          </div>
        </div>
      </section>

      <Footer />
    </div>
    
  );

}

export default Home;
