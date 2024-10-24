import React from 'react'

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="section flex justify-center text-gray-800 py-12">
    <footer className="max-w-[800px] w-full bg-gray-100 flex flex-col items-left md:flex-row justify-between md:items-center gap-8 p-8 rounded-lg">
      {/* Left section */}
      <div className="flex flex-col items-start">
        <h3 className="text-2xl font-semibold mb-4">Studily</h3>
        <p className="text-gray-600 mb-6 max-w-[300px]">
          A platform designed to help students manage their assignments and stay on top of their academic tasks.
        </p>
        <div className="flex gap-4">
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500 transition-colors" />
          </a>
          <a href="mailto:contact@studily.com" aria-label="Email">
            <FaEnvelope className="text-2xl hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Right section - Contact Info */}
      <div className="flex flex-col items-start">
        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
        <p className="text-gray-600 mb-2">123 Study Lane, Knowledge City</p>
        <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
        <p className="text-gray-600">Email: support@studily.com</p>
      </div>
    </footer>
  </section>
  )
}

export default Footer