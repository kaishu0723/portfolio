const Scrape = () => {
    return (
        <div className="w-full h-screen p-24 text-center grid justify-items-center items-center gap-8">
            <h1 className="text-8xl font-bold">MY SCRAPE APP</h1>
            <p>自分専用のスクレイピングツールです。まだまだ改良中...</p>
            <video src="/video/scrape_video.mp4" loop muted autoPlay playsInline className="w-3/5">sorry, this browser is unavailable.</video>
        </div>
    );
}

export default Scrape;