import { useState } from "react";
import TextField, { Textarea } from "../TextField/TextField";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contact);
    if (contact.name === "" || contact.email === "" || contact.message === "" || contact.subject === "") {
      alert("Please fill all the fields");
      return;
    } else {
      const res = await fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
        
      })
      if (res.status === 201) {
        alert("Message sent successfully");
      } else {
        alert("Something went wrong");
      }
      setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    
  };

  return (
    <div className="flex-1">
      <form onSubmit={sendMessage} className="flex flex-col gap-4">
        <TextField
          type="text"
          variant="gray"
          placeholder="Your Name"
          bgVariant="primary-light"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <TextField
          type="text"
          variant="gray"
          placeholder="Your Email"
          bgVariant="primary-light"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <TextField
          type="text"
          variant="gray"
          placeholder="Subject"
          bgVariant="primary-light"
          name="subject"
          value={contact.subject}
          onChange={changeHandler}
        />

        <Textarea
          placeholder="Message"
          variant="gray"
          bgVariant="primary-light"
          name="message"
          value={contact.message}
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-yellow text-primary py-2 font-bold inline-block px-6"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
