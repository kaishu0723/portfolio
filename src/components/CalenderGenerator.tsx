import Image from "next/image";

const CalenderGenerator = () => {
    return (
        <div className="w-full h-screen p-24 text-center grid justify-items-center items-center gap-8 bg-black text-white">
            <h1 className="text-8xl font-bold">Calender Generator</h1>
            <p>好きな画像を埋め込み、カレンダーを作れるサービスです。</p>
            <div className="w-3/5 aspect-video border border-white overflow-hidden relative"><Image src="/img/calender-generater.png" fill alt='image' className="object-cover" /></div>
        </div>
    );
}

export default CalenderGenerator;