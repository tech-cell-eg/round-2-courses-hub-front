import Event from "./Event";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { eventDetails } from "./data";

interface EventProps {
  id: number;
  title: string;
  location: string;
  time: string;
  description: string;
  day: string;
  month: string;
}


const Events = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {eventDetails.map((event: EventProps) => (
          <Link to={`/events/${event.id}`}>
            <Event key={event.id} event={event} />
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Events;
