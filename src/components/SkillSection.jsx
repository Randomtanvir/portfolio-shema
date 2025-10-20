import React, { useEffect, useState } from "react";

export default function SkillSection() {
  const skills = [
    "Time Management",
    "Teamwork",
    "Leadership",
    "Communication",
    "MS Office (Word, Excel, PowerPoint)",
    "E-mail and Internet Browsing",
    "Problem Solving",
  ];

  // Animate skills on load
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleIndex(index);
      }, index * 150); // staggered animation
    });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          💡 My Skills
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I constantly work to improve my personal and professional abilities.
          Here are some of my key skills that help me perform effectively and
          efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg transform transition-all duration-500 cursor-pointer ${
                index <= visibleIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } hover:scale-105 hover:shadow-2xl hover:from-gray-900 hover:to-gray-800`}
            >
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
