import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import IButton from '@/components/modules/Button/Button';
import { useRouter } from 'next/router';

const EmptyCartDrawer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-24">
      <FontAwesomeIcon
        icon={Icons["faShoppingCart"]}
        className="text-primary text-3xl font-bold"
      />
      <h3 className="font-semibold text-xl">Cart is Empty</h3>
      <h4 className="font-semibold text-base text-gray">Cart is Empty</h4>
      <IButton
        onClick={() => router.push('/')}
        variant="primary"
        size="large"
        className="font-semibold"
      >
        Explore Product
      </IButton>
    </div>
  );
}

export default EmptyCartDrawer