import React, { useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';

function EBoard() {
  const leaders = [
    {
      name: "Lauryn Hills",
      role: "President",
      major: "Electrical and Computer Engineering",
      year: "Sophomore",
      image: "/lauryn_headshot.jpg",
      email: "lhills@usc.edu",
      linkedin: "#"
    },
    {
      name: "Matthew Jiang",
      role: "Vice President and Software Lead",
      major: "Computer Engineering and Computer Science",
      year: "Senior",
      image: "/matt.jpeg",
      email: "jiangmy@usc.edu",
      linkedin: "https://www.linkedin.com/in/matthewyjiang/"
    },
    {
      name: "Ekamresh Vasudevan",
      role: "Treasurer and Electrical Lead",
      major: "Electrical and Computer Engineering",
      year: "Junior",
      image: "/ek.jpeg",
      email: "evasudev@usc.edu",
      linkedin: "https://www.linkedin.com/in/ekamresh-vasudevan-4840b0230/"
    },
    {
      name: "Jessica Yao",
      role: "Secretary",
      major: "Electrical and Computer Engineering",
      year: "Sophomore",
      image: "/jessicayao.jpg",
      email: "",
      linkedin: "#"
    },
    {
      name: "Doris Lai",
      role: "Social Media Chair",
      major: "Business Administration",
      year: "Sophomore",
      image: "/doris.jpg",
      email: ""
    },
    {
      name: "Kyle Woo",
      role: "Assistant Electrical Lead",
      major: "Electrical and Computer Engineering",
      year: "Junior",
      image: "/kyle_headshot.png",
      email: ""
    }
  ];

  // Preload images
  useEffect(() => {
    leaders.forEach(leader => {
      const img = new Image();
      img.src = leader.image;
    });
  }, [leaders]);

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
                      loading="eager"
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
