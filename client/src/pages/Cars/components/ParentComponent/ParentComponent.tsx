import React, { useEffect, useState } from "react";
import TopMonthDesktop from "../TopMonthDesktop/TopMonthDesktop";
import TopMonthMobile from "../TopMonthMobile/TopMonthMobile";

const ParentComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <TopMonthMobile />
      ) : (
        <TopMonthDesktop />
      )}
    </div>
  );
};

export default ParentComponent;
