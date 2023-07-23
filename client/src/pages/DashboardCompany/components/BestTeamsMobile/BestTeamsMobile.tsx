import React, {  useState } from "react";
import {  EditOutlined } from "@ant-design/icons";
import { Card } from 'antd';
import { Link } from "react-router-dom";
import './BestTeamsMobile.css';
import People from "../BestTeams/img/People_Group.png";
import Backen from "../BestTeams/img/Database.png";
import Megaphone from "../BestTeams/img/Megaphone_2.png";
import Vector from "../BestTeams/img/Vector.png";
import Front from "../BestTeams/img/front.png";
import Ux from "../BestTeams/img/Draw_Square.png"
import BtnDelet from "../../../../Components/BtnDelet/BtnDelet";



interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
  empleados: string;
}

const BestTeamsMobile: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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



  const getIconByTitle = (title: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Recursos Humanos": (
        <img
          src={People}
          alt="People Group"
          style={{ filter: "brightness(0) invert(1)", width: "38px" }}
        />
      ),
      "Backend Developers": (
        <img
          src={Backen}
          alt="Base de datos"
          style={{ filter: "brightness(0) invert(1)", width: "32px" }}
        />
      ),
      'Marketing': (
        <img
          src={Megaphone}
          alt="Megaphono"
          style={{ filter: "brightness(0) invert(1)", width: "37px" }}
        />
      ),
      "Digital Team": (
        <img
          src={Vector}
          alt="Vector"
          style={{ filter: "brightness(0) invert(1)", width: "22px" }}
        />
      ),
      "Front end Developers": (
        <img
          src={Front}
          alt="Front end"
          style={{ filter: "brightness(0) invert(1)", width: "22px" }}
        />
      ),
      "UX/UI Design": (
        <img
          src={Ux}
          alt="Diseño UX/UI"
          style={{ filter: "brightness(0) invert(1)", width: "32px" }}
        />
      ),
    };
    return iconMap[title] || null;
  };


  const handleCardMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleDelete = (teamId: number) => {
    // Acciones necesarias para eliminar el equipo con el teamId proporcionado.
    console.log(`Eliminar equipo con ID: ${teamId}`);
  };

  return (
    <>
      <h2 className='textCardMobile font-inter'>Por equipos</h2>
      <div className='contenedorCardTeamMobile'>
        {data.map((item) => (
          <div key={item.id} className='item-Mobile'>
            <div className="hrMobil">{getIconByTitle(item.name)}</div>
            <Card
              className={`mb-6 card-mobile-team card-${item.id}`}
              onMouseEnter={() => handleCardMouseEnter(item.id)}
              onMouseLeave={handleCardMouseLeave}
            >
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
              {hoveredCard === item.id && (
                <div className="footer-card-mobile">
                  <Link to="ranking-equipos" className="edit-cont-mobile">
                    <div className="edit-icon-mobile">
                      <EditOutlined />
                    </div>
                    <div className="edit-edit-mobile">Editar</div>
                  </Link>
                  <BtnDelet key={item.id} onDelete={() => handleDelete(item.id)} />
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestTeamsMobile;
