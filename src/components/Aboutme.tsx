import Image from "next/image";

const Aboutme = () => {
    return (
        <div className="w-full bg-neutral-800 p-16 font-serif text-[18px]">
            <div className="flex justify-center p-8 items-center gap-48 relative bg-white shadow shadow-black">
                <p className="w-1/2">
                    いかがでしたでしょうか。<br/>
                    末筆ながら、貴重なお時間を割いて本ポートフォリオをご高覧いただきましたことに、深く感謝申し上げます。<br/>
                    <br/>
                    これまで培ってきたスキルと経験を活かし、さらなる発展に貢献したいと考えております。私の制作物やこれまでの経歴を通じて、少しでも私自身の可能性を感じていただけましたら幸いです。<br/>
                    <br/>
                    本資料だけではお伝えしきれなかった点も多々ございます。もしご興味をお持ちいただけましたら、ぜひ面談の機会をいただけますと大変嬉しく存じます。<br/>
                    何卒よろしくお願い申し上げます。
                </p>
                <div className="w-1/4 aspect-2/3 border overflow-hidden relative"><Image src='/img/kaishu_face_filter.png' fill alt='kaishu image' className="object-cover" /></div>
            </div>
        </div>
    );
}

export default Aboutme;