import { newsletter } from "@/services/requests/neewsletter";
import { useState } from "react";
import { toast } from "react-toastify";

function Offer() {
  const [email, setEmail] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const addEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!email) return toast.error("Email is required");
    const res = await newsletter({ email });
    if(res.status === 201) {
      setEmail("")
      toast.success(res.data.message);
    }
  };

  return (
    <div className="relative">
      <div className="absolute -top-1 right-0 w-full h-10 bg-background-top-paper bg-repeat-x z-50" />
      <div className="flex flex-col items-center justify-center bg-background-bg bg-cover py-12 text-center relative">
        <div className="absolute left-0 top-0 size-full bg-brown/90" />
        <div className="z-10">
          <h1 className="text-yellow text-5xl md:text-7xl font-bold mt-4 mb-2">
            50% OFF
          </h1>
          <h2 className="mb-4 text-white text-3xl md:text-5xl font-bold">
            Sunday Special Offer
          </h2>
          <h3 className="mb-6 pb-4 text-white font-semibold text-xl md:text-3xl">
            Only for Sunday from 1st Jan to 30th Jan 2045
          </h3>
          <div className="pb-6">
            <input
              value={email}
              onChange={changeHandler}
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
      <div className="absolute -bottom-7 right-0 w-full h-10 bg-background-bottom-paper bg-repeat-x z-50" />
    </div>
  );
}

export default Offer;
