import { Card } from 'antd';
import './BestTeamsMobile.css';

interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
}

const BestTeamsMobile: React.FC = () => {
  const data: CardData[] = [
    {
      id: 1,
      position: 1,
      name: 'Equipo 1',
      description: 'Nombre',
    },
    {
      id: 2,
      position: 2,
      name: 'Equipo 2',
      description: 'Nombre',
    },
    {
      id: 3,
      position: 3,
      name: 'Equipo 3',
      description: 'Nombre',
    },
    {
      id: 4,
      position: 4,
      name: 'Equipo 4',
      description: 'Nombre',
    },
    {
      id: 5,
      position: 5,
      name: 'Equipo 5',
      description: 'Nombre',
    },
    {
      id: 6,
      position: 6,
      name: 'Equipo 6',
      description: 'Nombre',
    },
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