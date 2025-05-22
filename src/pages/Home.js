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
        iconImgs={["/icons/welcome2nyovals.png"]}
        size="large"
        title={<><strong>Where Cricket Meets Community and Nature</strong></>}
        subtitle={
          <><p>NY Ovals Cricket Facility features three full-size natural turf cricket pitches, offering an unmatched experience for players and spectators alike.</p>
            <p>Nestled in a scenic landscape, our grounds are professionally maintained to deliver a premium playing environment that mirrors international standards.</p>
            <p>The fields are available for <strong>seasonal lease beginning Memorial Day weekend</strong>, making them perfect for <em>league matches, practice sessions, friendly tournaments, youth development programs, or private cricket events</em>.</p>
            <p>Whether you're a club seeking a consistent venue, a coach organizing training camps, or a group planning a weekend cricket fest, <strong>NY Ovals provides the ideal setting to bring your vision to life</strong>.</p>
            <p>With <strong>ample space, dedicated wickets, and a growing cricketing community</strong>, NY Ovals is proud to be the first natural turf cricket facility in the Northeast USA with <strong>three full-size fields and a total of 15 turf pitches</strong>.</p>
            <p>📅 <strong>Reserve your slot early</strong> to secure your preferred dates — availability fills quickly.<br />
              📞 <strong>Reach out today</strong> and let the planning begin — be a part of a new chapter in American cricket history.</p>
          </>}

      />
      <div ref={galleryRef}>
        <GallerySection selected={selected} images={homeImages[selected] || []} />
      </div>
    </div>
  );
}