import Image from "next/image";
import sample from "@/public/1.png";
import Grid from "@mui/material/Grid";
import { IoIosCall, IoIosMail } from "react-icons/io";
import three from "../../public/rules-3.png";
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
            alt="resqventures"
            width={400}
            height={400}
            className="m-20 md:m-10 rounded-lg w-11/12"
          />
        </div>

        <div className="m-10 md:m-5 md:mt-15">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Res-Q Venture
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Sanjana. B. P - 80562 50500
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Pavithra. S - 91762 88585
            </p>
          </div>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Rules
          </h3>
          <p className="text-white leading-8 text-lg">
            Round 1: In this round one member from each team will be locked with
            four locks the team members should solve the technical riddle in
            order to unlock their team member. The team which unlock first will
            win in first round.
          </p>
          <p className="text-white leading-8 text-lg mt-10">
            Round 2: The teams which are won in the round 1 will participate in
            round 2. This round is like treasure hunt, again a team member is
            locked with a single lock. The Team should solve a technical
            puzzle/code to find the place where the key is hidden.
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
