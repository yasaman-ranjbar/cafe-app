import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useCard } from "@/store/card-store";
import { useParams } from "next/navigation";
import { CAFE_MENU } from "@/data/db";

const ProductDetails = () => {
    const  params  = useParams();

    const addCart = useCard((state) => state.addCard);

    const product = CAFE_MENU.find((item) => item.id === params?.id)

    const handleAddCart = () => {
        addCart({
            id: product?.id!,
            title: product?.title!,
            price: product?.price!,
            img: product?.img!,
            desc: "",
            off: 0,
            score: 0,
            type: product?.type!,
            qt: product?.qt!,
        });
    };

    return (
        <div className="bg-background-products bg-cover h-screen relative flex items-center justify-center">
            <div className="absolute left-0 top-0 size-full bg-brown/90" />
            <div className="z-10 flex gap-24 container">
                <Image
                    className="rounded-2xl"
                    src={product?.img!}
                    alt={product?.title!}
                    width={350}
                    height={350}
                />
                <div>
                    <h2 className="text-white text-2xl font-bold pb-4 border-b border-white">
                        {product?.title}
                    </h2>

                    <div className="pt-4">
                        {product?.off === 0 ? (
                            <p className="text-white text-3xl font-semibold">${product?.price}</p>
                        ) : (
                            <div className="flex gap-4 items-center">
                                <p className="text-white text-3xl font-semibold ">
                                    ${product?.price! - (product?.price! * product?.off!) / 100}
                                </p>
                                <p className="text-red text-3xl font-semibold line-through">
                                    ${product?.price}
                                </p>
                            </div>
                        )}
                    </div>
                    <p className="text-white text-lg pt-4">{product?.desc}</p>

                    <button
                        onClick={handleAddCart}
                        className="bg-lightBrown mt-[5rem] w-full text-white p-3 rounded-lg"
                    >
                        Add to Cart
                        <FontAwesomeIcon className="text-lg ml-2" icon={faShoppingBag} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
