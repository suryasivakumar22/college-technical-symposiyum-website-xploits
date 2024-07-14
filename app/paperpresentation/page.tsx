import Image from "next/image";
import sample from "../../public/rules-1.png";
import Grid from "@mui/material/Grid";
import { IoIosCall, IoIosMail } from "react-icons/io";
import Back from "../../components/sub/Back";
const Paper = () => {
  return (
    <div className="z-[50] flex justify-center">
      <div className="border rounded-lg border-[#2A0E61] mt-20 z-20 w-9/12">
        <Back />
        <div className="flex justify-center">
          {" "}
          <Image
            src={sample}
            alt="paper presentation"
            width={400}
            height={400}
            className="m-20 md:m-10 rounded-lg w-11/12"
          />
        </div>

        <div className="m-10 md:m-5 md:mt-15">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Paper Presentation
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Sricharumitha. M - 70101 30495
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Akash. K - 80728 04085
            </p>
          </div>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Rules
          </h3>
          <p className="text-white leading-8 text-lg">
            1. Each team can contain a minimum of 1 and a maximum of 4 members.
          </p>
          <p className="text-white leading-8 text-lg">
            2. Presentation timing is 6-8 minutes and followed by a questions
            and answer session.
          </p>
          <p className="text-white leading-8 text-lg">
            {" "}
            3. Innovation is encouraged in addressing the provided problem
            statement, and we welcome additional innovative solutions related to
            the theme. All presentations should prioritize creativity and
            originality while addressing relevant challenges.
          </p>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Important Dates
          </h3>
          <p className="text-white leading-8 text-lg">
            Last Date for Submission of Abstract - 15/2/2024
          </p>
          <p className="text-white leading-8 text-lg">
            Last Date for Submission of PPT and paper - 16/2/2024
          </p>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Submit your materials
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosMail style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              paperpresentation@xploits2k24.me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
