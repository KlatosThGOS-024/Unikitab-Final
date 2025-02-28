"use client";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export const UploadPdf = () => {
  const [files, setFiles] = useState();

  return (
    <section className="xl:w-[1200px] md:w-[900px] mx-auto">
      <div className="flex mt-[28px] bg-black w-full">
        <div> </div>
        <div>
          <VscFileSymlinkDirectory />
          <button
            className="bg-[#4864FF]  items-center flex gap-3
             rounded-lg text-white px-[38px] hover:opacity-90
             py-[12px] text-[21px]"
          >
            <label
              className="cursor-pointer
               text-white px-4 py-2 
               rounded-lg "
            >
              Choose Files
              <input type="file" onClick={} className="hidden" />
            </label>
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};
