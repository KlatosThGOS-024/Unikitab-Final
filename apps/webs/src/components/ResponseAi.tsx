"use client";
// import React, { useState } from "react";
// import { IoIosSend } from "react-icons/io";
// import { CiCamera } from "react-icons/ci";
// import { FaBahai } from "react-icons/fa";
// import { UserMessage } from "./AiResponse/UserMessage";
// import { AiResponse } from "./AiResponse/AiMessage";
// interface ResponseProp {
//   response_frm: string;
//   response: string;
//   responseId: string;
// }
// [];

// const ResponseBox = ({ responses }: { responses: ResponseProp[] }) => {
//   return (
//     <section
//       className="flex gap-[28px] flex-col bg-red-300
//   overflow-scroll"
//     >
//       {responses.map((response) => {
//         return (
//           <div className="py-[21px]">
//             {response.response_frm == "User" && (
//               <div key={response.responseId}>
//                 <UserMessage message={response.response} />
//               </div>
//             )}

//             {response.response_frm == "Ai" && (
//               <div className="mr-auto" key={response.responseId}>
//                 <AiResponse message={response.response} />
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

const Input = () => {
  return (
    <div className="bg- py-[21px] pb-[64px] gap-3 flex fixed w-full bottom-0  items-center  rounded-lg z-40 border-gray-300 ">
      <CiCamera className="w-[21px] h-[21px] cursor-pointer hover:text-[#FF612E]" />
      <FaBahai className="w-[21px] h-[21px] cursor-pointer hover:text-[#FF612E]" />
      <textarea
        className="w-full py-[28px] px-4 text-[21px]
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

      <IoIosSend className="cursor-pointer w-[22px] m-2 h-[21px]" />
    </div>
  );
};
// const Input = () => {
//   return (
//     <div className="flex items-center gap-3 bg-gray-100 p-3 fixed bottom-0 w-full border-t border-gray-300">
//       <CiCamera className="w-6 h-6 cursor-pointer hover:text-[#FF612E]" />
//       <FaBahai className="w-6 h-6 cursor-pointer hover:text-[#FF612E]" />
//       <textarea
//         className="w-full py-2 px-4 text-lg outline-none placeholder:text-lg resize-none"
//         rows={1}
//         placeholder="Enter your input"
//         onInput={(e) => {
//           const target = e.target as HTMLTextAreaElement;
//           target.style.height = "auto";
//           target.style.height = `${target.scrollHeight}px`;
//         }}
//       />
//       <IoIosSend className="cursor-pointer w-6 h-6" />
//     </div>
//   );
// };

// export const ResponseAi = () => {
//   const [responses, setResponses] = useState<ResponseProp[]>([
//     {
//       response_frm: "User",
//       response: "Q1",
//       responseId: "123",
//     },
//     {
//       response_frm: "Ai",
//       response:
//         " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1. Explanation           This formula is derived from the property of a binary tree where each node can have at most two children.",
//       responseId: "1233",
//     },
//     {
//       response_frm: "User",
//       response: "Q2",
//       responseId: "123",
//     },
//     {
//       response_frm: "Ai",
//       response:
//         " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1. Explanation           This formula is derived from the property of a binary tree where each node can have at most two children.",
//       responseId: "1233",
//     },
//     {
//       response_frm: "User",
//       response: "Q2",
//       responseId: "123",
//     },
//     {
//       response_frm: "Ai",
//       response:
//         " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1. Explanation           This formula is derived from the property of a binary tree where each node can have at most two children.",
//       responseId: "1233",
//     },
//     {
//       response_frm: "User",
//       response: "Q2",
//       responseId: "123",
//     },
//     {
//       response_frm: "Ai",
//       response:
//         " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1. Explanation           This formula is derived from the property of a binary tree where each node can have at most two children.",
//       responseId: "1233",
//     },
//   ]);

//   return (
//     <section className="relative ">
//       <div className="flex flex-col gap-3 h-screen ">
//         <div className=" b-[198px] h-[90vh]">
//           <ResponseBox responses={responses} />
//         </div>
//         <div className="block">
//           {" "}
//           <div className="  items-end bg-[#F8F5EE]  ">
//             <Input />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState } from "react";
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

const ResponseBox = ({ responses }: { responses: ResponseProp[] }) => {
  return (
    <section className="flex flex-col gap-4 overflow-y-auto py-4 px-2 flex-grow">
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
      response: "Q1",
      responseId: "123",
    },
    {
      response_frm: "Ai",
      response:
        " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1.",
      responseId: "1233",
    },
    {
      response_frm: "User",
      response: "Q2",
      responseId: "1234",
    },
    {
      response_frm: "Ai",
      response:
        " Question 2 (a): The minimum height of a binary tree is equal to the depth of the tree.",
      responseId: "1234",
    },
    {
      response_frm: "User",
      response: "Q2",
      responseId: "1234",
    },
    {
      response_frm: "Ai",
      response:
        " Question 2 (a): The minimum height of a binary tree is equal to the depth of the tree.",
      responseId: "1234",
    },
    {
      response_frm: "User",
      response: "Q2",
      responseId: "1234",
    },
    {
      response_frm: "Ai",
      response:
        " Question 2 (a): The minimum height of a binary tree is equal to the depth of the tree.",
      responseId: "1234",
    },
  ]);

  return (
    <section className="relative h-screen flex space-y-[96px]  flex-col">
      <div className="flex-grow  flex flex-col">
        <ResponseBox responses={responses} />
      </div>
      <div className=" bg-red-300 z-30 w-full  ">
        <Input />
      </div>
    </section>
  );
};
