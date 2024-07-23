"use client";

// 1. create images folder 2. loop through images 3. set a ref to slide display 4. change id to increment when
// pressing next button, decrement when pressing previous button
// set id % length(images)
//
import React, { useRef, useState } from "react";
import { gallery } from "../data.js";
import Image from "next/image";

const GallerySlideshow = () => {
  let galleryArray = gallery.map((image, index) => ({ ...image, id: index }));

  const [currentSlide, setCurrentSlide] = useState<any>(galleryArray[0]);
  const slideRef = useRef<number>(0);

  const showNextSlide = () => {
    slideRef.current = (slideRef.current % galleryArray.length) + 1;
    if (slideRef.current == galleryArray.length) {
      slideRef.current = 0;
    }
    console.log(slideRef.current);
    let img = galleryArray.filter((image) => image.id == slideRef.current);
    setCurrentSlide(img[0]);
  };

  const showPrevSide = () => {
    console.log("slide");
    slideRef.current = (slideRef.current % galleryArray.length) - 1;
    if (slideRef.current == -1) {
      slideRef.current = galleryArray.length - 1;
    }
    let img = galleryArray.filter((image) => image.id == slideRef.current);

    setCurrentSlide(img[0]);
  };

  return (
    <div className="container mx-auto px-24">
      <div className="justify-center mx-auto bg-cover bg-center w-12/12 h-full h-11/12">
        <div className="relative">
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${currentSlide.src})` }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-10 py-20 relative">
              <div className="text-center">
                <div className="container px-12 p-12 py-36 mx-auto">
                  <div className="max-w-4xl max-h-4xl mx-auto text-center">
                    <span className="text-gray-200 font-semibold uppercase tracking-widest">
                      {/* New feature */}
                    </span>
                    <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    </h2>

                    <div className="absolute inset-0 flex flex-col w-full h-20 self-end align-middle text-lg text-white bg-gray-900 bg-opacity-50">
                      <div className="my-auto self-start flex-row align-middle px-4 font-normal text-xl uppercase tracking-widest">
                        {currentSlide.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              onClick={showPrevSide}
              className="bg-gray-100 opacity-50 hover:bg-gray-400 text-gray-800 font-bold  w-16 h-16 items-center justify-center flex "
            >
              <p className="text-3xl">&#8249;</p>
            </button>
            <button
              onClick={showNextSlide}
              className="bg-gray-100 opacity-50 hover:bg-gray-400 text-gray-800 font-bold  w-16 h-16 items-center justify-center flex"
            >
              <p className="text-3xl">&#8250; </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlideshow;
