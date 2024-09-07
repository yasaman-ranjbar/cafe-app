import Image from "next/image";
import Link from "next/link";
import { useCard } from "@/store/card-store";
import { ProductDetailsProps } from "@/services/requests/product";
import defaultImage from "@/public/images/menu-1.jpg";

const MenuSection: React.FC<ProductDetailsProps> = ({
  title,
  price,
  image,
  description,
  _id,
  discount,
}) => {
  const addCard = useCard((state) => state.addCard);
  const cards = useCard((state) => state.cards);

  const addToCart = (ID: number) => {
    addCard({
      _id, title, price, image, description, discount,
      tags: [],
      comment: [],
      score: 0
    });
  };

  console.log("cards", cards);

  return (
    <div className="flex items-center">
      <div className="relative">
        <Image
          className="rounded-full"
          src={image === "" ? defaultImage : `/images/${image}`}
          alt={title}
          width={200}
          height={100}
        />
        <div className="absolute top-0 right-0 size-10 flex items-center justify-center bg-yellow rounded-full text-primary text-xl">
          {price}$
        </div>
      </div>
      <div className="px-3.5">
        <Link href={{ pathname: `/products/${_id}`, query: { name: title } }}>
          <h3 className="text-primary text-2xl font-semibold cursor-pointer">
            {title}
          </h3>
        </Link>
        <h5 className="text-gray font-normal">{description}</h5>
        <button
          onClick={() => addToCart(+_id)}
          className="text-yellow font-bold mt-4 border border-yellow rounded-lg px-2 py-1"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
