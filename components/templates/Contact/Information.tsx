import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/modules/Contact/ContactForm";
import ContactMap from "@/components/modules/Contact/ContactMap";

const Information = () => {
  return (
    <div className="container py-24">
      <SectionHeader header="Feel Free To Contact" title="contact us" />

      <div className="grid grid-cols-3 mb-6">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={Icons["faMapMarkerAlt"]}
            className="text-yellow text-3xl font-bold mb-2"
          />
          <h2 className="text-primary text-2xl font-bold mb-2">Address</h2>
          <h5 className="text-gray font-light text-base">
            123 Street, New York, USA
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={Icons["faPhoneAlt"]}
            className="text-yellow text-3xl font-bold mb-2"
          />
          <h2 className="text-primary text-2xl font-bold mb-2">Phone</h2>
          <h5 className="text-gray font-light text-base">+012 345 6789</h5>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={Icons["faEnvelope"]}
            className="text-yellow text-3xl font-bold mb-2"
          />
          <h2 className="text-primary text-2xl font-bold mb-2">Email</h2>
          <h5 className="text-gray font-light text-base">info@example.com</h5>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <ContactMap />
        <ContactForm />
      </div>
    </div>
  );
};

export default Information;
