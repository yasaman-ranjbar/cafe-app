import Image from "next/image";
import Link from "next/link";
import { useCard } from "@/store/card-store";
import { ProductDetailsProps } from "@/services/requests/product";

const MenuSection: React.FC<ProductDetailsProps> = ({ title, price, img, desc, id, off }) => {
    const addCard = useCard((state) => state.addCard);

    const addToCart = (ID: number) => {
        addCard({
            id,
            title,
            price,
            img,
            desc,
            off,
            score: 0,
            type: "cold",
            qt: 1,
        });
    };

    return (
        <div className="flex md:flex-row flex-col md:items-center">
            <div className="relative">
                <Image
                    className="rounded-full"
                    src={img}
                    alt={title}
                    width={200}
                    height={100}
                />
                <div className="absolute top-0 right-0 size-10 flex items-center justify-center bg-yellow rounded-full text-primary text-xl">
                    {price}$
                </div>
            </div>
            <div className="px-3.5">
                <Link href={{ pathname: `/products/${id}`, query: { name: title } }}>
                    <h3 className="text-primary text-2xl font-semibold cursor-pointer">{title}</h3>
                </Link>
                <h5 className="text-gray font-normal">{desc}</h5>
                <button
                    onClick={() => addToCart(+id)}
                    className="text-yellow font-bold mt-4 border border-yellow rounded-lg px-2 py-1"
                >
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default MenuSection;
