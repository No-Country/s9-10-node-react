import React, { useRef } from "react";
import { RightCircleFilled, TeamOutlined } from "@ant-design/icons";
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
  empleados: string;
}

const BestTeams: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

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
              <div className="hr"><TeamOutlined /></div>
              <Card className={`mb-6 card-team card-${item.id}`}>
                <div className="card-content-team">
                  
                  <Card.Meta 
                  
                  title={
                    <>
                    <p className="item-name font-inter">{item.name}</p>
                    </>
                    
                  }
                  description={
                    <>
                      <span className="item-description">{item.description}</span>
                      <br />
                      <span className="item-empleados">{item.empleados}</span>
                    </>
                  }
                />
                </div>
                <div className="footer-card"></div>
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
