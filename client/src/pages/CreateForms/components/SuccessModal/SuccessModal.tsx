import { Modal } from 'antd';
import { useScreenSize } from '../../../../hooks';
import { useCreateForms } from '../../hooks';

interface SuccessModalProps {
  title: string;
  content: string;
  image?: string;
}

function SuccessModal({
  title,
  content,
  image = '../../../public/success-image1.png',
}: SuccessModalProps) {
  const { width } = useScreenSize();
  const { showSuccessModal, setShowSuccessModal } = useCreateForms();

  return (
    <Modal
      title=''
      closable={false}
      open={showSuccessModal}
      width={width < 768 ? '21.625rem' : '42rem'}
      footer={null}
    >
      <div className='flex h-[12.1875rem] items-center gap-[0.37rem] md:gap-[0.56rem] md:h-[19rem]'>
        <img
          src={image}
          alt='success'
          className='w-[6.5rem] h-24 object-cover mt-4 md:w-[13.8125rem] md:h-[10.6875rem]'
        />
        <div className='flex flex-col'>
          <p
            className={`text-[#08212B] text-sm font-bold leading-[1.3125rem] tracking-[-0.01925rem] md:text-[1.375rem] md:leading-[2.0625rem]
            md:tracking-[-0.03025rem]`}
          >
            {title}
          </p>
          <p
            className={`text-[#08212B] text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] w-[12.125rem] ml-2 mt-6 md:text-lg
            md:w-[22rem] md:ml-0 md:mt-8`}
          >
            {content}
          </p>
          <button
            onClick={() => setShowSuccessModal(!showSuccessModal)}
            className={`flex items-center justify-center w-[6.375rem] h-8 rounded-[6.25rem] bg-[#73C36F] shadow-custom text-white
            mt-6 self-end md:w-[11.25rem] md:h-10 md:mt-14 md:text-[0.9375rem] leading-[1.94863rem] tracking-[-0.0075rem]
            md:tracking-[-0.00938rem]`}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SuccessModal;
