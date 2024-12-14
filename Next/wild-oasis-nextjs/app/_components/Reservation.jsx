import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

const Reservation = async ({ cabin }) => {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
};

export default Reservation;
