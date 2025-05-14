import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";

export default function Rentals() {
  return (
    <div className="font-serif">
      <Header/>
      <IntroSection
        icon="🎉🪑🎪"
        padding="pt-4 pb-6"
        title={<>Fiesta Event Decor  <strong>– Special Events, Beautifully Designed</strong></>}
        subtitle="At Fiesta Event Decor, we believe that every detail—no matter how small—plays a vital role in creating that unforgettable ‘Wow’ factor. From elegant centerpieces to custom backdrops, we’re here to help you craft a look that reflects your vision and leaves a lasting impression on your guests. Whether you're planning a birthday, wedding, or cultural celebration, let your event stand out from the crowd. Ask us how we can bring your ideas to life with a personalized touch that makes your day truly one-of-a-kind.
        Reach out today and let the planning begin!"
      />
    </div>
  );
}