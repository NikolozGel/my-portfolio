"use client";
import { Dispatch, SetStateAction } from "react";
import Loading from "../loadingSubmit/Loading";
import Submit from "../loadingSubmit/Submit";

interface ContactFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
  submit: boolean | null;
  setSubmit: Dispatch<SetStateAction<boolean | null>>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  handleSubmit,
  handleInputChange,
  isLoading,
  submit,
  setSubmit,
}) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : submit ? (
        <Submit setSubmit={setSubmit} />
      ) : (
        <form onSubmit={handleSubmit} className="h-full">
          <div className="flex flex-col p-5 xl:px-36">
            <label htmlFor="name" className="text-[#607b96] mb-1 font-medium">
              _name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              className="bg-[#011221] rounded-[0.7rem] text-white px-5 border  border-[#1e2d3d] h-[45px] mb-5"
            />
            <label htmlFor="email" className="text-[#607b96] mb-1 font-medium">
              _email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              className="bg-[#011221] rounded-[0.7rem] text-white px-5 border border-[#1e2d3d] h-[45px] mb-5"
            />
            <label
              htmlFor="message"
              className="text-[#607b96] mb-1 font-medium"
            >
              _message:
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleInputChange}
              className="bg-[#011221] rounded-[0.7rem] text-white border px-5 border-[#1e2d3d] h-[160px] pt-2 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 mb-5 bg-[#1c2b3a] rounded-lg text-white py-2 px-3 ml-36 hover:text-[#4B5DCE] transition-[3s]"
          >
            submit-message
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
