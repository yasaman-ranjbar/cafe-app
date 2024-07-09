import CartProduct from "./CartProduct";
import { useCard } from "@/store/card-store";
import EmptyCartDrawer from "./EmptyCartDrawer";
import SubTotalCart from "./SubTotalCart";

const CartDrawer = () => {
  const cart = useCard((state) => state.cards);
  const removeCart = useCard((state) => state.removeCard);
  const increasePro = useCard((state) => state.increaseProduct);
  const decreasePro = useCard((state) => state.decreaseProduct);

  const removeProduct = (id: number) => {
    removeCart(id);
  };
  const increaseProduct = (id: number) => {
    increasePro(id)
  };
  const decreaseProduct = (id: number) => {
    decreasePro(id);
  };

  return (
    <div className="px-4 relative">
      <h3 className="text-center font-semibold text-2xl">Cart</h3>
      {cart.length === 0 ? (
        <EmptyCartDrawer />
      ) : (
        <>
          <CartProduct
            decreaseProduct={decreaseProduct}
            removeProduct={removeProduct}
            increaseProduct={increaseProduct}
          />
          <SubTotalCart />
        </>
      )}
    </div>
  );
};

export default CartDrawer;
