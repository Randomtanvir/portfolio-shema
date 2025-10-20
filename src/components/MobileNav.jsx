import React from "react";

const MobileNav = () => {
  return (
    <div
      id="mobile-navLinks"
      className="fixed inset-0 z-[100] bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 -translate-x-full"
    >
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/stories">Stories</a>
      <a href="/pricing">Pricing</a>
      <button
        id="close-menu"
        className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-white hover:bg-slate-200 transition text-black rounded-md flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
};

export default MobileNav;
