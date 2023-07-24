import { Modal } from 'antd';
import { useScreenSize } from '../../hooks';

interface SuccessModalProps {
  hasOpened: boolean;
  setHasOpened: (value: boolean) => void;
  title: string;
  content: string;
  image?: string;
}

function SuccessModal({
  hasOpened,
  setHasOpened,
  title,
  content,
  image = '../../../public/success-image1.png',
}: SuccessModalProps) {
  const { width } = useScreenSize();

  return (
    <Modal
      title=''
      closable={false}
      open={hasOpened}
      width={width < 768 ? '21.625rem' : '34.3125rem'}
      footer={null}
    >
      <div className='flex h-[12.1875rem] items-center'>
        <img
          src={image}
          alt='success'
          className='w-[6.5rem] h-24 object-cover'
        />
        <div className='flex flex-col'>
          <p
            className={`text-[#08212B] text-sm font-bold leading-[1.3125rem] tracking-[-0.01925rem]`}
          >
            {title}
          </p>
          <p
            className={`text-[#08212B] text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] w-[12.125rem]`}
          >
            {content}
          </p>
          <button onClick={() => setHasOpened(!hasOpened)}>Aceptar</button>
        </div>
      </div>
    </Modal>
  );
}

export default SuccessModal;
