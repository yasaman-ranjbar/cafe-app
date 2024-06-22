import TextField from "../TextField/TextField";

function FormReservation() {
  return (
    <div className="z-20 flex-1 bg-brown/75 p-12">
      <h1 className="mb-4 text-white text-5xl font-bold pb-6 pt-12">
        Book Your Table
      </h1>
      <form className="flex flex-col gap-4">
        <TextField
          variant="yellow"
          type="text"
          placeholder="Name"
          bgVariant="brown"
        />
        <TextField
          variant="yellow"
          type="text"
          placeholder="Email"
          bgVariant="brown"
        />
        <TextField
          variant="yellow"
          type="text"
          placeholder="Date"
          bgVariant="brown"
        />
        <TextField
          variant="yellow"
          type="text"
          placeholder="Time"
          bgVariant="brown"
        />
        <select className="bg-brown h-[3.125rem] border border-yellow p-6 text-white">
          <option className="text-white my-4">person1</option>
          <option className="text-white my-4">person2</option>
          <option className="text-white my-4">person3</option>
        </select>
        <button className="outline-none bg-yellow block h-[3.125rem] text-lg font-medium">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default FormReservation;
