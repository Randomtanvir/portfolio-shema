import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2018-2022",
      pass: "2022",
      degree: "Bachelor of Social Science (BSS)",
      institution:
        "Bangabandhu Sheikh Mujibur Rahman Science And Technology University",
      result: "CGPA: 3.44 / 4.00",
      description:
        "Focused on governance, policy analysis, and public sector management. Developed leadership, problem-solving, and analytical skills.",
    },
    {
      year: "2015-2017",
      pass: "2017",
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "North Khulna College",
      result: "GPA: 4.50 / 5.00",
      description:
        "Studied humanities and social sciences, building a strong foundation in civic studies and research methods.",
    },
    {
      year: "2011-2016",
      pass: "2016",
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "North Khulna College",
      result: "GPA: 4.50 / 5.00",
      description:
        "Studied humanities and social sciences, building a strong foundation in civic studies and research methods.",
    },
  ];

  // Scroll animation state
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      educationData.forEach((_, index) => {
        const element = document.getElementById(`edu-${index}`);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.85) {
            setVisibleIndex((prev) => Math.max(prev, index));
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="education"
      className="relative py-32 bg-gradient-to-b from-[#8fbea5] to-[#b7ffff]"
    >
      {/* Section Title */}
      <div className="max-w-5xl mx-auto px-6 text-center lg:text-left mb-24">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          My Educational Journey
        </h1>
        <p className="text-center text-lg text-green-600 mb-12">
          A detailed look at my academic qualifications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Gradient vertical line */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-1 bg-gradient-to-b from-green-500 to-green-700 rounded-full hidden sm:block"></div>

        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = index <= visibleIndex;
            return (
              <div
                key={index}
                id={`edu-${index}`}
                className={`flex flex-col sm:flex-row items-center justify-between relative transition-transform duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : isLeft
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                }`}
              >
                {/* Card container */}
                <div
                  className={`sm:w-1/2 ml-4 p-4 bg-white border-t-4 border-green-500 rounded-lg shadow-lg
                    transition-all duration-300 ease-in-out hover:shadow-xl transform ${
                      isLeft
                        ? "sm:mr-auto sm:text-left"
                        : "sm:ml-auto sm:text-right"
                    }`}
                >
                  {/* Year badge */}
                  <div className="absolute -top-6 left-1/2 sm:left-auto transform -translate-x-1/2 sm:-translate-x-0 bg-orange-500 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-lg">
                    {edu.pass}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-green-500" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-bold text-gray-500 mb-1">
                      {edu?.year}
                    </p>
                    <h3 className="text-xl font-extrabold text-gray-800 mb-2 border-b border-gray-100 pb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
