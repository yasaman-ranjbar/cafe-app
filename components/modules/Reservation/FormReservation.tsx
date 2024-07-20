import { useForm , Controller } from "react-hook-form";
import IButton from "../Button/Button";
import SelectBox from "../SelectBox/SelectBox";
import { SelectBoxItems } from "../SelectBox/SelectBox.types";
import TextField from "../TextField/TextField";

interface BookFormProps {
  name: string;
  email: string;
  date: Date;
  time: string;
  number: string;
}

function FormReservation() {
  const { handleSubmit, register, setValue, control } = useForm<BookFormProps>();

  const items: SelectBoxItems[] = [
    { id: 1, label: "person 2", value: "person1" },
    { id: 2, label: "person 3", value: "person2" },
    { id: 3, label: "person 4", value: "person3" },
    { id: 4, label: "upp to 4", value: "person4" },
  ];

  const onSubmit = (data: BookFormProps) => {
    console.log(data)
  };

  return (
    <div className="z-20 flex-1 bg-brown/75 p-12">
      <h1 className="mb-4 text-white text-5xl font-bold pb-6 pt-12">
        Book Your Table
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextField
          {...register("name")}
          variant="yellow"
          type="text"
          placeholder="Name"
          bgVariant="brown"
        />
        <TextField
          {...register("email")}
          variant="yellow"
          type="text"
          placeholder="Email"
          bgVariant="brown"
        />
        <TextField
          {...register("date")}
          variant="yellow"
          type="date"
          bgVariant="brown"
          style={{ color: "#fff", fontWeight: "lighter" }}
        />
        <TextField
          {...register("time")}
          variant="yellow"
          type="text"
          placeholder="Time"
          bgVariant="brown"
        />
        <Controller
          control={control}
          name="number"
          defaultValue={items[0].label}
          render={({ field }) => <SelectBox {...field} items={items} />}
        />

        <IButton variant="secondary" type="submit">
          Book Now
        </IButton>
      </form>
    </div>
  );
}

export default FormReservation;
