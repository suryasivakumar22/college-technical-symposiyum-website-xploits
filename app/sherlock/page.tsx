import Image from "next/image";
import sample from "@/public/1.png";
import Grid from "@mui/material/Grid";
import { IoIosCall, IoIosMail } from "react-icons/io";
import three from "../../public/rules-4.png";
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
            alt="sherlock"
            width={400}
            height={400}
            className="m-20 md:m-10 rounded-lg w-11/12"
          />
        </div>

        <div className="m-10 md:m-5 md:mt-15">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Sherlock
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Saravana Kumar. B - 73589 79335
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p
              className="text-white text-lg py-3"
              style={{ marginLeft: "8px" }}
            >
              Coordinator - Naveen Kumar. K - 95660 69787
            </p>
          </div>
          <h3 className="py-3 text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Rules
          </h3>
          <p className="text-white leading-8 text-lg">
            We will setup a crime scene in a room and document (hardcopy and
            softcopy with audio files) will be provided before entering the
            scene.
          </p>
          <p className="text-white leading-8 text-lg mt-10">
            Each team can consist of 2 - 3 members only. This event has a total
            of 2 rounds, participants shortlisted from the first round will be
            moved to the second round.
          </p>
          <p className="text-white leading-8 text-lg mt-10">
            The team is allowed to view the crime location for a particular time
            and you can have note of it. The first round is questionnaire about
            the crime scene and the second round is the justification round. No
            product should be touched or damaged, it will lead to
            disqualification.
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
