import { Product } from "@/utills/types";

const Products = () => {
    const products: Product[] = [
        {
            name: "Sample Product",
            description: "this is a sample product.",
            image: "sample image",
            link: "http://github.com/kaishu0723",
            github: "http://github.com/kaishu0723",
        },
        {
            name: "Sample Product",
            description: "this is a sample product.",
            image: "sample image",
            link: "http://github.com/kaishu0723",
            github: "http://github.com/kaishu0723",
        },
        {
            name: "Sample Product",
            description: "this is a sample product.",
            image: "sample image",
            link: "http://github.com/kaishu0723",
            github: "http://github.com/kaishu0723",
        },
        {
            name: "Sample Product",
            description: "this is a sample product.",
            image: "sample image",
            link: "http://github.com/kaishu0723",
            github: "http://github.com/kaishu0723",
        },
    ]
    return (
        <div className="w-full grid grid-cols-2 gap-6">
            {
                products.map((product, index) => (
                    <div key={index} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <a href={product.link}>
                            <div className="w-full h-2/3 bg-neutral-700 text-white text-center transition-all duration-300 hover:bg-neutral-600">{product.image}</div>
                            <div className="w-full h-1/3 bg-neutral-900 text-white px-4 py-2 transition-all duration-300 hover:bg-neutral-800">
                                <h2 className="text-[20px] font-bold">{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;