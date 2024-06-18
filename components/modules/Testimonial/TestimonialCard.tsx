import Image from "next/image";
import { TestimonialProps } from "./testimonial.types";

const TestimonialCard: React.FC<TestimonialProps> = ({
  desc,
  username,
  img,
}) => {
    return (
      <div className="container">
        <div className="flex items-center gap-4">
          <Image
            src={img}
            width={100}
            height={100}
            alt={username}
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-primary text-2xl font-semibold">{username}</h2>
            {/* <h2 className="text-gray italic font-extralight text-base">
              {post}
            </h2> */}
          </div>
        </div>
        <div className="text-gray font-extralight text-base mt-2">{desc}</div>
      </div>
    );
};

export default TestimonialCard;
