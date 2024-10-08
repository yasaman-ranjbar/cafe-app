import Image from "next/image";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import IButton from "@/components/modules/Button/Button";


function About() {
  return (
    <div className="relative">
      <div className="absolute -top-3 right-0 w-full h-10 bg-background-bottom-paper bg-repeat-x z-50" />
      <section className="container py-12">
        <SectionHeader title="About Us" header="Serving Since 1950" />

        <div className="flex flex-col gap-y-8 md:flex-row md:justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-semibold text-primary text-2xl md:text-4xl">
              Our Story
            </h2>
            <h4 className="text-primary text-xl font-normal mb-4">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
              sed vero dolor sea
            </h4>
            <p className="text-gray text-base mb-4">
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
              nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
              no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
              ut. Labor diam sed ipsum et eirmod
            </p>
            <IButton size="large" variant="primary">
              Learn More
            </IButton>
            {/* <button className="bg-brown text-white py-2 font-bold inline-block px-6">
              
            </button> */}
          </div>

          <div className="flex flex-1 justify-center">
            <Image
              src={"/images/about.png"}
              width={500}
              height={500}
              alt="about"
            />
          </div>

          <div className="flex-1">
            <h2 className="mb-4 font-semibold text-primary text-4xl">
              Our Vision
            </h2>
            <p className="text-gray text-base mb-4">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <h5 className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={Icons["faCheck"]}
                  className="text-yellow text-xl font-bold"
                />

                <span className="text-primary text-xl font-normal">
                  Lorem ipsum dolor sit amet
                </span>
              </h5>
              <h5 className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={Icons["faCheck"]}
                  className="text-yellow text-xl font-bold"
                />
                <span className="text-primary text-xl font-normal">
                  Lorem ipsum dolor sit amet
                </span>
              </h5>
              <h5 className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={Icons["faCheck"]}
                  className="text-yellow text-xl font-bold"
                />
                <span className="text-primary text-xl font-normal">
                  Lorem ipsum dolor sit amet
                </span>
              </h5>
            </div>
            <IButton size="large" variant="secondary">
              Learn More
            </IButton>
            {/* <button className="bg-yellow text-primary py-2 font-bold inline-block px-6">
              Learn More
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
