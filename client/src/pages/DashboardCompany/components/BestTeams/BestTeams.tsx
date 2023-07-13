import React, { useRef } from "react";
import { RightCircleFilled } from "@ant-design/icons";
import { Card } from "antd";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestTeams.css";

interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
}

const BestTeams: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const data: CardData[] = [
    {
      id: 1,
      position: 1,
      name: "Equipo 1",
      description: "Nombre"
    },
    {
      id: 2,
      position: 2,
      name: "Equipo 2",
      description: "Nombre"
    },
    {
      id: 3,
      position: 3,
      name: "Equipo 3",
      description: "Nombre"
    },
    {
      id: 4,
      position: 4,
      name: "Equipo 4",
      description: "Nombre"
    },
    {
      id: 5,
      position: 5,
      name: "Equipo 5",
      description: "Nombre"
    },
    {
      id: 6,
      position: 6,
      name: "Equipo 6",
      description: "Nombre"
    }
  ];

 
  
  const handleNext = () => {
    sliderRef.current?.slickNext();
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
              <Card className={`mb-6 card-team card-${item.id}`}>
                <div className="card-content-team">
                  <Card.Meta title={item.name} description={item.description} />
                </div>
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
