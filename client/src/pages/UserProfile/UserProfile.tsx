import { useParams } from "react-router-dom";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <ProfileInfo/>
    </div>
  );
};

export default UserProfile;
