import React from "react";
import { CheckCircle2, Download } from "lucide-react";
import Footer from "../components/Footer";

function Sponsors() {
  const benefits = [
    "Increase brand visibility among students and professionals",
    "Engage with a passionate community of innovators",
    "Support the development of cutting-edge underwater robotics",
    "Network with future leaders in technology and engineering",
    "Gain access to exclusive events and competitions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Become a Sponsor
          </h1>
          <p className="text-xl text-blue-200 text-center mt-4">
            Partner with USC AUV and make a difference!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-2 gap-12">

        <div>
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
              
              { /* List of sponsors, using a grid of boxes with logos */}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md h-40">
                    <img
                        src="/Formal_Viterbi_CardOnWhite.jpg"
                        alt="USC Viterbi"
                        className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md h-40">
                    <img
                        src="/LM-logo-stacked-blue-400x400.png"
                        alt="Lockheed Martin"
                        className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md h-40">
                    <img
                        src="/Northrop_Grumman_logo_blue-on-clear_2020.png"
                        alt="Northrop Grumman"
                        className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
            </div>
          </div>
          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6">Why Sponsor USC AUV?</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            {/* button for downloading sponsorship packet */ }
            <h2 className="text-2xl font-bold mt-6 mb-6">Become a Sponsor</h2>
            <p className="text-gray-700 mb-6">
              Download our sponsorship packet for more information on how to
              get involved.
            </p>

            <div className="flex items-center justify-center">
                <a
                href="/auv-sponsorship-packet-2025.pdf"
                className="inline-flex bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition duration-300 text-center"
                download
                >
                <Download className="w-5 h-5 mr-3"/>
                <span>Sponsorship Packet</span>
                </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;