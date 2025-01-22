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

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              USC AUV is dedicated to advancing underwater robotics technology through student-led innovation, 
              hands-on learning, and competitive excellence. We strive to create an inclusive environment where 
              students can develop technical skills, leadership abilities, and a passion for marine robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
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

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-lg text-gray-700 mb-8">
              Founded in 2020, USC AUV has quickly grown from a small group of passionate engineering 
              students to a comprehensive robotics team. Our achievements include multiple awards in 
              regional competitions and recognition for innovative underwater vehicle designs.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>2023 RoboSub Competition - Innovation Award</li>
                <li>2022 Regional Robotics Championship - 2nd Place</li>
                <li>2021 Best Technical Documentation Award</li>
                <li>Multiple successful autonomous mission completions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;