import React from "react";
import { Bio } from "../data/data";
import { Github, Linkedin, Twitter, SquareTerminal, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${Bio.email}`}
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={`tel:+${Bio.phone.replace(/\D/g, "")}`}
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
          {/* Fallback for LeetCode if lucide doesn't have it, or just use SquareTerminal as generic code icon */}
          <a
            href={Bio.leetCode}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <SquareTerminal size={20} />
          </a>
        </div>

        <div className="text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Harnoor Singh.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
