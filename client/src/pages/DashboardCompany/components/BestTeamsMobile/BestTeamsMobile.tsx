import { Card } from 'antd';
import './BestTeamsMobile.css';

interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
  empleados: string;
}

const BestTeamsMobile: React.FC = () => {
  const data: CardData[] = [
    {
      id: 1,
      position: 1,
      name: "Recursos Humanos",
      description: "1 Team Leader",
      empleados: "4 Empleados"
    },
    {
      id: 2,
      position: 2,
      name: "Backend Developers",
      description: "1 Team Leader",
      empleados: "4 Empleados"
    },
    {
      id: 3,
      position: 3,
      name: "Marketing",
      description: "1 Team Leader",
      empleados: "4 Empleados"
    },
    {
      id: 4,
      position: 4,
      name: "Digital Team",
      description: "1 Team Leader",
      empleados: "4 Empleados"
    },
    {
      id: 5,
      position: 5,
      name: "Front end Developers",
      description: "1 Team Leader",
      empleados: "4 Empleados"
    },
    {
      id: 6,
      position: 6,
      name: "UX/UI Design",
      description: "1 Team Leader",
      empleados: "4 Empleados"
    }
  ];


  return (
    <>
      <h2 className='textCardMobile font-inter'>Por equipos</h2>
      <div className='contenedorCardTeamMobile'>
        {data.map((item) => (
          <div key={item.id} className='item-Mobile'>
            <Card className={`mb-6 card-mobile-team card-${item.id}`}>
              <div className='card-content-mobile'>
                <Card.Meta
                  title={
                    <p className='custom-title-class font-inter'>{item.name}</p>
                  }
                  description={
                    <p className='custom-description-class font-inter'>
                      {item.description}
                      <br />
                      {item.empleados}
                    </p>
                  }
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestTeamsMobile;
