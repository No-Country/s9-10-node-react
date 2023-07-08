import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function SocialMediaScreen() {
  return (
    <>
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
