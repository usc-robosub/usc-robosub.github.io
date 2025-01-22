import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

function EBoard() {
  const leaders = [
    {
      name: "Sarah Chen",
      role: "President",
      major: "Computer Science",
      year: "Senior",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300",
      bio: "Sarah leads the team with her extensive experience in robotics and software development. She previously interned at SpaceX and is passionate about underwater exploration.",
      email: "sarah.chen@example.com",
      linkedin: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "Vice President",
      major: "Mechanical Engineering",
      year: "Junior",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=300&h=300",
      bio: "Michael specializes in mechanical design and has led multiple successful projects. His focus is on improving the submarine's hydrodynamics and efficiency.",
      email: "michael.r@example.com",
      linkedin: "#"
    },
    {
      name: "Emily Taylor",
      role: "Technical Lead",
      major: "Electrical Engineering",
      year: "Senior",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
      bio: "Emily oversees all technical aspects of the submarine. She has extensive experience in embedded systems and sensor integration.",
      email: "emily.t@example.com",
      linkedin: "#"
    },
    {
      name: "David Park",
      role: "Software Lead",
      major: "Computer Engineering",
      year: "Junior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
      bio: "David leads the software development team, focusing on computer vision and autonomous navigation systems.",
      email: "david.p@example.com",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Executive Board</h1>
          <p className="text-xl text-blue-200 text-center mt-4">Meet our student leadership team</p>
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={leader.image}
                      alt={leader.name}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                      {leader.role}
                    </div>
                    <h2 className="mt-1 text-xl font-semibold text-gray-900">
                      {leader.name}
                    </h2>
                    <p className="mt-2 text-gray-600">
                      {leader.major} • {leader.year}
                    </p>
                    <p className="mt-4 text-gray-500">
                      {leader.bio}
                    </p>
                    <div className="mt-4 flex gap-4">
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                      <a
                        href={leader.linkedin}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EBoard;