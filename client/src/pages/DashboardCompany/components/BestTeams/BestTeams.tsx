import React, { useRef, useState } from "react";
import {
  RightCircleFilled,
  EditOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestTeams.css";
import People from "./img/People_Group.png";
import Backen from "./img/Database.png";
import Megaphone from "./img/Megaphone_2.png";
import Vector from "./img/Vector.png";
import Front from "./img/front.png";
import Ux from "./img/Draw_Square.png";
import BtnDelet from "../Btn/BtnDelet/BtnDelet";

interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
  empleados: string;
}

const BestTeams: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
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
      name: "Backend Developers",
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
      name: "Front end Developers",
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

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

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

  return (
    <>
      <h2 className="textCardTeam font-inter">Por equipos</h2>
      <div className="contenedorCardTeam">
        <Slider
          ref={sliderRef}
          slidesToShow={3.5}
          slidesToScroll={1}
          dots={false}
          infinite={true}
          initialSlide={0}
        >
          {data.map((item) => (
            <motion.div key={item.id} className="item-team">
              <div className="hr">{getIconByTitle(item.name)}</div>
              <Card
                className={`mb-6 card-team card-${item.id}`}
                onMouseEnter={() => handleCardMouseEnter(item.id)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="card-content-team">
                  <Card.Meta
                    title={
                      <>
                        <p className="item-name font-inter">{item.name}</p>
                      </>
                    }
                    description={
                      <>
                        <span className="item-description">
                          {item.description}
                        </span>
                        <br />
                        <span className="item-empleados">{item.empleados}</span>
                      </>
                    }
                  />
                </div>
                {hoveredCard === item.id && (
                  <div className="footer-card">
                    <Link to="ranking-equipos" className="edit-cont">
                      <div className="edit-icon">
                        <EditOutlined />
                      </div>
                      <div className="edit-edit">Editar</div>
                    </Link>
                    <BtnDelet onDelete={() => handleDelete(item.id)}  />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </Slider>
      </div>

      <CustomNextArrow onClick={handleNext} />
    </>
  );
};

const CustomNextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="next-arrow flecha-team" onClick={onClick}>
    <RightCircleFilled />
  </div>
);

export default BestTeams;
