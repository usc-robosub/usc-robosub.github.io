import React from 'react';
import { CheckCircle2, Send } from 'lucide-react';

function Join() {
  const benefits = [
    "Gain a hands-on experience with underwater robotics",
    "Develop leadership and teamwork skills",
    "Travel to competitions",
    "Develop your technical skills ",
    "Make lifelong friends and connections"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Join USC AUV</h1>
          <p className="text-xl text-blue-200 text-center mt-4">Be part of something extraordinary</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Join USC AUV?</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-3">Get Connected Now!</h2>
              <p className="text-gray-700 mb-3">
                Fill out our interest form to get started with USC AUV!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZnhGsQTUPIkCJLfJcP2tE20nZVszWjG6SglmbcWH-VuExug/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300"
              >
                <Send className="w-5 h-5 mr-3" />
                <span>Open Form</span>
              </a>
              <br />
              <p className="text-gray-700 mt-8 mb-2">
                Have questions? Ask us at our Discord server!
                </p>
                <a
                    href="https://discord.gg/7jPvyPWc8T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#5865F2] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300"
                > 

                <img src="/discord_white.svg" alt="Discord Logo" className="w-6 h-6 mr-3" /> Join Discord
                </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;