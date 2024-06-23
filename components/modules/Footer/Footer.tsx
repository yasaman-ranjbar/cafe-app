import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const addEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/newsLetters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (res.status === 201) {
      setEmail("");
      alert("Thank you for subscribing to our newsletter!");
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-full h-10 bg-background-top-paper bg-repeat-x z-50" />
      <div className="bg-background-bg bg-cover relative z-10 ">
        <div className="absolute left-0 top-0 size-full bg-brown/90" />

        <div className="text-white grid grid-cols-4  pt-24">
          <div className="z-10 px-12 ">
            <div>
              <h1 className="text-2xl font-bold mb-6">GET IN TOUCH</h1>
              <h4 className="text-base font-normal mb-4">
                <FontAwesomeIcon
                  icon={Icons["faMapMarkerAlt"]}
                  className=" text-lg font-bold mr-2"
                />
                123 Street, New York, USA
              </h4>
              <h4 className="text-base font-normal mb-4">
                <FontAwesomeIcon
                  icon={Icons["faPhoneAlt"]}
                  className=" text-lg font-bold mr-2"
                />
                +012 345 67890
              </h4>
              <h4 className="text-base font-normal mb-4">
                <FontAwesomeIcon
                  icon={Icons["faEnvelope"]}
                  className=" text-lg font-bold mr-2"
                />
                info@example.com
              </h4>
            </div>
          </div>

          <div className="z-10 px-12 ">
            <div>
              <h1 className="text-2xl font-bold mb-6">FOLLOW US</h1>
              <p className="text-base font-normal mb-4">
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </p>
              <div className="flex gap-2">
                <div className="size-10.5 border border-white flex items-center justify-center p-3">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" text-xl font-bold"
                  />
                </div>
                <div className="size-10.5 border border-white flex items-center justify-center p-3">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className=" text-xl font-bold"
                  />
                </div>
                <div className="size-10.5 border border-white flex items-center justify-center p-3">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className=" text-xl font-bold"
                  />
                </div>
                <div className="size-10.5 border border-white flex items-center justify-center p-3">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" text-xl font-bold"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="z-10  px-12 ">
            <div>
              <h1 className="text-2xl font-bold mb-6">OPEN HOURS</h1>
              <h4 className="text-base font-normal mb-4">
                MONDAY - FRIDAY <br />
                8.00 AM - 8.00 PM
              </h4>
              <h4 className="text-base font-normal mb-4">
                SATURDAY - SUNDAY <br />
                2.00 PM - 8.00 PM
              </h4>
            </div>
          </div>

          <div className="z-10 px-12 ">
            <div>
              <h1 className="text-2xl font-bold mb-6">NEWSLETTER</h1>
              <p className="text-base font-normal mb-4">
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </p>
              <div className="flex pb-6">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 outline-none"
                  type="text"
                  placeholder="Your Email"
                />
                <button
                  onClick={addEmail}
                  className="text-primary  bg-yellow px-6 py-4 font-medium"
                >
                  JOIN
                </button>
              </div>
            </div>
          </div>

          <div className=" border-t border-gray border-opacity-25 z-10 col-span-4 p-6 flex flex-col items-center justify-center">
            <h4 className=" text-white mb-2">
              Copyright <span className="text-yellow font-bold">© Domain</span>.
              All Rights Reserved.
            </h4>
            <h4 className=" text-white mb-2">
              Designed by{" "}
              <span className="text-yellow font-bold">Hina Web</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
