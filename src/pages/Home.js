import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";

function importAll(r) {
  return r.keys().map(r);
}

export default function Home() {
  const [selected, setSelected] = useState("Home");
  const [imageGroups, setImageGroups] = useState({
    Home: [],
    Gallery: [],
    "Rentals": [],
    "Beginners": [],
    "YTournaments": [],
  });

  const galleryRef = useRef(null);

  useEffect(() => {
    setImageGroups({
      Home: importAll(require.context('../watermarked/images/home', false, /\.(png|jpe?g|svg)$/)),
      Gallery: importAll(require.context('../watermarked/images/gallery', false, /\.(png|jpe?g|svg)$/)),
      "Rentals": importAll(require.context('../watermarked/images/rentals', false, /\.(png|jpe?g|svg)$/)),
      "Birthday Parties": importAll(require.context('../watermarked/images/beginners', false, /\.(png|jpe?g|svg)$/)),
      "Womensday Events": importAll(require.context('../watermarked/images/tournaments', false, /\.(png|jpe?g|svg)$/)),
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
        <GallerySection selected={selected} images={imageGroups[selected] || []} />
      </div>
    </div>
  );
}