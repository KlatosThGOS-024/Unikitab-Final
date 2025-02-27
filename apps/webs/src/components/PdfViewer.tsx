"use client";
import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

export const PdfViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      className="h-screen overflow-hidden border w-full
     border-gray-300"
    >
      <Viewer
        fileUrl="/CSC-301_DSA.pdf"
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  );
};
