import React from "react";

const ResearchGrid = () => {
  return (
    <div>
      <div className="flex mx-52">
        <div className="flex w-full justify-center">
          <div
            className="relative bg-center bg-cover flex w-1/2 h-64 mx-4 my-8 px-20 py-40 text-white text-center text-lg bg-opacity-10"
            style={{
              backgroundImage: `url("/images/capture-paper.png")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="absolute inset-0 flex items-center justify-center z-10"> */}
            <p className="text-white text-xl font-medium  px-10 text-center self-center z-10">
              Lineage-coupled clonal capture identifies clonal evolution
              mechanisms and vulnerabilities of BRAF inhibition resistance in
              melanoma
            </p>
          </div>

          {/* <div className="col-span-2"></div> */}
          <div
            className="relative bg-center bg-cover flex w-1/2 h-48  mx-4  my-8 px-20 py-40 text-white text-center text-lg "
            style={{ backgroundImage: `url("/images/melanoma.jpg")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <p className="text-white text-xl font-medium  px-10 text-center self-center z-10">
              Melanoma brain metastases harboring BRAFV600K or NRAS mutations
              are associated with an increased local failure rate following
              conventional therapy
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-52">
        <div className="flex w-full justify-center">
          <div
            className="relative bg-center bg-cover flex w-1/2 h-64 mx-4 my-8 px-20 py-40 text-white text-center text-lg bg-opacity-10"
            style={{
              backgroundImage: `url("/images/img5.png")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="absolute inset-0 flex items-center justify-center z-10"> */}
            <p className="text-white text-xl font-medium  px-10 text-center self-center z-10">
              Tumor Evolution of Glioma- Intrinsic Gene Expression Subtypes
              Associates
            </p>
          </div>

          {/* <div className="col-span-2"></div> */}
          <div
            className="relative bg-center bg-cover flex w-1/2 h-48  mx-4  my-8 px-20 py-40 text-white text-center text-lg "
            style={{ backgroundImage: `url("/images/image3.jpg")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <p className="text-white text-xl font-medium  px-10 text-center self-center z-10">
              Increase in circulating platelets following chemoradiation
              predicting poor survival of patients with glioblastoma 
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-52">
        <div className="flex justify-center w-full">
          <div
            className="relative bg-center bg-cover flex w-1/2 h-64 mx-4 my-8 px-20 py-40 text-white text-center text-lg bg-opacity-10"
            style={{
              backgroundImage: `url("/images/brain.png")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="absolute inset-0 flex items-center justify-center z-10"> */}
            <p className="text-white text-xl font-medium  px-10 text-center self-center z-10">
              Mesenchymal Differentiation Mediated by NF-kB promoting Radiation
              Resistance in Glioblastoma
            </p>
          </div>

          {/* <div className="col-span-2"></div> */}
          <div
            className="relative bg-center bg-cover flex w-1/2 h-48  mx-4  my-8 px-20 py-40 text-white text-center text-lg "
            style={{ backgroundImage: `url("/images/img7.png")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <p className="text-white text-xl font-medium  px-10 text-center self-center z-10">
              DNA methylation-based epigenetic signatures predict somatic
              genomic alterations in gliomas
            </p>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-6 py-8"> */}

      {/* <!-- Centered 2-column section --> */}
      {/* <div className="col-span-2 flex justify-center">
          <div
            className="w-full bg-center bg-cover px-48 py-36 gap-2 mx-4 bg-slate-900 text-white text-center text-lg bg-opacity-50"
            style={{ backgroundImage: `url("/images/img7.png")` }}
          >
            Mesenchymal Differentiation Mediated by NF-kB promoting Radiation
            Resistance in Glioblastoma
          </div>
          <div className="col-span-2"></div>
          <div
            className="w-full bg-center bg-cover px-48 py-36 gap-2 mx-4 bg-slate-900 text-white text-center text-lg bg-opacity-50"
            style={{ backgroundImage: `url()` }}
          >
            DNA methylation-based epigenetic signatures predict somatic genomic
            alterations in gliomas
          </div>
        </div> */}

      {/* <!-- Empty columns for spacing --> */}
      {/* <div className="col-span-2"></div> */}
      {/* </div> */}
    </div>
  );
};

export default ResearchGrid;
