import React, { useRef } from "react";
import { StarOutlined, RightCircleFilled } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopMonthDesktop.css";

const { Meta } = Card;

interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
}

const TopMonthDesktop: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const data: CardData[] = [
    {
      id: 1,
      position: 1,
      name: "Owen, Celina.",
      description: "Diseño UX/UI"
    },
    {
      id: 2,
      position: 2,
      name: "Marta, Alcáraz",
      description: "Backend"
    },
    {
      id: 3,
      position: 3,
      name: "Diego, Fernadez",
      description: "Frontend"
    },
    {
      id: 4,
      position: 4,
      name: "Pablo, quiroz.",
      description: "Diseño UX/UI"
    },
    {
      id: 5,
      position: 5,
      name: "Yohan, Bello",
      description: "Backend"
    },
    {
      id: 6,
      position: 6,
      name: "Henry, Ramirez",
      description: "Frontend"
    }
  ];

  
  
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      
      <h2 className="textCard">Mejores del mes</h2>
      <div className="contenedorCard">
        <Slider
          ref={sliderRef}
          slidesToShow={3.5}
          slidesToScroll={1}
          dots={false}
          infinite={true}
          initialSlide={0}
        >
          {data.map((item) => (
            <motion.div key={item.id} className="item">
              <Card className={`mb-6 card card-${item.id}`}>
                <div className="card-header">
                  <h3 className="text-base font-inter font-medium leading-7 tracking-tight text-center flex items-center">
                    <StarOutlined className="mr-2" />
                    {item.position}° puesto
                  </h3>
                </div>
                <Meta
                  avatar={
                    <div className="avatar-container">
                      <Avatar
                        src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                        className="avatar"
                      />
                    </div>
                  }
                />
                <div className="card-content">
                  <p className="font-inter name">{item.name}</p>
                  <p className="font-inter description">{item.description}</p>
                </div>
                {/* <p className="font-inter score">Promedio:</p> */}
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
  <div className="next-arrow flecha" onClick={onClick}>
    <RightCircleFilled />
  </div>
);

export default TopMonthDesktop;


