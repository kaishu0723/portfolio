import Image from "next/image";
import Products from "@/components/Products";
import Skills from "@/components/Skills";
import Scrape from "@/components/Scrape";
import CalenderGenerator from "@/components/CalenderGenerator";
import Rag from "@/components/Rag";

export default function Home() {
  return (
    <div className="w-full h-screen bg-neutral-800">
      <nav className="w-full h-[72px] text-white bg-neutral-900 flex justify-between items-center px-24 font-bold">
        <h2 className="text-2xl">M.KaishuPortfolio</h2>
        <a href="http://github.com/kaishu0723" className="px-4 py-2 bg-green-800 rounded-sm border-2 border-white text-[18px] flex justify-between items-center gap-2 transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg">
          <Image
            src="/img/github-mark-white.png" width={24} height={24} alt="github-mark"
          />
          <span>
            GitHub
          </span>
        </a>
      </nav>
      <div className="p-24 grid grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <div className="w-full mb-4">
            <h1 className="text-white text-8xl mb-2 font-bold">KAISHU<span className="text-neutral-800 text_stroke">MATSUO</span></h1>
            <p className="text-white">はじめまして、松尾海秀と申します。情報工学を専攻する大学4年生で、来春よりシステムエンジニアとしてキャリアをスタートします。どうぞよろしくお願いいたします。</p>
          </div>
          <div className="w-full aspect-video bg-white rounded-lg text-center overflow-hidden">
            <video src="/video/demo_real_sample.mp4" loop muted autoPlay playsInline>sorry, this browser is unavailable.</video>
          </div>
        </div>
        <div>
          <Products />
          <Skills />
        </div>
      </div>
      <Scrape/>
      <CalenderGenerator/>
      <Rag/>
    </div>
  );
}
