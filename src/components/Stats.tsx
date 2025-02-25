import { IoIosPerson } from 'react-icons/io';
import { FaHandshake } from 'react-icons/fa';
import { FaArrowsDownToPeople } from 'react-icons/fa6';
import { GiOpenBook } from 'react-icons/gi';

const stats = [
  { value: '3K+', label: 'Successfully Trained', Icon: IoIosPerson },
  { value: '15K+', label: 'Classes Completed', Icon: FaHandshake },
  { value: '97K+', label: 'Satisfaction Rate', Icon: FaArrowsDownToPeople },
  { value: '102K+', label: 'Students Community', Icon: GiOpenBook },
];

const Stats: React.FC = () => {
  return (
    <div className="items-center text-center py-10 mb-16 sm:mx-2 bg-[#FFD25DEE] rounded-full text-white justify-around px-14 flex-wrap lg:gap-3 sm:gap-5 gap-12 grid lg:grid-cols-4 sm:grid-cols-2 sm:w-full w-fit mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2 lg:flex-row flex-col">
          <div className="text-4xl w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#0E2A46]">
            <stat.Icon />
          </div>
          <div className="lg:text-left text-center">
            <h3 className="text-3xl font-bold text-[#0E2A46] mb-1">{stat.value}</h3>
            <p className="text-md text-[#0E2A46] font-semibold">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
