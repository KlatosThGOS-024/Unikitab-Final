export const AiResponse = ({ message }: { message: string }) => {
  return (
    <div className="space-y-3 ">
      <div className="flex w-full flex-col items-start ">
        <div
          className="h-fit max-w-[80%] mt-[48px] whitespace-pre-wrap bg-lightBlue2 
          px-5 py-3 text-base absolute left-0  leading-10 bg-[#101524] 
            break-words  rounded-2xl text-white bg-lightBlue2 "
        >
          {message}
        </div>
      </div>
    </div>
  );
};
