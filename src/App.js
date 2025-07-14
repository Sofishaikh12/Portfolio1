
/*
  React + Tailwind Portfolio inspired by Adham Dannaway
  Author: Sofiya Shaikh
*/

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Sofiya Shaikh</h1>
          <p className="text-xl">Frontend Developer & Software Tester</p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-200"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am an enthusiastic and detail-oriented Junior Web Developer and Software Tester with 1+
          years of experience. I specialize in React, JavaScript, and QA tools like Selenium, TestNG,
          and Maven. Passionate about building clean, scalable UIs and delivering quality-assured code.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-200 py-16 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>HTML / CSS</div>
          <div>JavaScript / React</div>
          <div>WordPress / PHP</div>
          <div>Selenium / TestNG</div>
          <div>Maven / JMeter</div>
          <div>MySQL / PostgreSQL</div>
          <div>Figma / VS Code</div>
          <div>Git / GitHub</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Build Smart Project */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Build Smart – Skill up to get Smart</h3>
            <p className="text-gray-700 mb-4">
              A React-based learning tool for students & staff with code browsers, aptitude tests, and more.
            </p>
            <p className="text-sm text-gray-500">Tech Stack: React, MySQL, Bootstrap, Figma</p>
          </div>

          {/* E-Commerce Automation */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Website Automation</h3>
            <p className="text-gray-700 mb-4">
              Automated key e-commerce functions using Selenium, Java, TestNG, and POM framework.
            </p>
            <p className="text-sm text-gray-500">Tech Stack: Selenium, Java, Maven, TestNG</p>
          </div>

          {/* Weather App */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Live Weather App</h3>
            <p className="text-gray-700 mb-4">
              A live weather checking app built with React and Tailwind, fetching real-time data from OpenWeather API.
            </p>
            <a
              href="https://github.com/yourgithub/weather-app"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="mb-4">Email: shaikhsofiya415@gmail.com</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/sofiyashaikh" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/sofishaikh12" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
