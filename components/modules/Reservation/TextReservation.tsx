import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function TextReservation() {
  return (
    <div className="z-10 flex-1 p-12 flex flex-col justify-center ">
      <h1 className="text-yellow text-5xl md:text-7xl font-bold mt-4 mb-2">
        30% OFF
      </h1>
      <h2 className="mb-4 text-white text-3xl md:text-4xl font-bold">
        For Online Reservation
      </h2>
      <h3 className="mb-6 pb-4 text-white font-light text-lg">
        Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed
        eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et
        erat ut sed diam sea
      </h3>
      <h5 className="flex gap-2 items-center pb-2">
        <FontAwesomeIcon
          icon={Icons["faCheck"]}
          className="text-yellow text-xl font-bold"
        />

        <span className="text-white font-light text-lg">
          Lorem ipsum dolor sit amet
        </span>
      </h5>
      <h5 className="flex gap-2 items-center pb-2">
        <FontAwesomeIcon
          icon={Icons["faCheck"]}
          className="text-yellow text-xl font-bold"
        />

        <span className="text-white font-light text-lg">
          Lorem ipsum dolor sit amet
        </span>
      </h5>
      <h5 className="flex gap-2 items-center pb-2">
        <FontAwesomeIcon
          icon={Icons["faCheck"]}
          className="text-yellow text-xl font-bold"
        />

        <span className="text-white font-light text-lg">
          Lorem ipsum dolor sit amet
        </span>
      </h5>
    </div>
  );
}

export default TextReservation;
