import React from "react";
import Navbar from "../components/Navbar";
import PastMembers from "../components/PastMembers";
import Footer from "../components/Footer";

const PeoplePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-56">
        <h1 className="py-8 text-teal-500 text-3xl uppercase tracking-wider">
          People
        </h1>
        <div className="flex flex-col">
          <div className="flex-row flex">
            <div className="w-4/12 h-56">
              <img
                src="/images/sulman.jpg"
                alt="yingwen"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Erik Sulman, MD, PhD</h3>
              <h4 className="text-center">Principal Investigator </h4>
            </div>
            <div className="w-4/12 h-56">
              <img
                src="/images/yingwen.jpg"
                alt="yingwen"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Yingwen Ding, PhD</h3>
              <h4 className="text-center">Research Scientist</h4>
            </div>
            <div className="w-4/12 h-56 ">
              <img
                src="/images/zeyan.jpg"
                alt="zeyan"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Zeyan Zhang, PhD</h3>
              <h4 className="text-center ">Research Scientist</h4>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-4/12 h-56 my-36">
              <img
                src="/images/jerry.jpg"
                alt="zeyan"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Jerome Karp, MD, PhD</h3>
              <h4 className="text-center ">Assistant Professor </h4>
            </div>
            <div className="w-4/12 h-56 my-36">
              <img
                src="/images/aram.jpg"
                alt="aram"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Aram Modrek, MD, PhD</h3>
              <h4 className="text-center">Visiting Professor</h4>
            </div>
            <div className="w-4/12 h-56 my-36">
              <img
                src="/images/shirley.jpg"
                alt="shirley"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Shirley Xu, BA</h3>
              <h4 className="text-center">Research Technician </h4>
            </div>
          </div>
          <h2 className="text-xl p-8 font-bold ">Summer Interns</h2>
          <div className="flex-row flex">
            <div className="w-4/12 h-56 ">
              <img
                src="/images/bailey.jpg"
                alt="bailey"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Bailey Murphy</h3>
              <h4 className="text-center">
                Undergraduate Student at Penn State University{" "}
              </h4>
            </div>
            <div className="w-4/12 h-56">
              <img
                src="/images/ava.jpg"
                alt="ava"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Ava Samson</h3>
              <h4 className="text-center">
                Undergraduate Student at Wesleyan University
              </h4>
            </div>
            <div className="w-4/12 h-56 ">
              <img
                src="/images/asher.jpg"
                alt="zeyan"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Asher Friedland</h3>
              <h4 className="text-center ">Summer Intern</h4>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-4/12 h-56 my-36">
              <img
                src="/images/eloise.jpg"
                alt="zeyan"
                className="object-scale-down max-h-full m-auto"
              />
              <h3 className="text-center p-4 text-lg">Eloise McGibbon</h3>
              <h4 className="text-center ">Summer Intern </h4>
            </div>
          </div>
        </div>

        <PastMembers />
        <Footer />
      </div>
    </div>
  );
};

export default PeoplePage;
