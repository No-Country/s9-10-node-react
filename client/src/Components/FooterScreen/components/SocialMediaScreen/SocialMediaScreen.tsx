import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useLocationState, useScreenSize } from '../../../../hooks';

function SocialMediaScreen() {
  const { width } = useScreenSize();
  const { isPathname } = useLocationState('/');

  return (
    <>
      {isPathname && width >= 768 && (
        <div className='flex flex-row w-full h-52 items-center justify-between'>
          <div className='flex flex-row gap-8 items-center justify-center ml-40'>
            <div className='flex w-20 h-20 rounded-full bg-red-200'></div>
            <h2 className=' text-[40px] font-bold text-black leading-[150%] tracking-tight'>
              Logo
            </h2>
          </div>
          <div className='flex flex-col w-72 mr-48'>
            <Link
              to='/'
              className='text-[22px] font-semibold text-black leading-[150%] tracking-tight'
            >
              Términos y condiciones
            </Link>
            <Link
              to='/'
              className='text-[22px] font-semibold text-black leading-[150%] tracking-tight'
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      )}
      <div className='flex flex-row w-44 h-11 justify-between items-center'>
        <Link to='https://www.facebook.com' target='_blank' rel='noreferrer'>
          <FacebookFilled style={{ color: '#1877F2', fontSize: '44px' }} />
        </Link>
        <Link to='https://www.instagram.com' target='_blank' rel='noreferrer'>
          <InstagramFilled style={{ color: '#CB4374', fontSize: '44px' }} />
        </Link>
        <Link to='https://www.linkedin.com' target='_blank' rel='noreferrer'>
          <LinkedinFilled style={{ color: '#0A66C2', fontSize: '44px' }} />
        </Link>
      </div>
      <p>Feedback - Copyright</p>
    </>
  );
}

export default SocialMediaScreen;
