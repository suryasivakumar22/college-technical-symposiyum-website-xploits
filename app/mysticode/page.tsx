import Image from "next/image";
import Grid from "@mui/material/Grid";
import { IoIosCall, IoIosMail } from "react-icons/io";
import two from "../../public/rules-2.png";

import Back from "../../components/sub/Back";
const Paper = () => {
  return (
    <div className="z-[50] flex justify-center">
      <div className="border rounded-lg border-[#2A0E61] mt-20 z-20 w-9/12">
        <Back />
        <div className="flex justify-center">
          {" "}
          <Image
            src={two}
            alt="mysticode"
            width={400}
            height={400}
            className="m-20 md:m-10 rounded-lg w-11/12"
          />
        </div>

        <div className="m-10 md:mt-10">
          <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Mysticode
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-[20px] py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Sabari Bala Sundar. S - 81249 32077
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Kreshanth S.V - 95669 65049
            </p>
          </div>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Rules
          </h3>
          <p className="text-white leading-8 text-lg">
            Round 1: This is a debugging game featuring HTML and CSS. The code
            contains a set of errors. Clues will be provided to help debug the
            code and find the correct output. The result of the code will be a
            front-end display.
          </p>
          <p className="text-white leading-8 text-lg mt-10">
            Round 2: The team will have a set of code that contains error in it.
            The team has to debug the code and find the output of it. The output
            of the set of program will provide a sentence. That will be your
            answer.
          </p>

          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Important Dates
          </h3>
          <p className="text-white leading-8 text-lg">
            Last Date for Registeration - 16/2/2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paper;
