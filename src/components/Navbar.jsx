import React from "react";

const Navbar = () => {
  return (
    <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white text-sm">
      <div className="flex items-center justify-center sm:justify-start space-x-2">
        {/* Optional small icon or monogram */}
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">N</span>
        </div>

        {/* Logo Text */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          NOORJAHAN
        </h2>
      </div>

      <div className="hidden md:flex items-center gap-8 transition duration-500">
        <a href="/" className="hover:text-slate-300 transition">
          Home
        </a>
        <a href="/products" className="hover:text-slate-300 transition">
          About
        </a>
        <a href="/products" className="hover:text-slate-300 transition">
          Skills
        </a>
        <a href="/stories" className="hover:text-slate-300 transition">
          Education
        </a>
        <a href="/pricing" className="hover:text-slate-300 transition">
          Contact
        </a>
      </div>

      <button className="hidden md:block px-6 py-2.5 text-black bg-white hover:bg-slate-200 active:scale-95 transition-all rounded-full">
        Download CV
      </button>
      <button id="open-menu" className="md:hidden active:scale-90 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
