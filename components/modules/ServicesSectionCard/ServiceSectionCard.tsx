import Image from "next/image";
import { ServiceSectionCardPro0ps } from "./serviceSection.types";

const ServiceSectionCard: React.FC<ServiceSectionCardPro0ps> = ({
  description,
  icon,
  src,
  title,
}) => {
  return (
    <div className="flex">
      <Image
        className="px-3.5"
        src={src}
        width={207}
        height={207}
        alt="service"
      />
      <div className="pb-2 px-3.5">
        <div className="flex gap-3.5 items-center">
          <div className="size-[45px] rounded-full bg-yellow flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="font-semibold text-primary text-xl">{title}</h3>
        </div>
        <h5 className="text-base text-gray font-normal">{description}</h5>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
