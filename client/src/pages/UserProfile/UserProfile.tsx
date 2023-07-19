import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Perfil del usuario</h1>
      <p>Id del usuario: {id}</p>
    </div>
  );
};

export default UserProfile;
