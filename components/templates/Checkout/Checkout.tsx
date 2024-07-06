import { getMe } from "@/services/requests/auth";
import { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    const data = async () => {
      const res = await getMe();
      console.log("getMe", res);
    };

    data();
  }, []);

  return <div>Checkout</div>;
};

export default Checkout;
