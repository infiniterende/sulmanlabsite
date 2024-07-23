import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GallerySlideshow from "../components/GallerySlideshow";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-36 mx-auto">
        <h1 className="text-teal-500 text-3xl tracking-wide uppercase">
          Gallery
        </h1>
        <div className="flex-grow border-b border-gray-100 py-4"></div>
        <GallerySlideshow />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
