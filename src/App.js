import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Beginners from "./pages/events/Beginners";
import Tournaments from "./pages/events/Tournaments";
import OvalTeam from "./pages/events/OvalTeam";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/events/beginners" element={<Beginners />} />
          <Route path="/events/tournaments" element={<Tournaments />} />
          <Route path="/events/ovalteam" element={<OvalTeam />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;