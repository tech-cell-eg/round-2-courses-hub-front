import InstructorCard from "./instructorCard.tsx";
import { Link } from "react-router-dom";
import { instructorCards } from "./data";

function InstructorCards() {
  return (
    <div className="flex flex-col justify-center  gap-5 py-10">
      <Link to={`/auth/instructor-registration`} type="button" className="bg-purple-200 text-purple-800 px-4 py-1 text-sm rounded-md w-fit">TEACHER</Link>
      <h1 className="font-bold text-blue-950 text-xl md:text-3xl lg:text-4xl">Meet Our Instructor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {instructorCards.map((card) => (
          <Link to={`/instructors/${card.id}`}>
            <InstructorCard key={card.id} card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InstructorCards;
