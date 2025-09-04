"use client"


import React from "react";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: <FiPhone className="text-xl" />,
    title: "Toll Number",
    subtitle: "+234 801 272 3390",
  },
  {
    icon: <FiMail className="text-xl" />,
    title: "Mail Address",
    subtitle: "Info@example.com",
  },
  {
    icon: <FiClock className="text-xl" />,
    title: "Working Hours",
    subtitle: "Mon - Friday, 9a.m - 8 p.m",
  },
  {
    icon: <FiMapPin className="text-xl" />,
    title: "Office Address",
    subtitle: "Ikoyi, Lagos.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
           initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{
                 delay: 0.4
                 }}
        className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </motion.h1>
        <motion.p
             initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{once: true}}
        className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          We’re constantly pushing the boundaries of what’s possible and seeking new ways to improve our services.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <motion.h2
             initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           viewport={{once: true}}
            className="text-lg font-semibold text-gray-800 text-center md:text-left">
              We’re happy to discuss your project and answer any question
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
              {contactDetails.map((item, index) => (
                <motion.div

                 initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
                  key={index}
                  className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-green-50 p-4 rounded-lg"
                >
                  <div className="bg-green-100 text-green-600 p-2 rounded-full mb-2 transition-colors duration-300 hover:bg-green-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <motion.div
                initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Send Us Message
            </h2>
            <p className="text-gray-500 mb-6">
              Feel free to fill up the form and our team will get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md p-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={6}
                className="w-full border border-gray-300 rounded-md p-3"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



