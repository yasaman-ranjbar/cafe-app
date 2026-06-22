import TextField, { Textarea } from "../TextField/TextField";
import { useForm, Controller } from "react-hook-form";
import { IContact } from "@/components/modules/Contact/types";
import { toast } from "react-toastify";
import IButton from "../Button/Button";

const ContactForm = () => {
  const { handleSubmit, register, setValue, formState: {errors} } = useForm<IContact>();

  const onSubmit = async (data: IContact) => {

  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextField
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          variant="gray"
          placeholder="Your Name"
          bgVariant="primary-light"
          error={errors.name?.message}
        />
        <TextField
          {...register("email", {
            required: "Email is required",
          })}
          type="text"
          variant="gray"
          placeholder="Your Email"
          bgVariant="primary-light"
          error={errors.email?.message}
        />
        <TextField
          {...register("subject", {
            required: "Subject is required",
          })}
          type="text"
          variant="gray"
          placeholder="Subject"
          bgVariant="primary-light"
          error={errors.subject?.message}
        />
        <Textarea
          {...register("message", {
            required: "Message is required",
          })}
          placeholder="Message"
          variant="gray"
          bgVariant="primary-light"
          error={errors.message?.message}
        />
        <IButton type="submit" variant="secondary">
          Send Message
        </IButton>
      </form>
    </div>
  );
};

export default ContactForm;
