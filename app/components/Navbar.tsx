import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between flex-wrap p-6 mx-20">
          <div className="text-3xl font-extrabold text-teal-500 uppercase tracking-widest">
            The Sulman Lab
          </div>

          <div className="flex justify-between flex-row p-6">
            <ul className="flex font-semibold flex-wrap flex-row text-teal-500">
              <Link href="/">
                <li className="ml-8">Home</li>
              </Link>
              <Link href="/research">
                <li className="ml-8">Research</li>
              </Link>
              <Link href="/people">
                <li className="ml-8">People</li>
              </Link>
              <Link href="/publications">
                <li className="ml-8">Publications</li>
              </Link>
              <Link href="/gallery">
                <li className="ml-8">Gallery</li>
              </Link>
              <Link href="/contact">
                <li className="ml-8">Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex-grow border-t border-gray-100 py-4"></div>
    </div>
  );
};

export default Navbar;
