import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import IntroSection from "../../components/IntroSection";
import { User, Briefcase, Lightbulb } from "lucide-react";


export default function OvalTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/data/coachingteam.json")
      .then(res => res.json())
      .then(data => setTeamMembers(data))
      .catch(err => console.error("Failed to load coachingteam.json", err));
  }, []);
  return (
    <div className="font-serif">
      <Header />
      <IntroSection
        icon="🛏️👶"
        iconImgs={["/icons/cricket-ball.png", "/icons/cricket-bat.png", "/icons/cricket-trophies.png"]}
        padding="pt-4 pb-6"
        title={<><strong>Meet our team</strong></>}
        subtitle="Behind every match, pitch, and event is a dedicated team that keeps NY Ovals running.
                 Get to know the people who make cricket happen in the Tri-City area."
      />

      <div className="bg-green-100 py-16 px-4 text-center font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500 font-medium mb-2">{member.title}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}