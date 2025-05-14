import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const recaptchaRef = useRef();
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();
    if (!token) {
      setFormStatus("Please verify you're not a robot.");
      return;
    }

    emailjs.sendForm(
      "service_7de2vba",
      "template_9did7be",
      e.target,
      "RbSIEsg3eItd9Q2WL"
    ).then(
      () => {
        setFormStatus("Message sent successfully!");
        e.target.reset();
        recaptchaRef.current.reset();
      },
      () => {
        setFormStatus("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="bg-white-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-2 font-serif elegant-font">Get In Touch</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Have a question about our facility, or about how we can match your specific needs? If you have a close deadline or a special request, ask us. Send us a message, and we will get back to you as soon as we can.
      </p>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-green-100 p-8 space-y-6 text-gray-700">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <h4 className="text-xl font-semibold elegant-font">Visit Us:</h4>
              <p className="text-sm uppercase mt-1">4281 Amsterdam Rd<br />Glenville, NY 12302</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📧</span>
            <div>
              <h4 className="text-xl font-semibold elegant-font">Mail Us:</h4>
              <p className="text-sm mt-1">contact@nyovals.com</p>
            </div>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-white">
          <h4 className="text-2xl font-semibold mb-4 elegant-font">Tell Us About Your Event</h4>
          {formStatus && (
            <p className="text-center text-sm font-medium mb-2 text-green-600">
              {formStatus}
            </p>
          )}

          <input name="full_name" type="text" placeholder="Name" className="w-full border border-gray-300 p-2 rounded" required />
          <input name="email" type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded" required />
          <input name="phone" type="tel" placeholder="Phone" className="w-full border border-gray-300 p-2 rounded" required />
          <div className="relative">
            <label
              htmlFor="event_date"
              className="absolute left-3 top-2 text-gray-400 text-sm pointer-events-none"
            >
              Event Date
            </label>
            <input
              id="event_date"
              name="event_date"
              type="date"
              className="w-full pt-5 pb-2 px-3 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>

          <textarea name="message" placeholder="Message" className="w-full border border-gray-300 p-2 rounded" rows="4" required></textarea>

          <div className="w-full flex justify-center">
            <ReCAPTCHA
              sitekey="6Lf9NTcrAAAAADrj6lgiXaPyI2KE6m3Lw58GoI65"
              ref={recaptchaRef}
            />
          </div>

          <button type="submit" className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}