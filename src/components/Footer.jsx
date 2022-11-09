import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, easing: "ease" }}
      className="bg-[#222222] px-4 py-8 flex items-center justify-between text-slate-300"
    >
      <div className="flex-1">
        <p>Frequently Asked Questions</p>
        <p>Refund policy</p>
        <p>Terms of service</p>
      </div>
      <div className="flex-1 self-start">
        <h2 className="uppercase font-semibold tracking-wide">Follow Us</h2>
        <div className="flex space-x-2 my-3">
          <div className="h-8 w-8 rounded-full flex justify-center items-center border cursor-pointer">
            <FaInstagram />
          </div>
          <div className="h-8 w-8 rounded-full flex justify-center items-center border cursor-pointer">
            <FaTwitter />
          </div>
          <div className="h-8 w-8 rounded-full flex justify-center items-center border cursor-pointer">
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p>About Soko</p>
        <p>Become a retailer</p>
        <p>Blog</p>
        <p>Contact Us</p>
      </div>
    </motion.div>
  );
}

export default Footer;
