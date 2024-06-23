import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";

const ProductDetails = ({ product }: { product: MenuProps }) => {
  return (
    <div className="bg-background-products bg-cover h-screen relative flex items-center justify-center">
      <div className="absolute left-0 top-0 size-full bg-brown/90" />
      <div className="z-10 flex gap-24 container">
        <Image
          className="rounded-2xl"
          src={product.img}
          alt={product.title}
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
              <FontAwesomeIcon
                key={item}
                className="text-lg "
                icon={faStar}
              />
            ))}

          </div>
          <div className="pt-4">
            {product.off === 0 ? (
              <p className="text-white text-3xl font-semibold">
                ${product.price}
              </p>
            ) : (
              <div className="flex gap-4 items-center">
                <p className="text-white text-3xl font-semibold ">
                  ${product.price - (product.price * product.off!) / 100}
                </p>
                <p className="text-red text-3xl font-semibold line-through">
                  ${product.price}
                </p>
              </div>
            )}
          </div>
          <p className="text-white text-lg pt-4">{product.desc}</p>

          <button className="bg-lightBrown mt-[5rem] w-full text-white p-3 rounded-lg">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
