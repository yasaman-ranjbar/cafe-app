import Image from "next/image";
import { ServiceSectionCardProps } from "./serviceSection.types";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";




const ServiceSectionCard: React.FC<ServiceSectionCardProps> = ({
  desc,
  icon,
  img,
  title,
}) => {
  return (
    <div className="flex">
      <Image
        className="px-3.5"
        src={img}
        width={207}
        height={207}
        alt="service"
      />
      <div className="pb-2 px-3.5">
        <div className="flex gap-3.5 items-center">
          <div className="size-[45px] rounded-full bg-yellow flex items-center justify-center text-primary">
            <FontAwesomeIcon
              icon={(Icons as any)[icon]}
              className="font-base"
            />
          </div>
          <h3 className="font-semibold text-primary text-xl">{title}</h3>
        </div>
        <h5 className="text-base text-gray font-normal">{desc}</h5>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
