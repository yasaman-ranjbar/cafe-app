import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { ProductDetailsProps } from "@/services/requests/product";
import { useCard } from "@/store/card-store";
import placeholder from '@/public/images/placeholder.webp'

const ProductDetails = ({
  product,
}: {
  product: Partial<ProductDetailsProps>;
}) => {


  const addCart = useCard((state) => state.addCard);

  const handleAddCart = () => {
    addCart({
      _id: product._id!,
      title: product.title!,
      price: product.price!,
      image: product.image!,
      description: "",
      discount: 0,
      tags: [],
      comment: [],
      score: 0
    });
  };


  return (
    <div className="bg-background-products bg-cover h-screen relative flex items-center justify-center">
      <div className="absolute left-0 top-0 size-full bg-brown/90" />
      <div className="z-10 flex gap-24 container">
        <Image
          className="rounded-2xl"
          src={product.image! || placeholder}
          alt={product.title!}
          width={350}
          height={350}
        />
        <div>
          <h2 className="text-white text-2xl font-bold pb-4 border-b border-white">
            {product.title}
          </h2>
          <div className="pt-4">
            {new Array(Math.trunc(product.score!)).fill(0).map((item) => (
              <FontAwesomeIcon
                key={item}
                className="text-lg text-yellow"
                icon={faStar}
              />
            ))}
            {new Array(5 - Math.trunc(product.score!)).fill(0).map((item) => (
              <FontAwesomeIcon key={item} className="text-lg " icon={faStar} />
            ))}
          </div>
          <div className="pt-4">
            {product.discount === 0 ? (
              <p className="text-white text-3xl font-semibold">
                ${product.price}
              </p>
            ) : (
              <div className="flex gap-4 items-center">
                <p className="text-white text-3xl font-semibold ">
                  ${product.price! - (product.price! * product.discount!) / 100}
                </p>
                <p className="text-red text-3xl font-semibold line-through">
                  ${product.price}
                </p>
              </div>
            )}
          </div>
          <p className="text-white text-lg pt-4">{product.description}</p>

          <div className="my-4">
            {product.tags?.map((item) => (
              <span
                key={item}
                className="bg-lightBrown text-white text-xs font-medium rounded-lg px-2 py-1 mr-2"
              >
                {item}
              </span>
            ))}
          </div>

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
