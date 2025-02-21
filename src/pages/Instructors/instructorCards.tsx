import InstructorCard from "./instructorCard.tsx";
import { InstructorProps } from "../../types/types.ts";
import { Link } from "react-router-dom";

const instructorCards: InstructorProps[] = [
  { id: "1", img: "/instructor1.png", name: "Micheal Hammond", job: "Teacher" },
  { id: "2", img: "/instructor2.png", name: "Sarah Johnson", job: "Teacher" },
  { id: "3", img: "/instructor3.png", name: "James Anderson", job: "Teacher" },
  { id: "4", img: "/instructor4.png", name: "Emily Roberts", job: "Teacher" },
  { id: "5", img: "/instructor5.png", name: "David Smith", job: "Teacher" },
  { id: "6", img: "/instructor6.png", name: "Jessica Brown", job: "Teacher" },
  { id: "7", img: "/instructor7.png", name: "William Scott", job: "Teacher" },
  { id: "8", img: "/instructor8.png", name: "Olivia Davis", job: "Teacher" },
];

function InstructorCards() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10">
      <Link to={`/auth/instructor-registration`} type="button" className="bg-purple-200 text-purple-800 px-4 py-1 text-sm rounded-md">TEACHER</Link>
      <h1 className="font-bold text-blue-950 text-xl md:text-3xl lg:text-4xl">Meet Our Instructor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {instructorCards.map((card) => (
          <InstructorCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default InstructorCards;
