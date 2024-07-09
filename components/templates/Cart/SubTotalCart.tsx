import IButton from "@/components/modules/Button/Button";
import { useCard } from "@/store/card-store";
import { useRouter } from "next/router";

const SubTotalCart = () => {

const router = useRouter();

const cart = useCard((state) => state.cards);

const newCart=  cart.map((product) => product?.price - (product?.price * product?.off!) / 100 * product.qt);

console.log("newCart", newCart);

const total = newCart.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="bg-lightGray p-4 fixed flex flex-col gap-3 bottom-0 left-4 w-full rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-gray font-normal text-base">Sub Total</p>
        <p className=" font-semibold text-xl">{total} USD</p>
      </div>
      <IButton
        onClick={() => router.push("/cart")}
        variant="primary"
        className=""
      >
        View Cart
      </IButton>
    </div>
  );
}

export default SubTotalCart