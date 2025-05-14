import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane,
  FaYoutube
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-700 text-sm pt-16 pb-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start text-center md:text-left">
        {/* Logo + About */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NY Ovals Logo" className="h-10 w-auto" />
            <h4 className="font-semibold elegant-font text-lg mb-2 text-center">NY Ovals</h4>
          </div>
          <p className="text-gray-600">
            At NY Ovals, we provide top-tier natural turf cricket grounds for leagues, tournaments, and community events.
            From weekend matches to professional play, our facility is built to deliver an authentic cricketing experience right here in New York.
          </p>
        </div>

        {/* Services */}
        <div className="text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img src="/icons/cricket-ball.png" alt="Cricket Ball" className="w-6 h-6" />
            <img src="/icons/cricket-bat.png" alt="Cricket Bat" className="w-6 h-6" />
            <h4 className="font-semibold elegant-font text-lg mb-2 text-center">Play at NY Ovals</h4>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span>Weekend League Matches</span>
            <span>Private Team Bookings</span>
            <span>Gender Reveals</span>
            <span>Coaching Sessions</span>
            <span>Turf Wicket Rentals</span>
            <span>Local Tournaments</span>
            <span>School & College Matches</span>
            <span>Corporate Cricket Days</span>
            <span>Youth & Adult Practice Nets</span>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold elegant-font text-lg mb-2">Contact Information</h3>
          <p className="mb-1">4281 Amsterdam Rd<br />Glenville, NY 12302</p>
          <p className="flex items-center gap-2"><span>📧</span> contact@nyovals.com</p>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.facebook.com/profile.php?id=100087200918950" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://www.instagram.com/ny_ovals/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-700" />
          </a>
          <a href="https://www.youtube.com/watch?v=kiQzVUqQ9QA" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-pink-500 hover:text-pink-700" />
          </a>
        </div>
        <p className="text-sm text-gray-500">Copyright © 2025 NY Ovals - All Rights Reserved.</p>
        <p className="text-sm text-gray-500">
          <strong>Developed by</strong>{' '}
          <a
            href="https://dhriti.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-600"
          >
            Dhriti.Solutions – Service-Focused, Budget-Conscious Web Development
          </a>
        </p>
      </div>
    </footer>
  );
}