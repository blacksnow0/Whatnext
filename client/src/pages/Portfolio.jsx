import React from "react";

import ninwearImg from "../assets/projects/ninewear.png";
import whatnextImg from "../assets/projects/whatnext.png";
import burnmetricsImg from "../assets/projects/burnmetrics.png";
import hikingnationImg from "../assets/projects/hikingnation.png";
import hotelImg from "../assets/projects/newurvashi.png";

const projects = [
  {
    name: "NineWear",
    tech: "Shopify",
    url: "https://ninewear.in",
    image: ninwearImg,
  },
  {
    name: "WhatNext",
    tech: "React",
    url: "https://whatnextonline.in",
    image: whatnextImg,
  },
  {
    name: "BurnMetrics",
    tech: "React",
    url: "https://burn-metrics.vercel.app/",
    image: burnmetricsImg,
  },
  {
    name: "Hiking Nation",
    tech: "React",
    url: "https://hikingnation.in",
    image: hikingnationImg,
  },
  {
    name: "Hotel New Urvashi",
    tech: "WordPress",
    url: "https://newurvashibadrinath.com/",
    image: hotelImg,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
          <span className="text-cyan-400 text-sm tracking-widest uppercase">
            Himanshu Chauhan
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              High Impact
            </span>{" "}
            Web Experiences
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer specializing in React applications, scalable
            platforms and conversion-optimized websites.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              View Work
            </a>

            <a
              href="mailto:himanshu2001ofc@gmail.com"
              className="border border-slate-700 px-7 py-3 rounded-xl hover:border-cyan-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", skills: "React, Tailwind, UI Systems" },
            { title: "Backend", skills: "Node, Express, MongoDB" },
            { title: "Platforms", skills: "Shopify, WordPress, Vercel" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-400 text-sm">{item.skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">Selected Projects</h2>

          <p className="text-gray-400 text-sm mt-3 md:mt-0">
            Real-world production deployments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-sm tracking-wide">Open Project →</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{project.name}</h3>

                  <span className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-12 text-center">
          <span className="text-cyan-400 text-sm tracking-widest uppercase">
            What I Do
          </span>

          <h2 className="mt-3 text-3xl font-bold">Services & Expertise</h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I focus on building fast, scalable and business-driven web
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Fast Performance",
              desc: "Optimized React apps with clean architecture and fast load times.",
            },
            {
              title: "Scalable Systems",
              desc: "Production-ready backend and frontend structures.",
            },
            {
              title: "Conversion Focused",
              desc: "Websites built to convert users into customers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold">Let’s Build Something Great</h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Available for freelance projects, collaborations, and full-time
            roles.
          </p>

          <a
            href="mailto:himanshu2001ofc@gmail.com"
            className="inline-block mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Himanshu — Crafted with React &
            Tailwind
          </p>

          <div className="flex gap-6 text-sm">
            <a
              className="hover:text-cyan-400 transition"
              href="https://github.com/blacksnow0"
            >
              GitHub
            </a>
            <a
              className="hover:text-cyan-400 transition"
              href="https://www.linkedin.com/in/himanshu-chauhan-b6bb57266/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
