import React from "react";

const News = () => {
  return (
    <div className="my-8">
      <div className="bg-gray-800 h-36 flex">
        <div className="container mx-auto px-44 flex ">
          <div className="flex justify-center text-xl self-center">
            <p className="self-center py-12 font-bold text-white text-3xl uppercase tracking-widest">
              Latest from the Sulman Lab
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-44 flex flex-col">
        <p className="text-xl py-8 text-teal-500 font-bold">
          Selected Publications
        </p>
        <p className="text-lg py-2 underline">
          Mesenchymal differentiation mediated by NF-kB promotes radiation
          resistance in glioblastoma.
        </p>
        <p className="py-2 text-lg underline">
          A multigene predictor of outcome in glioblastoma
        </p>
        <p className="py-2 text-lg underline">
          Tumor evolution of glioma-intrinsic gene expression subtypes
          associates with immunological changes in the microenvironment.
        </p>
      </div>
    </div>
  );
};

export default News;
