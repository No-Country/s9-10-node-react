import per1 from '../../../public/per1.png'
import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const ProfileInfo = () => {

    const profileData = {
        image: per1,
        name: 'Estela Hursen',
        skills: ['Frontend', 'Backend'],
    }

    return (
        <div className='border-b-2 rounded-b-2xl p-5 flex flex-col gap-y-5 items-center bg-azulClaroBg3 md:h-screen'>
            <div className='flex gap-x-5 items-center md:flex-col md:mb-10'>
                <img src={profileData.image} alt="" className='w-20 h-20 md:h-60 md:w-60 md:mb-10'/>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-xl md:text-2xl font-bold md:text-center md:mb-2'>{profileData.name}</p>
                    <p className='text-xl text-center hidden md:block'>Roles:</p>
                    <div className='flex gap-x-4'>
                        {profileData.skills.map(skill => {
                            return(
                                <p className='bg-azulClaroBg border border-azulPrimary text-azulPrimary px-4 rounded-2xl text-sm md:text-lg'>{skill}</p>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Ingresar en este div tus botones morados */}
            <div className='flex gap-x-2 text-white md:hidden'>
                <p className='bg-violetPrimary px-5 py-1 rounded-3xl'>Presentacion</p>
                <p className='bg-violetPrimary px-5 py-1 rounded-3xl'>Portfolio</p>
                <p className='bg-violetPrimary px-5 py-1 rounded-3xl'>Curriculum</p>
            </div>


            <div className='hidden md:flex gap-x-4'>
                <Link to={'https://github.com'} target='_blank' className='text-2xl bg-blueQuaternary text-white p-2 rounded-full'>
                    <AiFillGithub/>
                </Link>
                <Link to={'https://www.instagram.com'} target='_blank' className='text-2xl bg-blueQuaternary text-white p-2 rounded-full'>
                    <BsInstagram/>
                </Link>
            </div>
        </div>
    )
}

export default ProfileInfo
