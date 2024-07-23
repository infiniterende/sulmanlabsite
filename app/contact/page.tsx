import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-56">
        <h1 className="text-teal-500 text-3xl tracking-wide uppercase">
          Contact
        </h1>
        <div className="flex-grow border-b border-gray-100 py-4"></div>
      </div>
      <h1 className="text-3xl text-teal-500 text-center py-8">Get in touch!</h1>
      <ContactForm />

      <p className="text-center py-8 px-96">
        Interested applicants may email a brief biography and CV to Dr. Sulman
        (erik.sulman at nyulangone.org) and May Ahn (may.ahn at nyulangone.org)
      </p>

      <Footer />
    </div>
  );
};

export default ContactPage;
