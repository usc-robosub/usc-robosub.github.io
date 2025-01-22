import React from 'react';
import { Award, Target, Code, Wrench } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About USC AUV</h1>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey Through Time</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Our Beginnings</h3>
                  <p className="text-gray-600">
                    Founded in 2005, USC AUV started as a small group of passionate students with a dream to explore underwater robotics.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Past Submarines</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Mantaray</li>
                    <li>Turtle</li>
                    <li>Seabee</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/mantaray.jpg" 
                  alt="Mantaray AUV" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <img 
                  src="/turtle.jpg" 
                  alt="Turtle AUV" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <img 
                  src="/seabee.jpg" 
                  alt="Seabee AUV" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <img 
                  src="/harness.jpg" 
                  alt="Mantaray Harness" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Barracuda Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet The Barracuda</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Cutting-Edge Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Fully integrated sensor fusion</li>
                    <li>Simplified hydrodynamics</li>
                    <li>Modular  multi-hull design</li>
                    <li>Improved mapping and navigation system</li>
                    <li>Containerized and modular software</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <p className="font-medium">Dimensions:</p>
                      <p>TBD</p>
                    </div>
                    <div>
                      <p className="font-medium">Weight:</p>
                      <p>~25 kg</p>
                    </div>
                    <div>
                      <p className="font-medium">Thruster Count:</p>
                      <p>8</p>
                    </div>
                    <div>
                      <p className="font-medium">Battery Power:</p>
                      <p>16.2 Ah</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/AUVsockpuppetNoText.png" 
                  alt="Barracuda AUV" 
                  className="rounded-lg shadow-md object-cover w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                  Coming Soon...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in everything we do, from design to execution.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries and exploring new solutions in underwater robotics.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Code className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Learning</h3>
                <p className="text-gray-600">Continuous education and skill development through hands-on experience.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600">Working together across disciplines to achieve common goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
