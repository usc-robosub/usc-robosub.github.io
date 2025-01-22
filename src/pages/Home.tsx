import React from 'react';
import { Users, Trophy, Calendar, ChevronRight, Github, Mail, School2, Box, Cpu, BrainCircuit as Circuit, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const technologies = [
    {
      name: "ROS (Robot Operating System)",
      description: "Industry-standard robotics middleware for distributed computing and sensor integration",
      icon: Cpu,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      name: "Docker",
      description: "Containerization for consistent development and deployment environments",
      icon: Box,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      name: "Altium Designer",
      description: "Professional PCB design and electronic schematic software",
      icon: Circuit,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      name: "SOLIDWORKS",
      description: "3D CAD software for mechanical design and simulation",
      icon: Cog,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <img src="/AUVbarracuda.png" alt="USC AUV Logo" className="w-48 h-48 mb-6 text-white invert" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">USC AUV</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">University of Southern California's Premier Robotics Design Team</p>
            <Link to="/join" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
              Join Our Team <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Club</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student-Led</h3>
              <p className="text-gray-600">Empowering students to take leadership roles and drive innovation in underwater robotics.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-gray-600">Participating in national and international underwater robotics competitions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <School2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-gray-600">Hands-on experience in robotics, programming, and underwater systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Technologies</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We use industry-standard tools and technologies to design, build, and program our autonomous underwater vehicle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className={`${tech.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6">
              <Calendar className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">General Meeting</h3>
                <p className="text-gray-600">February 5, 2024 - TBD - 7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img src="/AUVsockpuppetNoText.png" alt="USC AUV Logo" className="w-8 h-8 text-white invert" />
              <span className="text-xl font-bold">USC AUV</span>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-300">
            <p>&copy; 2025 USC AUV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;