import React, { useState, useEffect } from "react";
import { Bio } from "../data/data";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Experience", to: "Experience" },
    { name: "Projects", to: "Projects" },
    { name: "Open Source", to: "OpenSource" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled
          ? "bg-black/50 backdrop-blur-md border border-white/10 w-full max-w-2xl shadow-xl"
          : "bg-transparent w-full max-w-4xl"
          }`}
      >
        <Link
          to="About"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-xl font-bold tracking-tighter hover:text-white/80 transition-colors cursor-pointer"
        >
          Harnoor
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-white"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
          <div className="flex items-center gap-4">
            <a href={Bio.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={Bio.twitter} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center gap-8 animate-in slide-in-from-top-10 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-zinc-300 hover:text-white cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
