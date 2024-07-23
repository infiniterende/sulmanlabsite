import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ResearchPage() {
  return (
    <div className="">
      <Navbar />
      <div className=" h-60 w-full">
        <div className="container px-56">
          <h1 className="py-8 text-teal-500 text-3xl uppercase tracking-wider">
            Research
          </h1>
          <p className="tracking-wide text-teal-800">
            Glioblastoma is the most common, complex, and aggressive malignant
            brain tumor in adults. Affecting more than 15,000 Americans, GBM has
            a five-year survival rate of only 7%. Our laboratory studies the
            biology of glioblastomas, including glioma stem cell biology, tumor
            micro-environment, and the mechanisms of treatment resistance. We
            focus on the development of novel molecular biomarkers of
            glioblastomas with a strong emphasis on translational research and
            treatment outcomes. Our research have been published in journals
            such as Nature, Cancer Cell, New England Journal of Medicine,
            Neuro-oncology, and more. Studies include mesenchymal
            differentiation that promotes radiation resistance in gliobastoma,
            multigene predictors of gliobastoma outcomes, and tumor evolution of
            glioma-intrinsic gene expression subtypes.
          </p>
          <div className="flex-grow border-b border-gray-100 py-8"></div>
          <h2 className="py-8 text-teal-500 uppercase tracking-wide text-2xl">
            Projects
          </h2>
          <h2 className="text-xl py-8">
            Tumor Evolution of Glioma-Intrinsic Gene Expression Subtypes
            Associates with Immunological Changes in the Microenvironment
          </h2>
          <div className="content flex">
            <img
              src="/images/img5.png"
              alt="tumor evolution"
              className="w-6/12"
            />
            <p className="item-body px-4">
              Glioblastoma expression subtypes have been related to genomic
              abnormalities, treatment response, and differences in the tumor
              microenvironment. We defined tumor intrinsic gene expression
              subtypes, which establishes a role for the tumor immune
              environment in shaping the tumor cell transcriptome. Notably, NF1
              inactivation resulted in chemoattraction of macrophages/microglia.
              Comparison of matching primary and recurrent gliomas elucidated
              treatment- induced phenotypic tumor evolution, including
              expression subtype switching in nearly half of our cohort, as well
              as associations between microenvironmental components and
              treatment response. Characterization of the evolving glioblastoma
              transcriptome and tumor microenvironment aids in designing more
              effective immuno- therapy trials. Our study provides a
              comprehensive transcriptional and cellular landscape of IDH
              wild-type glioblastoma during treatment-modulated tumor evolution.
            </p>
          </div>
          <div className="flex-grow border-b border-gray-100 py-8"></div>
          <h2 className="text-xl py-8">
            A Relative Increase In Circulating Platelets Following
            Chemoradiation Predicts For Poor Survival of Patients with
            Glioblastoma
          </h2>
          <div className="content flex">
            <p className="item-body px-4">
              Thrombocytosis, a condition marked by elevated platelet levels,
              correlates with poor survival across various cancers including
              malignant mesothelioma, melanoma, glioblastoma, and several
              others. Tumors produce thrombopoietic factors like IL-1, IL-6, and
              others, contributing to thrombocytosis. Platelets aid tumor
              progression by impairing immune response, promoting tumor cell
              survival in circulation, and enhancing metastasis through
              interactions with VEGF and tissue factors. Additionally, platelets
              support angiogenesis by releasing proangiogenic factors like VEGF
              and PDGF. Tumor-educated platelets, which acquire tumor RNA, serve
              as potential biomarkers. In glioblastoma patients, post-treatment
              thrombocytosis predicts poorer prognosis, suggesting a role in
              monitoring and therapy development.
            </p>
            <img src="/images/image3.jpg" alt="platelets" className="w-6/12" />
          </div>

          <div className="flex-grow border-b border-gray-100 py-8"></div>
          <h2 className="text-xl py-8">
            Melanoma brain metastases harboring BRAFV600K or NRAS mutations are
            associated with an increased local failure rate following
            conventional therapy
          </h2>
          <div className="content flex">
            <img src="/images/img6.png" alt="melanoma" className="w-6/12" />
            <p className="item-body px-4">
              Melanoma brain metastases (MBMs) affect nearly half of melanoma
              patients, with a median survival of 3–5 months. Prognostic factors
              for MBMs have been extensively studied, but the clinical impact of
              NRAS and BRAF mutations remains unclear. BRAF mutations, found in
              about 50% of melanomas, and NRAS mutations (20%) are associated
              with aggressive tumor features and poorer survival, particularly
              NRAS mutations. Targeted therapies like BRAF inhibitors have
              significantly improved survival in BRAF-mutated MBMs. However,
              challenges persist with local and distant treatment failures.
              Further research into mutation-specific responses and combination
              therapies with radiation and surgery is crucial to improve
              outcomes for MBM patients, especially those not exposed to
              targeted or immunotherapy.
            </p>
          </div>
          <div className="flex-grow border-b border-gray-100 py-8"></div>
          <h2 className="text-xl py-8">
            Lineage-coupled clonal capture identifies clonal evolution
            mechanisms and vulnerabilities of BRAFV600E inhibition resistance in
            melanoma
          </h2>
          <div className="content flex">
            <p className="item-body px-4">
              Despite advancements in targeted cancer therapies, achieving
              complete cures remains challenging due to the emergence of
              treatment resistance. In melanoma, BRAF mutations drive tumor
              growth via the MAPK signaling pathway, making BRAF-targeted
              therapies effective initially but prone to resistance development.
              Understanding clonal evolution and resistance mechanisms is
              hindered by limitations in tracking cellular heterogeneity and
              functional validation methods. Current technologies like
              single-cell sequencing and genome-scale gene perturbation screens
              offer insights but struggle with precision in multi-omics tracking
              and live clonal validation. Innovations like the CAPTURE barcoding
              library show promise in mapping clonal dynamics and identifying
              new therapeutic targets in resistant melanoma cells, addressing a
              critical need for more effective treatment strategies.
            </p>
            <img src="/images/capture.png" alt="capture" className="w-6/12" />
          </div>
          <div className="flex-grow border-b border-gray-100 py-8"></div>
          <h2 className="text-xl py-8">
            DNA methylation-based epigenetic signatures predict somatic genomic
            alterations in gliomas
          </h2>
          <div className="content flex">
            <img src="/images/img7.png" alt="melanoma" className="w-6/12" />
            <p className="item-body px-4">
              Epigenetics, notably DNA methylation, histone modifications, and
              non-coding RNA, significantly influence cancer pathogenesis,
              particularly in CNS tumors like gliomas. Recent advancements in
              DNA methylation-based classification challenge traditional
              histology-based approaches, offering more precise tumor
              categorization. Key molecular markers such as IDH mutations and
              chr1p19q codeletion are pivotal in glioma diagnosis and prognosis,
              guiding therapeutic decisions. However, current diagnostic methods
              often require multiple assays, delaying treatment and trial
              eligibility. Efforts to develop cost-effective, minimally invasive
              assays using DNA methylation profiling aim to improve diagnostic
              accuracy and treatment outcomes for glioma patients, highlighting
              a promising avenue for future research and clinical application.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
