import FormReservation from "@/components/modules/Reservation/FormReservation";
import TextReservation from "@/components/modules/Reservation/TextReservation";

const Reservation = () => {
    return (
      <div className="container py-12 relative">
        <div className="absolute top-11 right-0 w-full h-10 bg-background-top-paper bg-repeat-x z-50" />
        <div className=" bg-background-bg bg-cover relative">
          <div className="absolute left-0 top-0 size-full bg-brown/85" />
          <div className="flex md:flex-row flex-col">
            <TextReservation />
            <FormReservation />
          </div>
        </div>
        <div className="absolute bottom-5 right-0 w-full h-10 bg-background-bottom-paper bg-repeat-x z-50" />
      </div>
    );
};

export default Reservation;
