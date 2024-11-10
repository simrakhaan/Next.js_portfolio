"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-pink-600 py-6 px-4">
      <div className="  container mx-auto flex flex-col items-center px
-4 py-2">
        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-4">
          <a
            href="https://github.com/simrakhaan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-black p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:khansimra652@gmail.com"
            className="transition-transform transform hover:scale-110 hover:text-blue-800 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="http://www.linkedin.com/in/simra-khan-2641a72b5"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Rights Reserved */}
        <p className="text-sm mt-6 text-black font-semibold">
          &copy; {new Date().getFullYear()} Simra Khan | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
