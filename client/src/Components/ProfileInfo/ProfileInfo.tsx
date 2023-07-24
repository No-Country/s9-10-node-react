import per1 from '../../../public/per1.png';
import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
  const profileData = {
    image: per1,
    name: 'Estela Hursen',
    skills: ['Frontend', 'Backend'],
  };

  return (
    <div className="flex flex-col items-center px-5 border-b-2 rounded-br-3xl py-14 gap-y-5 bg-azulClaroBg3 md:h-full md:w-80">
      <div className="flex items-center gap-x-5 md:flex-col md:mb-10">
        <img
          src={profileData.image}
          alt=""
          className="w-20 h-20 rounded-full md:h-60 md:w-60 md:mb-10 md:rounded-none"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-bold md:text-2xl md:text-center md:mb-2">
            {profileData.name}
          </p>
          <p className="hidden text-xl text-center md:block">Roles:</p>
          <div className="flex gap-x-4">
            {profileData.skills.map((skill) => {
              return (
                <p className="px-4 text-sm border bg-azulClaroBg2 border-bluePrimary text-bluePrimary rounded-2xl md:text-lg">
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ingresar en este div tus botones morados */}
      <div className="flex text-white gap-x-2 md:hidden">
        <p className="px-5 py-1 bg-violetPrimary rounded-3xl">Presentacion</p>
        <p className="px-5 py-1 bg-violetPrimary rounded-3xl">Portfolio</p>
        <p className="px-5 py-1 bg-violetPrimary rounded-3xl">Curriculum</p>
      </div>

      <div className="hidden md:flex gap-x-4">
        <Link
          to={'https://github.com'}
          target="_blank"
          className="p-2 -ml-1 text-2xl text-white rounded-full bg-blueQuaternary"
        >
          <AiFillGithub />
        </Link>
        <Link
          to={'https://www.instagram.com'}
          target="_blank"
          className="p-2 text-2xl text-white rounded-full bg-blueQuaternary"
        >
          <BsInstagram />
        </Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
