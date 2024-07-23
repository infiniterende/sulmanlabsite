import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ResearchGrid from "./components/ResearchGrid";
import Footer from "./components/Footer";
import News from "./components/News";

export default function Home() {
  return (
    <div className="mx-auto ">
      <Navbar />
      <Carousel />
      <ResearchGrid />
      <div className="flex-grow border-t border-gray-100 py-4"></div>
      <p className="container mx-auto text-lg py-12 px-44">
        The Sulman laboratory studies the biology of glioblastomas, including
        glioma stem cell biology, tumor micro-environment, and the mechanisms of
        treatment resistance. We focus on the development of novel molecular
        biomarkers of glioblastomas with a strong emphasis on translational
        research and treatment outcomes.Our research have been published in
        journals such as Nature, Cancer Cell, New England Journal of Medicine,
        Neuro-oncology, and more. Studies include mesenchymal differentiation
        that promotes radiation resistance in gliobastoma, multigene predictors
        of gliobastoma outcomes, and tumor evolution of glioma-intrinsic gene
        expression subtypes.
      </p>
      <News />
      <Footer />
    </div>
  );
}
