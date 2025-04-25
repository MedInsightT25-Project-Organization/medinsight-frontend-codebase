import { FaCalendarCheck, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import { GoHourglass } from "react-icons/go";
import { TbCalendarCheck } from "react-icons/tb";
import { VscError } from "react-icons/vsc";

const DashboardCards = () => {
    const cards = [
        {
            title: "Scheduled Appointments",
            count: 42,
            icon: <TbCalendarCheck className="text-green-600 text-3xl" />,

        },
        {
            title: "Pending Appointments",
            count: 18,
            icon: <GoHourglass className="text-yellow-600 text-3xl" />,

        },
        {
            title: "Cancelled Appointments",
            count: 7,
            icon: <VscError className="text-red-600 text-3xl" />,

        },
    ];

    return (
        <div className="overflow-x-auto md:overflow-visible">
            <div className="flex md:grid md:grid-cols-3 gap-6 p-6 min-w-[600px] md:min-w-0">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`min-w-[250px] md:min-w-0 rounded-xl card-shadow p-5 flex flex-col gap-4 transition-all duration-300 cursor-pointer ${card.bg}`}
                    >
                        <div className="flex items-center gap-2">{card.icon}
                            <h3 className="text-3xl font-medium text-gray-800">{card.count}</h3>
                        </div>

                        <p className="text-xs text-gray-600">{card.title}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardCards;
