import Image from "next/image";

const Header = () => {
    const IMG_SIZE=28
    return (
        <nav className="w-full h-[72px] text-white flex justify-between items-center px-24 font-bold absolute z-30 border-b border-white">
            <h2 className="text-2xl">M.KaishuPortfolio</h2>
            <a href="http://github.com/kaishu0723" className="text-[24px] flex justify-between items-center gap-2 transition-all duration-300 rounded-md shadow-lg px-4 py-2 hover:bg-white/20">
                <Image
                    src="/img/github-mark-white.png" width={IMG_SIZE} height={IMG_SIZE} alt="github-mark"
                />
                <span className="relative top-px">GitHub</span>
            </a>
        </nav>
    );
}

export default Header;