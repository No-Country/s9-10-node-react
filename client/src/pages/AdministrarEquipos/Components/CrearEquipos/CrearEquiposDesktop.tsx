import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CrearEquiposSesktop.css";
import People from "../../../DashboardCompany/components/BestTeams/img/People_Group.png";
import Backen from "../../../DashboardCompany/components/BestTeams/img/Database.png";
import Megaphone from "../../../DashboardCompany/components/BestTeams/img/Megaphone_2.png";
import Vector from "../../../DashboardCompany/components/BestTeams/img/Vector.png";
import Front from "../../../DashboardCompany/components/BestTeams/img/front.png";
import Ux from "../../../DashboardCompany/components/BestTeams/img/Draw_Square.png";
import BtnDelet from "../../../../Components/BtnDelet/BtnDelet";

import SearchEquipos from "../../../../Components/SearchBoxScreen/SearchEquipos";


interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
  empleados: string;
}

const CrearEquiposDesktop: React.FC = () => {
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSearch = () => {
    // Lógica para manejar la búsqueda
  };

  const handleDelete = (teamId: number) => {
    // Acciones necesarias para eliminar el equipo con el teamId proporcionado.
    console.log(`Eliminar equipo con ID: ${teamId}`);
  };

  const data: CardData[] = [
    {
      id: 1,
      position: 1,
      name: "Recursos Humanos",
      description: "1 Team Leader",
      empleados: "4 Empleados",
    },
    {
      id: 2,
      position: 2,
      name: "Backend",
      description: "1 Team Leader",
      empleados: "4 Empleados",
    },
    {
      id: 3,
      position: 3,
      name: "Marketing",
      description: "1 Team Leader",
      empleados: "4 Empleados",
    },
    {
      id: 4,
      position: 4,
      name: "Digital Team",
      description: "1 Team Leader",
      empleados: "4 Empleados",
    },
    {
      id: 5,
      position: 5,
      name: "Front end",
      description: "1 Team Leader",
      empleados: "4 Empleados",
    },
    {
      id: 6,
      position: 6,
      name: "UX/UI Design",
      description: "1 Team Leader",
      empleados: "4 Empleados",
    },
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
      "Backend": (
        <img
          src={Backen}
          alt="Base de datos"
          style={{ filter: "brightness(0) invert(1)", width: "32px" }}
        />
      ),
      Marketing: (
        <img
          src={Megaphone}
          alt="Megaphono"
          style={{ filter: "brightness(0) invert(1)", width: "32px" }}
        />
      ),
      "Digital Team": (
        <img
          src={Vector}
          alt="Vector"
          style={{ filter: "brightness(0) invert(1)", width: "22px" }}
        />
      ),
      "Front end": (
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

  return (
    <div className="conte-equipos">
      <div className="equipos-encabezado">
        <h2 className="textCardTeam-equipos font-inter">Equipos</h2>
        <div className="cont-etiquetas">
        <div className="equipo-etiqueta">
          <div className="equipo-equipo">Equipo</div>
          <div className="equipo-number">9</div>
        </div>
        <div className="empleados-etiqueta">
          <div className="empleado-empleado">Empleados</div>
          <div className="empleado-number">43</div>
        </div>
        </div>
      </div>
      <SearchEquipos
       showSelect={true}
       handleSearch={handleSearch}
       showButton={true}
       label="Buscar"
       />
      <div className="contenedorCard-equipos">
        <div className="cards-container">
          {data.map((item) => (
            <div key={item.id} className="item-team-equipos">
              <div className="hr-equipos">{getIconByTitle(item.name)}</div>
              <Card
                className={`mb-6 card-team-equipos card-${item.id}`}
                onMouseEnter={() => handleCardMouseEnter(item.id)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="card-content-equipos">
                  <Card.Meta
                    title={
                      <>
                        <p className="item-name-equipos font-inter">{item.name}</p>
                      </>
                    }
                    description={
                      <>
                        <span className="item-description-equipos">
                          {item.description}
                        </span>
                        <br />
                        <span className="item-empleados-equipos">{item.empleados}</span>
                      </>
                    }
                  />
                </div>
                {hoveredCard === item.id && (
                  <div className="footer-card-equipos">
                    <Link to="/user/ranking-equipos" className="edit-cont-equipos">
                      <div className="edit-icon">
                        <EditOutlined />
                      </div>
                      <div className="edit-edit">Editar</div>
                    </Link>
                    <BtnDelet
                      key={item.id}
                      onDelete={() => handleDelete(item.id)}
                    />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrearEquiposDesktop;