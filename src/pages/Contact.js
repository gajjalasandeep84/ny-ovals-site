import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-serif">
      <Header selected="Contact" setSelected={() => { }} />
      <ContactForm />
      </div>
  );
}
