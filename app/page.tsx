import Hero from "@/components/main/Hero";
import Team from "@/components/main/Team";
import Navbar from "@/components/main/Navbar";
import Contact from "@/components/main/Contact";
import ImageSlider from "@/components/main/ImageSlider";
import Department from "@/components/main/Department";
import College from "@/components/main/College";
import Team2 from "@/components/main/Team2";
import Conveners from "@/components/main/Conveners";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="h-full w-full overflow-x-hidden z-[30]">
        <div className="flex flex-col justify-center items-center">
          <Hero />

          <Department />
          <College />
          <ImageSlider />

          <Team2 />
          <Conveners />

          <Contact />
        </div>
      </main>
    </div>
  );
}
