import Image from "next/image";
import { AddCommentProps } from "@/services/requests/comment";
import placeholder from '@/public/images/user.jpg'

const TestimonialCard: React.FC<AddCommentProps> = ({
  description,
  username,
}) => {
  return (
    <div className="flex flex-col justify-center items-center pb-12">
      <div className="flex justify-center items-center gap-4">
        <Image src={placeholder} width={50} height={50} alt={username} />
        <div className="flex flex-col gap-4">
          <h2 className="text-primary text-2xl font-semibold">{username}</h2>
          <h2 className="text-gray italic font-extralight text-base">User</h2>
        </div>
      </div>
      <div className="text-gray font-extralight text-base mt-2">
        {description}
      </div>
    </div>
  );
};

export default TestimonialCard;
