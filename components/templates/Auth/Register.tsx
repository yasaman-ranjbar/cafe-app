import { FormEvent, useState } from "react";
import TextField from "@/components/modules/TextField/TextField";
import { useRouter } from "next/router";
import { register } from "@/services/requests/auth";

const Register = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const registerUser = async (event: FormEvent) => {
    event.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !firstname.trim() ||
      !lastname.trim()
    ) {
      return alert("Data is not valid !!");
    }

    const newUser = {
      firstname,
      lastname,
      username,
      email,
      password,
    };

    register(newUser as any);
    router.push("/");
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full sm:px-[1rem] md:px-[15rem]">
      <h1 className="text-primary text-3xl font-bold mb-4 text-center">
        Register in Coffee Application
      </h1>
      <form onSubmit={registerUser} className="flex flex-col gap-4">
        <TextField
          type="text"
          variant="gray"
          placeholder="FirstName"
          bgVariant="primary-light"
          name="name"
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          type="text"
          variant="gray"
          placeholder="LastName"
          bgVariant="primary-light"
          name="name"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
        />
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
          placeholder="Password"
          bgVariant="primary-light"
          name="subject"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          type="submit"
          className="bg-yellow text-primary py-2 font-bold inline-block px-6"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
