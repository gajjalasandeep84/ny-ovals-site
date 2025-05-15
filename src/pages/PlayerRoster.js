import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";

const players = {
  beginners: [
    {
      name: "Ayan G.",
      age: 8,
      role: "Beginner – Right-hand batsman",
      image: "/images/players/ayaang.png"
    },
    {
      name: "Liya K.",
      age: 9,
      role: "Beginner – All-rounder",
      image: "/images/players/liya.jpg"
    }
  ],
  experienced: [
    {
      name: "Rohan S.",
      age: 15,
      role: "Top-order Batsman",
      image: "/images/players/rohan.jpg"
    },
    {
      name: "Anjali M.",
      age: 16,
      role: "Fast Bowler",
      image: "/images/players/anjali.jpg"
    }
  ]
};

export default function PlayerRoster() {
  const [activeGroup, setActiveGroup] = useState("beginners");

  return (
       <div className="font-serif">
          <Header />
          <IntroSection
            iconImgs={["/icons/cricket-ball.png", "/icons/cricket-bat.png", "/icons/cricket-trophies.png"]}
            padding="pt-4 pb-6"
            title={<>Meet Our Players:<strong>– Beginners & Experienced </strong></>}
            subtitle={`From first-time learners to seasoned talents, every player is part of the NY Ovals journey.
                    Explore our growing community of cricketers, proudly representing the Tri-City region.`} />
     <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded shadow font-semibold ${
            activeGroup === "beginners"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveGroup("beginners")}
        >
          Beginners
        </button>
        <button
          className={`px-4 py-2 rounded shadow font-semibold ${
            activeGroup === "experienced"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveGroup("experienced")}
        >
          Experienced
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players[activeGroup].map((player, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center"
          >
            <img
              src={player.image}
              alt={player.name}
                className="w-36 h-36 mx-auto rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold">{player.name}</h3>
            <p className="text-sm text-gray-600">Age: {player.age}</p>
            <p className="text-sm text-gray-600">{player.role}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
