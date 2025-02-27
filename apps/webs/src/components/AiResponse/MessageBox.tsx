"use client";
import { useState } from "react";

import { UserMessage } from "./UserMessage";
import { AiResponse } from "./AiMessage";
interface ResponseProp {
  response_frm: string;
  response: string;
  responseId: string;
}
[];
export const MessageBox = () => {
  const [responses, setResponses] = useState<ResponseProp[]>([
    {
      response_frm: "User",
      response: "Q1",
      responseId: "123",
    },
    {
      response_frm: "Ai",
      response:
        " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1. Explanation           This formula is derived from the property of a binary tree where each node can have at most two children.",
      responseId: "1233",
    },
    {
      response_frm: "User",
      response: "Q2",
      responseId: "123",
    },
    {
      response_frm: "Ai",
      response:
        " Question 1 (a): The maximum number of nodes in a binary tree with depth d can be calculated using the formula: 2^d - 1. Explanation           This formula is derived from the property of a binary tree where each node can have at most two children.",
      responseId: "1233",
    },
  ]);
  return (
    <section className="w-full my-7 pb-[64px] pt-4">
      <div className="space-y-[21px]">
        {responses.map((value, index) => {
          if (value.response_frm == "User") {
            return (
              value.response != "" && (
                <div key={index} className="user-message  ">
                  {value.response != ""}
                  <UserMessage message={value.response} />
                </div>
              )
            );
          } else if (value.response_frm == "Ai") {
            return (
              value.response != "" && (
                <div key={index} className="Ai-Response ">
                  <AiResponse message={value.response} />
                </div>
              )
            );
          }
        })}
      </div>
    </section>
  );
};
