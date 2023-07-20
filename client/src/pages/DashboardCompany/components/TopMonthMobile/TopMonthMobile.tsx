import React, { useRef } from "react";
import { StarOutlined, RightCircleFilled } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TopMonthMobile.css'

const { Meta } = Card;

interface CardData {
  id: number;
  position: number;
  name: string;
  description: string;
}

const TopMonthMobile: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const data: CardData[] = [
    {
      id: 1,
      position: 1,
      name: "Apellido, N.",
      description: "Rol"
    },
    {
      id: 2,
      position: 2,
      name: "Apellido, N.",
      description: "Rol"
    },
    {
      id: 3,
      position: 3,
      name: "Apellido, N.",
      description: "Rol"
    },
    {
      id: 4,
      position: 4,
      name: "Apellido, N.",
      description: "Rol"
    },
    {
      id: 5,
      position: 5,
      name: "Apellido, N.",
      description: "Rol"
    },
    {
      id: 6,
      position: 6,
      name: "Apellido, N.",
      description: "Rol"
    }
  ];

  
  
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <h2 className="textCard-mobile font-inter">Mejores del mes</h2>
      <div className="contenedorCard-mobile">
        <Slider
          ref={sliderRef}
          slidesToShow={3.5}
          slidesToScroll={1}
          dots={false}
          infinite={true}
          initialSlide={0}
        >
          {data.map((item) => (
            <motion.div key={item.id} className="item-mobile">
              <Card className={`mb-6 card-mobile card-${item.id}`}>
                <div className="card-header-mobile">
                  <h3 className="text-base font-inter font-medium leading-7 tracking-tight text-center flex items-center">
                    <StarOutlined className="mr-2" />
                    {item.position}°pt.
                  </h3>
                </div>
                <Meta
                  avatar={
                    <div className="avatar-container-mobile">
                      <Avatar
                        src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                        className="avatar-mobile"
                      />
                    </div>
                  }
                />
                <div className="  ">
                  <p className="font-inter name-mobile">{item.name}</p>
                  <p className="font-inter description-mobile">{item.description}</p>
                </div>
                <p className="font-inter score-mobile">Promedio:</p>
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
  <div className="next-arrow flecha-mobile" onClick={onClick}>
    <RightCircleFilled />
  </div>
);

export default TopMonthMobile;
