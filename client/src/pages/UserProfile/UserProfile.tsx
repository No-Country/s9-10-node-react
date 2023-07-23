import { useParams } from 'react-router-dom';
import { HeadScreen } from '../../Components';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';

const UserProfile = () => {
  const { id } = useParams();

  return (
    <>
      <HeadScreen title='Perfil de Usuario' />
      <div>
        <ProfileInfo />
      </div>
    </>
  );
};

export default UserProfile;
