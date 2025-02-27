export const UserMessage = ({ message }: { message: string }) => {
  return (
    <div className="space-y-1 mt-[198px] ">
      <div className="flex  flex-col items-end ">
        <div
          className="  
          whitespace-pre-wrap  rounded-2xl  
            text-base px-4 py-5 max-w-[50%]
             break-words bg-[#101524] text-white 
                flex-nowrap right-0 "
        >
          {message}
        </div>
      </div>
    </div>
  );
};
