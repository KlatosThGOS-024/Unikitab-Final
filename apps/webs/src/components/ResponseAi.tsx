"use client";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { FaBahai } from "react-icons/fa";
const ResponseBox = () => {
  return (
    <section className="relative">
      <div className="py-[28px] ">
        <div className="absolute px-[28px] py-6 rounded-xl bg-[#101524] text-white right-0 ">
          Q1
        </div>
        <div
          className=" h-fit max-w-[80%]  whitespace-pre-wrap 
            break-words rounded-2xl bg-lightBlue2 px-5 py-3 text-base absolute left-0  leading-10 bg-[#101524] text-white  mt-[64px]"
        >
          Question 1 (a): The maximum number of nodes in a binary tree with
          depth d can be calculated using the formula: 2^d - 1. Explanation:
          This formula is derived from the property of a binary tree where each
          node can have at most two children.
        </div>
      </div>
    </section>
  );
};
const Input = () => {
  return (
    <div className="bg- py-[21px] pb-[64px] gap-3 flex w-full items-center  rounded-lg  border-gray-300 ">
      <CiCamera className="w-[21px] h-[21px] cursor-pointer hover:text-[#FF612E]" />
      <FaBahai className="w-[21px] h-[21px] cursor-pointer hover:text-[#FF612E]" />
      <textarea
        className="w-full py-[28px] px-4 text-[21px]
    outline-none placeholder:text-[21px]
           transition-all resize-none
           overflow-hidden"
        rows={1}
        placeholder="Enter your input"
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
      />

      <IoIosSend className="cursor-pointer w-[22px] m-2 h-[21px]" />
    </div>
  );
};
export const ResponseAi = () => {
  return (
    <section className="relative ">
      <div className="flex flex-col  h-[100vh] ">
        <div>
          <ResponseBox />
        </div>
        <div className="w-full absolute bottom-0  bg-[#F8F5EE] flex items-center  ">
          <Input />
        </div>
      </div>
    </section>
  );
};
