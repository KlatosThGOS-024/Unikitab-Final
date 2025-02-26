"use client";
import { NavBar } from "@/components/NavBar";
import { PdfViewer } from "@/components/PdfViewer";
import { ResponseAi } from "@/components/ResponseAi";
import Split from "react-split";
const page = () => {
  return (
    <section>
      <div className="overflow-y-hidden">
        <NavBar />

        <Split className="split" direction="horizontal">
          <div className="f ">
            <PdfViewer />
          </div>
          <div className=" ">
            <ResponseAi />
          </div>
        </Split>
      </div>
    </section>
  );
};
export default page;
// "@react-pdf-viewer/default-layout": "^3.12.0",
// "@react-pdf/renderer": "^4.2.2",
// "pdfjs-dist": "^3.4.120",
// "react-pdf": "^9.2.1"
