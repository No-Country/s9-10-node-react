import { HeadScreen } from '../../Components';
import BestOfMonth from '../../Components/BestOfMonth/BestOfMonth';
import { useState, useEffect } from 'react';

const RankingGeneral = () => {
  const [bestPersons, setBestPersons] = useState([]);

  useEffect(() => {
    fetch('/RankingRol.json')
      .then((response) => response.json())
      .then((data) => setBestPersons(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <HeadScreen title="Ranking Roles" />
      <div className="">
        <BestOfMonth bestPersons={bestPersons} />
      </div>
    </>
  );
};

export default RankingGeneral;
