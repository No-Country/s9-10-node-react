import {
  ApartmentOutlined,
  DotChartOutlined,
  ProfileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function TabBottomScreen() {
  return (
    <div className='grid grid-cols-4 w-full items-center justify-around'>
      <Link to='/' className='flex flex-col justify-center items-center'>
        <DotChartOutlined />
        <p>Dashboard</p>
      </Link>
      <Link to='/' className='flex flex-col justify-center items-center'>
        <ApartmentOutlined />
        <p>Roles</p>
      </Link>
      <Link to='/' className='flex flex-col justify-center items-center'>
        <TeamOutlined />
        <p>Equipos</p>
      </Link>
      <Link to='/' className='flex flex-col justify-center items-center'>
        <ProfileOutlined />
        <p>Formularios</p>
      </Link>
    </div>
  );
}

export default TabBottomScreen;
