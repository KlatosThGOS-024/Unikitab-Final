import { useParams } from "next/navigation";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div
      className=" rounded-lg  flex items-center bg-[#FFFFFF] border-[1px]
     hover:shadow-[#69D4F3] hover:shadow-sm  "
    >
      <input
        className="placeholder:text-gray-500 px-4 py-3 rounded-lg outline-none bg-[#FFFFFF]"
        placeholder="Search study resources"
      ></input>
      <div className=" px-4 border-l-[1px] rounded-l-none py-2">
        <IoSearchOutline className=" w-[21px] h-[21px] text-[#69D4F3]" />
      </div>
    </div>
  );
};

export const NavBar = () => {
  return (
    <section>
      <div className="flex items-center justify-between px-2 py-[8px] ">
        <div className="flex items-center px-4 gap-5">
          <h2 className="text-[#69D4F3] hover:scale-110 transition-all duration-200 ease-in-out">
            UniKitab
          </h2>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className=" items-center px-4 max-md:hidden  flex gap-6 ">
          <ul className="flex gap-7  text-[18px]">
            <li className="hover:text-[#69D4F3] font-[500] text-[#423e3e]">
              Sell Docs
            </li>
            <li className="hover:text-[#69D4F3] font-[500] text-[#423e3e]">
              Educators
            </li>
            <li className="max-lg:hidden lg:block  hover:text-[#69D4F3]">
              Login
            </li>
          </ul>
          <button
            className=" rounded-full transition-all duration-150 ease-out
             max-lg:hidden lg:block  px-4 text-[18px] font-[500]  py-2 bg-[#EC497D] text-white
           hover:bg-[#C9C9C9] hover:text-[#EC497D]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};
