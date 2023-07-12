import React, { useEffect, useState } from "react"; 
import BestTeams from "../BestTeams/BestTeams";
import BestTeamsMobile from '../BestTeamsMobile/BestTeamsMobile';

const ParentBest: React.FC = () => {
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
        <BestTeamsMobile />
      ) : (
        <BestTeams />
      )}
    </div>
  );
};

export default ParentBest;