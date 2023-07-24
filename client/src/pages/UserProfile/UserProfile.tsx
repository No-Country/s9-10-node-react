import { HeadScreen } from '../../Components';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
import { AcclaimScreen } from './components';
import { CiMail } from 'react-icons/ci';
import { BiPhoneCall } from 'react-icons/bi';
import CopyToClipboard from './components/CopyToClipboard/CopyToClipboard';
import ProgressBar from '../../Components/ProgressBar.tsx/ProgressBar';
import BtnLinkProfilePresent from '../../Components/Buttons/BtnLinkProfilePresent';

const UserProfile = () => {
  return (
    <>
      <HeadScreen title="Perfil de Usuario" />
      <div className="flex flex-col md:flex-row h-full">
        <div>
          <ProfileInfo />
        </div>
        <div className="w-full">
          <div className="hidden md:flex justify-between px-8 py-4 text-white bg-violetQuaternary">
            <h1 className="text-4xl font-medium text-black">Perfil</h1>
            <BtnLinkProfilePresent/>
          </div>
          <div className="px-8 md:px-14 py-8">
            <div>
              <h1 className="text-2xl font-semibold">Datos de contacto</h1>
              <div className="flex justify-between pt-6">
                <CopyToClipboard text="estela.hursen@mail.com">
                  <CiMail />
                </CopyToClipboard>
                <CopyToClipboard text="12 3455 4567">
                  <BiPhoneCall />
                </CopyToClipboard>
              </div>
            </div>
            <div>
              <h1 className="pt-8 text-2xl font-semibold">
                Descubre tu rendimiento
              </h1>
              <div className="flex pt-6 gap-7">
                <ProgressBar text={'Trabajo en equipo'} value={80} />
                <ProgressBar text="Compromiso" value={80} />
                <ProgressBar text="Softwares" value={80} />
                <ProgressBar text="Liderazgo" value={80} />
              </div>
            </div>
            <div>
              <AcclaimScreen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
