import { HeadScreen } from '../../Components';
import BestOfMonth from '../../Components/BestOfMonth/BestOfMonth';
import { useState, useEffect } from 'react';

const RankingTeam = () => {
  const [bestPersons, setBestPersons] = useState([]);

  useEffect(() => {
    fetch('/RankingTeam.json')
      .then((response) => response.json())
      .then((data) => setBestPersons(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <HeadScreen title="Ranking Equipos" />
      <div className="">
        <BestOfMonth bestPersons={bestPersons} />
      </div>
    </>
  );
};

export default RankingTeam;
