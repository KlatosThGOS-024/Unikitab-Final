"use client";
import React, { SetStateAction, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { FaBahai } from "react-icons/fa";
import { UserMessage } from "./AiResponse/UserMessage";
import { AiResponse } from "./AiResponse/AiMessage";

interface ResponseProp {
  response_frm: string;
  response: string;
  responseId: string;
}
// const Input = () => {
//   return (
//     <div className="bg- py-[18px]  gap-3 flex fixed  bottom-0 w-full px-3 bg-[#101524] items-center  rounded-lg z border-gray-300 ">
//       <div className="flex items-center gap-4 w-[800px]   mx-auto  ">
//         {" "}
//         <CiCamera className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
//         <FaBahai className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
//         <textarea
//           className="w-full py-[16px] px-4 text-[21px] bg-[#676F8B] text-[#454B62] rounded-lg
//     outline-none placeholder:text-[21px]
//            transition-all resize-none
//           "
//           rows={1}
//           placeholder="Enter your input"
//           onInput={(e) => {
//             const target = e.target as HTMLTextAreaElement;
//             target.style.height = "auto";
//             target.style.height = `${target.scrollHeight}px`;
//           }}
//         />
//         <IoIosSend className="cursor-pointer w-[22px] m-2 h-[21px]" />
//       </div>
//     </div>
//   );
// };
function InputTaker({
  setUserMessage,
}: {
  setUserMessage: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full">
      {" "}
      <textarea
        onChange={(e) => {
          setUserMessage(e.target.value);
        }}
        className="w-full py-[16px] px-4 text-[21px] bg-[#676F8B] text-[#454B62] rounded-lg
        outline-none placeholder:text-[21px]
               transition-all resize-none
              "
        rows={1}
        placeholder="Enter your input"
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
      />
    </div>
  );
}
export const Input = () => {
  const [userMessage, setUserMessage] = useState("");

  return (
    <div
      className=" py-2 rounded-lg w-full 
      bg-[#101524] shadow-2xl "
    >
      <div
        className="flex max-sm:gap-[16px] md:gap-3  px-[14px] py-[8px]
     items-center "
      >
        <CiCamera className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />

        <FaBahai className="w-[28px] h-[28px] cursor-pointer hover:text-[#FF612E]" />
        <InputTaker setUserMessage={setUserMessage} />
        <IoIosSend className="cursor-pointer w-[28px] h-[28px] m-2 " />
      </div>
    </div>
  );
};

const ResponseBox = ({ responses }: { responses: ResponseProp[] }) => {
  return (
    <section className="flex flex-col gap-4 overflow-y-scroll py-4 px-2 w-full">
      {responses.map((response) => {
        return (
          <div key={response.responseId} className="flex gap-4">
            {response.response_frm === "User" && (
              <div className="ml-auto flex items-center">
                <UserMessage message={response.response} />
              </div>
            )}
            {response.response_frm === "Ai" && (
              <div className="mr-auto flex items-center">
                <AiResponse message={response.response} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export const ResponseAi = () => {
  const [responses, setResponses] = useState<ResponseProp[]>([
    {
      response_frm: "User",
      response: "Q2",
      responseId: "12347",
    },
    {
      response_frm: "Ai",
      response:
        " Question 2 (a): The minimum height of a binary tree is equal to the depth of the tree.",
      responseId: "12348",
    },
    {
      response_frm: "User",
      response: "Q2",
      responseId: "12349",
    },
    {
      response_frm: "Ai",
      response:
        " Question 2 (a): The minimum height of a binary tree is equal to the depth of the tree.",
      responseId: "123401",
    },
  ]);

  return (
    <section className="relative h-screen flex max-md:space-y-[96px] max-md:flex-row-reverse flex-col">
      <div className="flex-grow w-full  pb-[196px] flex flex-col">
        <ResponseBox responses={responses} />
      </div>
      <div className=" lg:w-1/2 xl:w-[1100px] max-md:w- px-0 lg:px-[64px] fixed bottom-0">
        <Input />
      </div>
    </section>
  );
};
