import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Aboutme from "@/components/Aboutme";
import RagProject from "@/components/RagProject";

export default function Home() {
  return (
    <div className="w-full h-screen bg-neutral-800">
      <Hero/>
      <RagProject/>
      <Aboutme/>
      <Footer/>
    </div>
  );
}
