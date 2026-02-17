import Image from "next/image";

const Rag = () => {
    return (
        <div className="w-full h-screen p-24 text-center grid justify-items-center items-center gap-8">
            <h1 className="text-8xl font-bold">RAG SYSTEM</h1>
            <p>基本的なRAGシステムです。txt形式のデータに対応していますが、ExcelやPDFにもカスタマイズ可能です。会話履歴や検索速度の向上に向けて、まだまだ改良中...</p>
            <div className="w-full aspect-3/1 border border-white overflow-hidden relative"><Image src="/img/rag-demo.png" fill alt='image' className="object-cover" /></div>
        </div>
    );
}

export default Rag;