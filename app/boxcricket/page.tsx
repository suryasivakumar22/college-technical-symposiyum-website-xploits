import Image from "next/image";
import sample from "@/public/1.png";
import Grid from "@mui/material/Grid";
import { IoIosCall, IoIosMail } from "react-icons/io";
import three from "../../public/rules-5.png";
import { useRouter } from "next/router";
import Back from "../../components/sub/Back";
const Paper = () => {
  return (
    <div className="z-[50] flex justify-center">
      <div className="border rounded-lg border-[#2A0E61] mt-20 z-20 w-9/12">
        <Back />
        <div className="flex justify-center">
          {" "}
          <Image
            src={three}
            alt="box cricket"
            width={400}
            height={400}
            className="m-20 md:m-10 rounded-lg w-11/12"
          />
        </div>

        <div className="m-10 md:m-5 md:mt-15">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Box Cricket
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Naren.T. J - 99523 45533
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Nitish Narayanan. K - 73056 42084
            </p>
          </div>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Rules
          </h3>
          <p className="text-white leading-8 text-lg">
            Each team should contain of 5 players. Total overs 4.
          </p>
          <p className="text-white leading-8 text-lg mt-10">
            Through catch and one pitch one hand is approved here. Ball which
            reach the out of the box thoroughly is considered to be out, and
            there is also stump wickets.
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
