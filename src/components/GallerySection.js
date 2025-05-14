import React from "react";
import { motion } from "framer-motion";

export default function GallerySection({ images, selected }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">
      {images.map((img, idx) => (
        <motion.div
          key={img}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <img src={img} alt={`${selected} ${idx}`} className="rounded-lg shadow-lg w-full" />
        </motion.div>
      ))}
    </main>
  );
}