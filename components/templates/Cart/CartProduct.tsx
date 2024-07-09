import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { CartProductProps } from "./cart.types";
import { useCard } from "@/store/card-store";

const CartProduct = ({
  removeProduct,
  increaseProduct,
}: CartProductProps) => {

  const cart = useCard((state) => state.cards);

  console.log(cart)

  return (
    <>
      {cart.map((product) => (
        <div key={product.id} className="justify-between flex py-4">
          <div className="text-gray-500 items-center flex">
            <Image
              className="p-2"
              src="/images/menu-1.jpg"
              alt="product"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-normal">{product?.title}</h3>
              <p className="text-sm font-normal text-gray"> {product?.type}</p>
              <div className="flex gap-4 items-center">
                <p className="text-primary text-base font-semibold ">
                  ${product?.price - (product?.price * product?.off!) / 100} USD
                </p>
                <p className="text-red text-base font-semibold line-through">
                  ${product?.price}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="size-10 border border-lightGray rounded-full flex justify-center items-center">
              {product.qt <= 1 ? (
                <FontAwesomeIcon
                  onClick={() => removeProduct(product.id!)}
                  icon={Icons["faTrashAlt"]}
                  className="text-primary text-lg font-bold"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => increaseProduct(product.id!)}
                  icon={Icons["faMinus"]}
                  className="text-primary text-lg font-bold"
                />
              )}
            </div>

            <span>{product.qt}</span>

            <div className="size-10 border border-lightGray rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                onClick={() => increaseProduct(product.id!)}
                icon={Icons["faPlus"]}
                className="text-primary text-lg font-bold"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartProduct;
