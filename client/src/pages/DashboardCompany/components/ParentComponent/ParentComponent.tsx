import React from 'react';
import TopMonthDesktop from '../TopMonthDesktop/TopMonthDesktop';
import TopMonthMobile from '../TopMonthMobile/TopMonthMobile';
import { useScreenSize } from '../../../../hooks';

const ParentComponent: React.FC = () => {
  const { width } = useScreenSize();

  return <div>{width < 768 ? <TopMonthMobile /> : <TopMonthDesktop />}</div>;
};

export default ParentComponent;
