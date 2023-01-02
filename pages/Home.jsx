import Hero from "./sections/Hero";
import ValueProposition from "./sections/ValueProposition";
import SocialValidation from "./sections/SocialValidation";


function Home() {
  return (
    <div style={{
      background:"linear-gradient(180deg, #1C175F 1.24%, #F37533 10.25%)",
      // backgroundSize: "cover",
    }} className="z-0 font-mulish flex flex-col text-xl text-black pt-[3vmax] overflow-clip">
      <Hero />
      <ValueProposition />
      <SocialValidation/>
    </div>
  );
}

export default Home;
