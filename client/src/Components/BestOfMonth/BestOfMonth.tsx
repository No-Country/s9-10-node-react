import { MouseEvent } from "react";
import { SearchBoxScreen } from "..";
import { useNavigate } from "react-router-dom";

interface BestOfMonthProps {
  bestPersons: {
    position: number;
    name: string;
    job: string;
    score: string;
    praises: number;
  }[];
}

const BestOfMonth = ({ bestPersons }: BestOfMonthProps) => {
  const navigate = useNavigate();

  const handlePersonClick = (e: MouseEvent, name: number) => {
    e.preventDefault();
    navigate(`/user/${name}`);
  };

  return (
    <div className="px-20">
      <SearchBoxScreen />
      <h1 className="py-4 text-2xl font-bold text-gray-700">Mejores del mes</h1>
      <div className="overflow-hidden border border-gray-300 rounded-xl">
        <table className="w-full text-center border-collapse table-auto border-spacing-8 border-radius-2xl ">
          <thead className="bg-gray-200">
            <tr>
              <th>Posición</th>
              <th>Nombre y Apellido</th>
              <th>Puesto</th>
              <th>Puntaje</th>
              <th>Elogios</th>
            </tr>
          </thead>
          <tbody>
            {bestPersons.map((person) => (
              <tr
                key={person.position}
                className=""
                onClick={(e) => handlePersonClick(e, person.position)}
              >
                <td className="relative flex justify-center px-4 py-2 font-medium text-gray-500 bg-white border-b border-gray-200">
                  {
                    <div className={"rounded-full w-6 h-6 flex items-center justify-center"}>
                      <div
                        className={`${
                          person.position <= 3 ? "block absolute ml-auto w-4 left-4 " : "hidden"
                        }`}
                      >
                        <img src="https://img.icons8.com/ios/50/000000/star--v1.png" />
                      </div>
                      {person.position}
                    </div>
                  }
                </td>
                <td className="px-4 py-2 text-gray-500 bg-white border-b border-gray-200 ">
                  {person.name}
                </td>
                <td className="px-4 py-2 text-gray-500 bg-white border-b border-gray-200 ">
                  {person.job}
                </td>
                <td className="px-4 py-2 text-gray-500 bg-white border-b border-gray-200 ">
                  {person.score}
                </td>
                <td className="px-4 py-2 text-gray-500 bg-white border-b border-gray-200 ">
                  {person.praises}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestOfMonth;
