import React from "react";
import Card from "../sub/Card";

const Team = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center py-20"
        id="team"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Team
        </h1>
        <div className="h-full w-full flex flex-row gap-10 px-10">
          <Card
            src="/jeff.png"
            title="Jeffrin Joel Raj"
            description="President"
          />
          <Card src="/subha.png" title="Subhalakshmi" description="Secretary" />
          <Card src="/lok.jpg" title="Lokesh" description="Vice President" />
          <Card
            src="/charan.png"
            title="Charan"
            description="Joint Secretary"
          />
          <Card src="/san.png" title="Sanjana" description="Treasurer" />
        </div>
      </div>
    </>
  );
};

export default Team;
