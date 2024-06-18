import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ServiceSectionCardProps = {
    id?: number,
    title: string;
    img: string;
    icon: string;
    desc: string;
};