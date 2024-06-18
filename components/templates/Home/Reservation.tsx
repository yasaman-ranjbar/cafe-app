import FormReservation from "@/components/modules/Reservation/FormReservation";
import TextReservation from "@/components/modules/Reservation/TextReservation";

const Reservation = () => {
    return (
      <div className="container py-12">
        <div className=" bg-background-bg bg-cover relative">
          <div className="absolute left-0 top-0 size-full bg-brown/85" />
          <div className="flex">
            <TextReservation />

            <FormReservation />
          </div>
        </div>
      </div>
    );
};

export default Reservation;
