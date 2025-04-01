import { Dispatch, SetStateAction } from "react";

const Submit = ({
  setSubmit,
}: {
  setSubmit: Dispatch<SetStateAction<boolean | null>>;
}) => {
  return (
    <div className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-3xl text-white font-semibold">Thank You! 😎</h1>
      <p className="text-[#607b96] text-center text-xl my-5">
        Your message has been accepted. you will recieve answer really soon!
      </p>
      <button
        className="py-2.5 px-3.5 bg-[#1C2B3A] text-white rounded-lg hover:text-[#4D5BCE] transition-all"
        onClick={() => setSubmit(false)}
      >
        send-new-message
      </button>
    </div>
  );
};

export default Submit;
