import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background SVG */}
      <svg
        className="w-full h-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="#1D293D"
          strokeOpacity=".7"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="#1D293D"
          strokeOpacity=".7"
        />
        <path
          stroke="#1D293D"
          strokeOpacity=".7"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="#1D293D"
          strokeOpacity=".7"
        />
      </svg>

      {/* Navbar */}
      <Navbar />
      <MobileNav />

      {/* Hero Content */}
      <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start">
          {/* Community Badge */}
          {/* <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs mb-6">
            <div className="flex items-center -space-x-2">
              <img
                className="w-7 h-7 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="userImage1"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="userImage2"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50"
                alt="userImage3"
              />
            </div>
            <p className="-translate-x-2 ml-3">
              Join a community of learners and innovators
            </p>
          </div> */}

          {/* Hero Heading */}
          <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-50">
            Empowering Ideas with{" "}
            <span className="text-orange-400 animate-pulse">
              Public Administration
            </span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-center md:text-left text-sm text-slate-200 max-w-lg mt-4">
            I am a graduate student in Public Administration passionate about
            governance, policy analysis, and effective public service. Explore
            my portfolio to see projects, skills, and contributions.
          </p>

          {/* Hero Buttons */}
          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11">
              View Portfolio
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="/profile.jpg"
          alt="hero"
          className="max-w-xs rounded-2xl sm:max-w-sm lg:max-w-md hover:scale-105 transition-all duration-300"
        />
      </section>
    </div>
  );
};

export default HeroSection;
