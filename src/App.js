import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blooms from "./pages/Rentals";
import Birthday from "./pages/events/Birthday";
import Womensday from "./pages/events/Womensday";
import Cradle from "./pages/events/Cradle";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Rentals from "./pages/Rentals";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/events/birthday" element={<Birthday />} />
          <Route path="/events/womensday" element={<Womensday />} />
          <Route path="/events/cradle" element={<Cradle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;