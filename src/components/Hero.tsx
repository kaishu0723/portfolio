import Header from "./Header";
import Skills from "./Skills";

const Hero = () => {
    return (
        <div>
            <div className="w-full h-screen grid justify-items-center">
                <Header />
                <div className="w-full h-screen bg-black/60 z-10 grid justify-items-center items-center content-center gap-4 relative">
                    <h2 className="px-4 py-2 bg-black/20 border border-white text-white text-2xl text-center">Application Engineer</h2>
                    <h1 className="text-white text-9xl mb-4 font-bold">KAISHU<span className="text-black/0 text_stroke">MATSUO</span></h1>
                    <p className="text-white">はじめまして、松尾海秀と申します。自治体、金融機関向けにパッケージシステムを開発をしている現役アプリケーションエンジニアです。</p>
                </div>
                <Skills />
                <div className="absolute w-full h-screen aspect-video bg-black rounded-lg text-center overflow-hidden">
                    <video src="/video/demo_real_sample.mp4" loop muted autoPlay playsInline>sorry, this browser is unavailable.</video>
                </div>
            </div>
            <div className="p-24 w-full h-[80vh] grid justify-items-center items-center content-center gap-8 text-[18px] text-neutral-600 font-serif">
                <h2 className="text-3xl text-center">拝啓</h2>
                <p>
                    <br />
                    陽春の候、貴社におかれましては、ますますご清祥のこととお慶び申し上げます。<br />
                    本日はご多忙の折、私のポートフォリオをお手に取っていただき、誠にありがとうございます。<br />
                    <br />
                    本資料は、これまでの私の経験と実績、ならびに仕事に対する姿勢を凝縮したものです。一つひとつの制作物を通じて、私が大切にしてきたプロセスや、課題解決に向けたアプローチを感じていただければ幸いです。<br />
                    <br />
                    限られたボリュームではございますが、私の可能性を検討いただく一助となればこれ以上の喜びはございません。<br />
                    最後までご高覧いただけますよう、何卒よろしくお願い申し上げます。<br />
                </p>
            </div>
        </div>
    );
}

export default Hero;