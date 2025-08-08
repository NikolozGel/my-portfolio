const CodeSnippet = ({
  formData,
}: {
  formData: {
    name: string;
    email: string;
    message: string;
  };
}) => {
  const today = new Date();
  const date = today.toString().split(" ").slice(0, 3).join(" ");

  return (
    <div className="w-[50%] hidden xl:block px-28 mt-12 overflow-y-hidden">
      <div className="flex">
        <div className="text-gray-500 text-lg mr-5">
          <br />
          2
          <br />
          3
          <br />
          4
          <br />
          5
          <br />
          6
          <br />
          7
          <br />
          8
          <br />
          9
          <br />
          10
          <br />
          11
          <br />
          12
          <br />
          13
          <br />
          14
        </div>
        <div className="flex flex-col gap-[26px]">
          <div className="text-lg">
            <span className="text-[#c98bdf]">const</span>{" "}
            <span className="text-[#4B5DCE] text-semibold">button</span>{" "}
            <span className="text-[#c98bdf]">= </span>{" "}
            <span className="text-[#4B5DCE]">
              document.querySelector{" "}
              <span className="text-[#e99287]">
                <span className="text-[#607b96]">{"("}</span>
                {"'#sendBtn'"}
                <span className="text-[#607b96]">{");"}</span>
              </span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="text-lg">
              <span className="text-[#c98bdf]">const</span>{" "}
              <span className="text-[#4B5DCE]">message</span>{" "}
              <span className="text-[#c98bdf]">= </span>{" "}
              <span className="text-[#607b96]">{"{"}</span>
            </div>
            <div className="flex flex-col text-lg">
              <span className="text-[#4B5DCE] mt-1">
                name<span className="text-[#607b96]">: </span>
                <span className="text-[#e99287]">
                  {`"${formData.name}"`}
                  <span className="text-[#607b96]">{","}</span>
                </span>
              </span>
              <span className="text-[#4B5DCE]">
                email<span className="text-[#607b96]">: </span>
                <span className="text-[#e99287]">
                  {`"${formData.email}"`}
                  <span className="text-[#607b96]">{","}</span>
                </span>
              </span>
              <span className="text-[#4B5DCE]">
                message<span className="text-[#607b96]">: </span>
                <span className="text-[#e99287]">
                  {`"${formData.message}"`}
                  <span className="text-[#607b96]">{","}</span>
                </span>
              </span>
              <span className="text-[#607b96]">
                date: <span className="text-[#e99287]">{`"${date}"`}</span>{" "}
              </span>
              <span className="text-[#607b96]">{"}"}</span>
            </div>
            <div className="flex flex-col mt-7">
              <span className="text-[#4B5DCE]">
                <span>
                  button.addEventListener{" "}
                  <span className="text-[#607b96]">{"("}</span>
                  <span className="text-[#e99287]">{"'click', "}</span>
                </span>
                <span className="text-[#607b96]">{"()"} </span>
                <span className="text-[#c98bdf]">{"=>"} </span>
                <span className="text-[#607b96]">{"{"}</span>
              </span>
              <span className="text-[#4B5DCE]">
                form<span className="text-[#607b96]">.</span>
                <span>{"send"}</span>
                <span className="text-[#607b96]">{"("}</span>
                <span>{"message"}</span>
                <span className="text-[#607b96]">{")"}</span>
              </span>
              <div className="flex text-[#607b96]">
                <span>{"}"}</span>
                <span>{")"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
