import { useParams } from 'react-router-dom';
import { HeadScreen } from '../../Components';

const UserProfile = () => {
  const { id } = useParams();

  return (
    <>
      <HeadScreen title='Perfil de Usuario' />
      <div>
        <h1>Perfil del usuario</h1>
        <p>Id del usuario: {id}</p>
      </div>
    </>
  );
};

export default UserProfile;
