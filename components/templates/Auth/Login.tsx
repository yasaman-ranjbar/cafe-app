import { FormEvent, useState } from "react";
import TextField from "@/components/modules/TextField/TextField";
import { useRouter } from "next/router";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginUser = async (event: FormEvent) => {
    event.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      return alert("Data is not valid !!");
    }

    const user = {
      identifier,
      password,
    };

    const res = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
     await res.json();

    if (res.status === 200) {
      setIdentifier("");
      setPassword("");
      router.replace("/");
    } else if (res.status === 401) {
      alert('Invalid credentials');
    } else if (res.status === 404) { 
      alert('User not found');
    }
  };

  return (
    <div className="w-full sm:px-[1rem] md:px-[15rem]">
      <h1 className="text-primary text-3xl font-bold mb-4 text-center">
        Login to Coffee Application
      </h1>
      <form onSubmit={loginUser} className="flex flex-col gap-4">
        
        <TextField
          type="text"
          variant="gray"
          placeholder="identifier / Username"
          bgVariant="primary-light"
          name="identifier"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
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
