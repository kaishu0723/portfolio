const Footer = () => {
    return (
        <div className="w-full h-[256px] text-white grid justify-items-center items-center gap-8 bg-neutral-800 pb-8">
            <div className="grid justify-items-center gap-4">
                <h2 className="text-2xl font-bold my-8">M.KAISHU PORTFOLIO</h2>
                <ul className="flex gap-24">
                    <li>GitHub</li>
                    <li>Instagram</li>
                    <li>Vercel</li>
                    <li>X</li>
                </ul>
            </div>
            <p>©2026 KaishuMatsuo</p>
        </div>
    );
}

export default Footer;