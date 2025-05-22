import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "../components/IntroSection";


function importAll(r) {
  return r.keys().map(r);
}


export default function Weddings() {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

/* useEffect(() => {
    const loadedImages = importAll(require.context("../watermarked/images/gallery", false, /\.(png|jpe?g|svg)$/));
    setImages(loadedImages);
  }, []);*/

   useEffect(() => {
  fetch("/data/gallery.json")
    .then((res) => res.json())
    .then((data) => setImages(data));
}, []);


  const openSlideshow = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeSlideshow = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  return (
    <div className="font-serif">
      <Header />
      <IntroSection
        iconImgs={["/icons/grounds.png"]}
        size="large"
        padding="pt-4 pb-6"
        title={<>Explore <strong>‘NY Ovals’</strong> From Every Angle</>}
        subtitle={
          <>
            <p>Explore the grounds where cricket thrives in the heart of Albany, Troy, and Schenectady. From scenic drone views to pitch-side captures,
              this gallery showcases the natural turf, open spaces, and community spirit that define NY Ovals.</p>
            <p className="mt-4">Whether you're gearing up for league play or just visiting,
              these images offer a glimpse of the place where the Tri-City area comes together to practice, compete, and celebrate the game.</p>
          </>
        }
      />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openSlideshow(idx)}
            >
              <img
                src={img}
                alt={`Wedding ${idx}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </motion.div>
          ))}
        </div>
      </main>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          >
            <div className="relative max-w-5xl w-full px-4">

              <div className="fixed top-4 left-4 text-sm z-50 text-white text-sm z-20">
                {currentIndex + 1} / {images.length}
              </div>
              <div className="fixed top-4 right-4 text-white flex items-center gap-6 z-50">

                <button
                  onClick={() => {
                    const el = document.documentElement;
                    if (el.requestFullscreen) el.requestFullscreen();
                  }}
                  className="hover:text-yellow-400"
                  title="Full View"
                >🔍</button>


                <button
                  onClick={() => {
                    const url = images[currentIndex];
                    if (navigator.share) {
                      navigator.share({ title: 'Fiesta Event Decor', url });
                    } else {
                      navigator.clipboard.writeText(url);
                      alert("Image link copied to clipboard!");
                    }
                  }}
                  className="hover:text-yellow-400"
                  title="Share"
                >
                  📤
                </button>

                <button onClick={closeSlideshow} className="text-3xl hover:text-red-400" title="Close">×</button>
              </div>

              <motion.img
                src={images[currentIndex]}
                alt="Slideshow"
                key={images[currentIndex]}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-white text-4xl px-6 cursor-pointer" onClick={prevImage}>
                ‹
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-white text-4xl px-6 cursor-pointer" onClick={nextImage}>
                ›
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}