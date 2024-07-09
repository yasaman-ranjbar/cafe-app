import { getMe } from "@/services/requests/auth";
import Image from "next/image";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";

const Checkout = () => {
  useEffect(() => {
    const data = async () => {
      const res = await getMe();
      console.log("getMe", res);
    };

    data();
  }, []);

  return (
    <div className="container py-24">
      <h2 className="text-xl font-semibold mb-[1.5rem]">Shipping Address</h2>

      <div className="bg-lightGray p-6 rounded-xl flex flex-col gap-6 mb-[2.5rem]">
        <h2 className="font-semibold">home</h2>
        <h5 className="text-gray font-normal">
          Area: Abu Ftaira - Apt: - – Floor: - Bld: 222 - Block: 22 - Str: Abu
          Ftaira – Avenue: - - Recipient Number: - - Customer Number:
          +96556322879 – Extra Info: -
        </h5>
      </div>

      <Disclosure defaultOpen>
        <DisclosureButton className=" bg-lightGray p-4 flex gap-2 w-full rounded-t-xl">
          <FontAwesomeIcon
            icon={Icons["faShippingFast"]}
            className="text-yellow text-xl font-bold"
          />
          <p className="font-semibold">Parcel 1</p>
          <FontAwesomeIcon
            icon={Icons["faChevronDown"]}
            className="text-yellow text-sm font-bold ml-auto"
          />
        </DisclosureButton>

        <DisclosurePanel transition className="text-gray-500 flex p-4">
          <Image
            className="p-2"
            src="/images/menu-1.jpg"
            alt="product"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-normal">product name</h3> 
            <p className="text-sm font-normal text-gray"> organic</p>
            <h5 className="text-sm font-normal">USD 6.210</h5>
          </div> 
        </DisclosurePanel>
      </Disclosure>

      
    </div>
  );
};

export default Checkout;
