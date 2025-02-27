"use client";
import { NavBar } from "@/components/NavBar";
import { PdfViewer } from "@/components/PdfViewer";
import { ResponseAi } from "@/components/ResponseAi";
import { useEffect, useState } from "react";
import Split from "react-split";
const getWidthAndHeight = () => {
  const { innerWidth: width } = window;
  return width;
};
const page = () => {
  const [SplitDirection, setSplitDirection] = useState<
    "horizontal" | "vertical"
  >("vertical");
  useEffect(() => {
    const width = getWidthAndHeight();

    const updateDirection = () => {
      setSplitDirection(width <= 768 ? "vertical" : "horizontal");
      console.log(
        "Updated Direction:",
        width,
        width <= 768 ? "vertical" : "horizontal"
      );
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <section>
      <div className=" w-full h-screen">
        <div
          className=" fixed z-40  w-full
         bg-white top-0"
        >
          {" "}
          <NavBar />
        </div>

        <div className=" mt-[64px]">
          {" "}
          <Split
            minSize={0}
            gutterSize={10}
            gutterAlign="center"
            className={`${SplitDirection === "horizontal" ? "split-row" : "split-col "}`}
            direction={SplitDirection}
          >
            <div className=" w-full">
              <PdfViewer />
            </div>
            <div className=" overflow-scroll">
              <ResponseAi />
            </div>
          </Split>
        </div>
      </div>
    </section>
  );
};
export default page;
// "@react-pdf-viewer/default-layout": "^3.12.0",
// "@react-pdf/renderer": "^4.2.2",
// "pdfjs-dist": "^3.4.120",
// "react-pdf": "^9.2.1"
