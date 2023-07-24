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
          <div className="hidden md:flex justify-between px-6 py-4 text-white bg-violetQuaternary">
            <h1 className="text-4xl font-medium text-black">Perfil</h1>
            <BtnLinkProfilePresent/>
          </div>
          <div className="px-6 pt-8">
            <div>
              <h1 className="text-2xl font-semibold">Datos de contacto</h1>
              <div className="flex flex-col md:flex-row gap-y-3 mt-3 gap-x-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5">
                <ProgressBar text={'Trabajo en equipo'} value={30} />
                <ProgressBar text="Compromiso" value={80} />
                <ProgressBar text="Softwares" value={50} />
                <ProgressBar text="Liderazgo" value={10} />
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
