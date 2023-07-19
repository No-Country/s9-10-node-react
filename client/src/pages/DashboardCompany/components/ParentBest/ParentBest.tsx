import React from 'react';
import BestTeams from '../BestTeams/BestTeams';
import BestTeamsMobile from '../BestTeamsMobile/BestTeamsMobile';
import { useScreenSize } from '../../../../hooks';

const ParentBest: React.FC = () => {
  const { width } = useScreenSize();

  return <div>{width < 768 ? <BestTeamsMobile /> : <BestTeams />}</div>;
};

export default ParentBest;
