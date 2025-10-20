import React from "react";
import { Code, Users, Briefcase } from "lucide-react";
// import ProfileImage from "../public/profile.jpg"; // Replace with your image path

const About = () => {
  return (
    <section
      id="about"
      className="py-24 mt-14  bg-gradient-to-l from-green-100 to-[#83ffe2] "
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-1 relative w-72 h-72 mx-auto lg:mx-0">
          {/* Profile Image */}
          <img
            src="/about.jpg"
            alt="Profile"
            className="w-96 h-96 rounded-xl object-cover border-4 border-transparent shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-green-400"
          />
          {/* Soft Overlay on Hover */}
          <div className="absolute inset-0 rounded-xl bg-green-200/20 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 ">About Me</h2>
          <p className="text-gray-700 text-lg">
            I am a graduate student in Public Administration with a strong
            interest in governance, policy analysis, and public sector
            management. I am passionate about contributing to effective public
            service delivery and promoting transparency, accountability, and
            citizen engagement in government institutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition">
              <Users className="w-6 h-6 text-green-500 mb-2" />
              <p className="font-semibold text-gray-800">Leadership</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Team guidance & decision-making
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition">
              <Users className="w-6 h-6 text-green-500 mb-2" />
              <p className="font-semibold text-white">Teamwork</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Collaboration & Communication
              </p>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition">
              <Briefcase className="w-6 h-6 text-green-500 mb-2" />
              <p className="font-semibold text-gray-800 dark:text-white">
                Problem Solving
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Efficient Solutions
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
