import { FormEvent, useState } from "react";
import TextField from "@/components/modules/TextField/TextField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event: FormEvent) => {
    event.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      return alert("Data is not valid !!");
    }

    const newUser = {
      username,
      email,
      password,
    };

    const res = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();

    if (res.status === 201) {
      setUsername("");
      setEmail("");
      setPassword("");
    }
    console.log("Response =>", res);
    console.log("Response Data =>", data);
  };

  return (
    <div className="w-full sm:px-[1rem] md:px-[15rem]">
      <h1 className="text-primary text-3xl font-semibold mb-4 text-center">
        Login to Coffee Application
      </h1>
      <form onSubmit={registerUser} className="flex flex-col gap-4">
        <TextField
          type="text"
          variant="gray"
          placeholder="Your Username"
          bgVariant="primary-light"
          name="name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          type="text"
          variant="gray"
          placeholder="Your Email"
          bgVariant="primary-light"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          type="password"
          variant="gray"
          placeholder="password"
          bgVariant="primary-light"
          name="subject"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          type="submit"
          className="bg-yellow text-primary py-2 font-bold inline-block px-6"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
