import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const PublicationsPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container px-56">
        <h1 className="text-teal-500 text-3xl tracking-wide uppercase">
          Publications
        </h1>
        <div className="flex-grow border-b border-gray-100 py-4"></div>
        <div className="flex flex-row">
          <img
            className="w-1/2 px-4 py-4"
            alt="meningitis"
            src="/images/img8.png"
          />
          <img className="w-1/2 px-4 py-4" src="/images/img4.png" />
        </div>
        <div>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/38048045/ "
            target="_blank"
          >
            {" "}
            <p className="underline py-8">
              Evaluation of the SSTR2-targeted Radiopharmaceutical
              177Lu-DOTATATE and SSTR2-specific 68Ga-DOTATATE PET as Imaging
              Biomarker in Patients with Intracranial Meningioma. Kurz SC, Zan
              E, Cordova C, Troxel AB, Barbaro M, Silverman JS, Snuderl M,
              Zagzag D, Kondziolka D, Golfinos JG, Chi AS, Sulman EP. Clin
              Cancer Res. 2024 Feb 16;30(4):680-686. doi:
              10.1158/1078-0432.CCR-23-2533. PMID: 38048045
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/36202798/"
            target="_blank"
          >
            <p className="underline py-8">
              Lineage-coupled clonal capture identifies clonal evolution
              mechanisms and vulnerabilities of BRAFV600E inhibition resistance
              in melanoma. Zhang ZY, Ding Y, Ezhilarasan R, Lhakhang T, Wang Q,
              Yang J, Modrek AS, Zhang H, Tsirigos A, Futreal A, Draetta GF,
              Verhaak RGW, Sulman EP. Cell Discov. 2022 Oct 6;8(1):102. doi:
              10.1038/s41421-022-00462-7. PMID: 36202798 
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/36059614/"
            target="_blank"
          >
            <p className="underline py-8">
                PDPN marks a subset of aggressive and radiation-resistant
              glioblastoma cells. Modrek AS, Eskilsson E, Ezhilarasan R, Wang Q,
              Goodman LD, Ding Y, Zhang ZY, Bhat KPL, Le TT, Barthel FP, Tang M,
              Yang J, Long L, Gumin J, Lang FF, Verhaak RGW, Aldape KD, Sulman
              EP. Front Oncol. 2022 Aug 10;12:941657. doi:
              10.3389/fonc.2022.941657. eCollection 2022. PMID: 36059614 
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/35906213/"
            target="_blank"
          >
            <p className="underline py-8">
              DNA methylation-based epigenetic signatures predict somatic
              genomic alterations in gliomas. Yang J, Wang Q, Zhang ZY, Long L,
              Ezhilarasan R, Karp JM, Tsirigos A, Snuderl M, Wiestler B, Wick W,
              Miao Y, Huse JT, Sulman EP. Nat Commun. 2022 Jul 29;13(1):4410.
              doi: 10.1038/s41467-022-31827-x. PMID: 35906213
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/35814854/"
            target="_blank"
          >
            <p className="underline py-8">
              Risk of Second Primary Neoplasms of the Central Nervous System.
              Liu EK, Oh C, Kondziolka D, Sulman EP. Adv Radiat Oncol. 2022 Apr
              18;7(4):100969. doi: 10.1016/j.adro.2022.100969. eCollection 2022
              Jul-Aug. PMID: 35814854
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/29198052/"
            target="_blank"
          >
            <p className="underline py-8">
              Melanoma brain metastases harboring BRAF V600K or NRAS mutations
              are associated with an increased local failure rate following
              conventional therapy. Fang P, Boehling NS, Koay EJ, Bucheit AD,
              Jakob JA, Settle SH, Brown PD, Davies MA, Sulman EP. J Neurooncol.
              2018 Mar;137(1):67-75. doi: 10.1007/s11060-017-2695-2. Epub 2017
              Dec 2. PMID: 29198052
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/29163847/"
            target="_blank"
          >
            <p className="underline py-8">
              A relative increase in circulating platelets following
              chemoradiation predicts for poor survival of patients with
              glioblastoma. Boonyawan K, Hess KR, Yang J, Long L, Wang Q,
              Ezhilarasan R, Auia A, Alfaro-Munoz KD, de Groot JF, Bhat
              KP, Sulman EP. Oncotarget. 2017 Oct 12;8(52):90488-90495. doi:
              10.18632/oncotarget.21799. eCollection 2017 Oct 27. PMID: 29163847
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/29316430/"
            target="_blank"
          >
            <p className="underline py-8">
              Tumor Evolution of Glioma-Intrinsic Gene Expression Subtypes
              Associates with Immunological Changes in the Microenvironment.
              Wang Q, Hu B, Hu X, Kim H, Squatrito M, Scarpace L, deCarvalho AC,
              Lyu S, Li P, Li Y, Barthel F, Cho HJ, Lin YH, Satani N,
              Martinez-Ledesma E, Zheng S, Chang E, Sauvé CG, Olar A, Lan ZD,
              Finocchiaro G, Phillips JJ, Berger MS, Gabrusiewicz KR, Wang G,
              Eskilsson E, Hu J, Mikkelsen T, DePinho RA, Muller F, Heimberger
              AB, Sulman EP, Nam DH, Verhaak RGW. Cancer Cell. 2017 Jul
              10;32(1):42-56.e6. doi: 10.1016/j.ccell.2017.06.003.
              PMID: 28697342
            </p>
          </Link>
          <Link
            href="https://pubmed.ncbi.nlm.nih.gov/23993863/"
            target="_blank"
          >
            <p className="underline py-8">
              Mesenchymal differentiation mediated by NF-κB promotes radiation
              resistance in glioblastoma. Bhat KPL, Balasubramaniyan V, Vaillant
              B, Ezhilarasan R, Hummelink K, Hollingsworth F, Wani K, Heathcock
              L, James JD, Goodman LD, Conroy S, Long L, Lelic N, Wang S, Gumin
              J, Raj D, Kodama Y, Raghunathan A, Olar A, Joshi K, Pelloski CE,
              Heimberger A, Kim SH, Cahill DP, Rao G, Den Dunnen WFA, Boddeke
              HWGM, Phillips HS, Nakano I, Lang FF, Colman H, Sulman EP, Aldape
              K. Cancer Cell. 2013 Sep 9;24(3):331-46. doi:
              10.1016/j.ccr.2013.08.001. Epub 2013 Aug 29. PMID: 23993863
            </p>
          </Link>

          <Link href="https://pubmed.ncbi.nlm.nih.gov/?term=erik+sulman&sort=pubdate">
            <h1 className="text-xl py-8 text-teal-600">
              See More Publications &#x2192;{" "}
            </h1>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
