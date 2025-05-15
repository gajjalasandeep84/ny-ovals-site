import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";

export default function Home() {
  const [selected, setSelected] = useState("Home");
  const [homeImages, setHomeImages] = useState([]);


  const galleryRef = useRef(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((res) => res.json())
      .then((home) => {
        setHomeImages({
          Home: home
        });
      })
      .catch((err) => {
        console.error("Error loading home images", err);
      });
  }, []);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selected]);

  return (
    <div className="font-serif">
      <Header selected={selected} setSelected={setSelected} />
      <IntroSection
        iconImgs={["/icons/cricket-ball.png", "/icons/cricket-bat.png", "/icons/cricket-trophies.png"]}
        title={<>Welcome to NY Ovals  <strong>– Where Cricket Meets Community and Nature</strong></>}
        subtitle={`NY Ovals Cricket Facility features three full-size natural turf cricket pitches.
The fields are open for seasonal lease starting Memorial Day weekend.
Ideal for league matches, practice sessions, or private events, our grounds offer a scenic and professional playing experience.
Reserve your slot early to secure your preferred dates.NY Ovals Cricket Facility has 3 large natural turf wickets. Fields are available to lease from Memorial Day weekend.

Reach out today and let the planning begin!`}
      />
      <div ref={galleryRef}>
        <GallerySection selected={selected} images={homeImages[selected] || []} />
      </div>
    </div>
  );
}