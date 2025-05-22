import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";

export default function UpcomingEvents() {
  return (
    <div className="font-serif">
      <Header />
      <IntroSection
        iconImgs={["/icons/upcoming-events.png"]}
        size="large"
        padding="pt-4 pb-6"
        title={<>What’s Coming Up </>}
        subtitle="From youth leagues to weekend tournaments, NY Ovals hosts cricket events that bring the Tri-City community together. 
          Our calendar features matches, coaching sessions, and special seasonal fixtures.
          Check back regularly to see what's coming up, register your team, or just drop by to enjoy the game-day atmosphere."
      />


      <div className="max-w-2xl mx-auto mt-8 bg-yellow-50 border border-yellow-300 rounded-lg shadow-md p-6 text-center elegant-font">
        <h3 className="text-2xl font-semibold text-yellow-800 mb-4">🗓️ Weekly Outdoor Practice Sessions</h3>

        <div className="space-y-3 text-lg text-gray-800">
          <div className="flex justify-between items-center">
            <span>🟢 <span className="font-semibold">Friday</span> (5:30 PM – 7:30 PM)</span>
            <span className="italic text-med text-gray-600">Beginners Practice</span>
          </div>

          <div className="flex justify-between items-center">
            <span>🔵 <span className="font-semibold">Saturday</span> (10:30 AM – 12:30 PM)</span>
            <span className="italic text-med text-gray-600">Experienced Players</span>
          </div>
        </div>
      </div>


    </div>


  );
}