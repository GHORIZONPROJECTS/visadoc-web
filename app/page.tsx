import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Recommendation from "@/components/Recommendation";
import TopValues from "@/components/TopValues";

export default function Home() {
  return (
    <>
      <Hero/>
      <Popular/>
      {/* <Camp/> */}
      <TopValues/>
      <Guide/>
      <Recommendation/>
      <Features/>
      <GetApp/>
    </>
  )
}
