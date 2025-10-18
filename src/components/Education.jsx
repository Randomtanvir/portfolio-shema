import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2022",
      degree: "Bachelor of Social Science (BSS)",
      institution:
        "Bangabandhu Sheikh Mujibur Rahman Science And Technology University",
      result: "CGPA: 3.44 / 4.00",
      description:
        "Focused on governance, policy analysis, and public sector management. Developed leadership, problem-solving, and analytical skills.",
    },
    {
      year: "2017",
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "North Khulna College",
      result: "GPA: 4.50 / 5.00",
      description:
        "Studied humanities and social sciences, building a strong foundation in civic studies and research methods.",
    },
    {
      year: "2017",
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
    <section className="relative py-32 bg-gradient-to-b from-orange-50 to-white">
      {/* Section Title */}
      <div className="max-w-5xl mx-auto px-6 text-center lg:text-left mb-24">
        <h2 className="text-5xl font-bold text-gray-900 ">
          🎓 Education & Qualifications
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Gradient vertical line */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-1 bg-gradient-to-b from-orange-400 to-orange-200 rounded-full hidden sm:block"></div>

        <div className="space-y-24">
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
                  className={`sm:w-1/2 bg-gradient-to-tr from-white to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition transform ${
                    isLeft
                      ? "sm:mr-auto sm:text-left"
                      : "sm:ml-auto sm:text-right"
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute -top-6 left-1/2 sm:left-auto sm:translate-x-0 transform -translate-x-1/2 sm:-translate-x-0 bg-orange-500 dark:bg-orange-400 text-white font-bold w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-lg">
                    {edu.year}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-orange-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.result}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    {edu.description}
                  </p>
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

// src/data/timelineData.js

// src/data/timelineData.js

// const educationData = [
//   {
//     year: "2018 - 2022",
//     title: "Master Degree",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   },
//   {
//     year: "2018 - 2022",
//     title: "Bachelor's Degree",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   },
//   {
//     year: "2018 - 2022",
//     title: "High School Degree",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   },
// ];

// src/components/EducationTimelineItem.jsx

// const EducationTimelineItem = ({ data }) => {
//   return (
//     <div className="relative mb-12 pl-6">
//       {/* Timeline Dot and Line */}
//       <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
//       <div className="absolute -left-1.5 top-0 mt-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>

//       {/* Content Card */}
//       <div
//         className="ml-4 p-5 bg-white border-t-4 border-green-500 rounded-lg shadow-lg
//                     transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5"
//       >
//         <p className="text-sm font-bold text-gray-500 mb-1">{data.year}</p>
//         <h3 className="text-xl font-extrabold text-gray-800 mb-2 border-b border-gray-100 pb-2">
//           {data.title}
//         </h3>
//         <p className="text-gray-600 text-sm">{data.description}</p>
//       </div>
//     </div>
//   );
// };

// src/components/EducationTimeline.jsx

// const EducationTimeline = () => {
//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header Section */}
//         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
//           My Educational Journey
//         </h1>
//         <p className="text-center text-lg text-green-600 mb-12">
//           A detailed look at my academic qualifications.
//         </p>

//         {/* Timeline Container */}
//         <div className="relative">
//           {educationData.map((item, index) => (
//             <EducationTimelineItem key={index} data={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationTimeline;
