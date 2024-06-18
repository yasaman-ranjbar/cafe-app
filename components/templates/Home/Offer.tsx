import { useState } from "react";

function Offer() {
  const [email, setEmail] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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

    if(res.status === 201) {
      setEmail("")
      alert("Thank you for subscribing to our newsletter!");
    }

  };

  return (
    <div className="flex flex-col items-center justify-center bg-background-bg py-12 text-center relative">
      <div className="absolute left-0 top-0 size-full bg-brown/90" />
      <div className="z-10">
        <h1 className="text-yellow text-7xl font-bold mt-4 mb-2">50% OFF</h1>
        <h2 className="mb-4 text-white text-5xl font-bold">
          Sunday Special Offer
        </h2>
        <h3 className="mb-6 pb-4 text-white font-semibold text-3xl">
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
  );
}

export default Offer;
