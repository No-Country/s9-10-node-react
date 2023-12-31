import { Forms } from '../../models/cards';
import { useForms } from '../../hooks';
import { Loader } from '../../../../Components';

interface CardProps {
  card: Forms;
}

function Card({ card }: CardProps) {
  const { handleDeleteForm, isLoading } = useForms();

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`group relative flex flex-col items-center justify-center w-40 h-40 rounded-[1.25rem] bg-[#E9ECFC]
      md:min-w-[14rem] md:min-h-[16.5rem] md:justify-between md:hover:flex-row md:hover:min-w-[19.5rem] transition-all duration-300
      md:group-hover:justify-center md:mx-6 md:first-of-type:ml-0`}
      >
        <div
          className={`absolute flex justify-center items-center top-0 left-0 w-full h-[2.10525rem] bg-[#7A8CEB] rounded-t-[1.25rem]
        md:h-14`}
        >
          <h2
            className={`text-white text-base font-medium leading-normal tracking-[-0.022rem] uppercase md:text-2xl md:leading-9
          md:tracking-[-0.033rem]`}
          >
            {card?.rolesAllowed[0]}
          </h2>
        </div>
        <div
          className={`w-[4.2105rem] h-[4.2105rem] rounded-full bg-[#7A8CEB] mt-9 md:w-24 md:h-24 md:mt-[4.5rem]
      md:group-hover:mt-0 md:group-hover:ml-5`}
        />
        <div className='w-full md:w-[10.5rem] ml-4 md:self-start md:ml-5 md:group-hover:self-center'>
          <h3
            className={`text-black text-sm font-medium leading-[1.3125rem] tracking-[-0.01925rem] md:text-xl
        md:leading-[1.875rem] md:tracking-[-0.0275rem]`}
          >
            {`${card?.title?.slice(0, 20)}...`}
          </h3>
          <p
            className={`text-black text-[0.625rem] font-light leading-[0.9375rem] tracking-[-0.01375rem] md:text-base
        md:leading-6 md:tracking-[-0.022rem]`}
          >
            {`${card?.description?.slice(0, 20)}...`}
          </p>
          <p
            className={`text-black text-[0.5rem] font-light leading-[0.75rem] tracking-[-0.011rem]
        md:text-base md:leading-6 md:tracking-[-0.022rem]`}
          >
            {card?.createdBy}
          </p>
        </div>
        <div
          className={`hidden group-hover:flex w-full md:h-[3.6rem] items-center justify-around absolute bottom-0 right-0
        bg-[#7a8ceb8a] rounded-b-[1.25rem]`}
        >
          <button
            className={`text-[#020202] text-xs font-normal flex flex-col justify-center items-center leading-[1.125rem] 
          tracking-[-0.0165rem]`}
            onClick={() => handleDeleteForm(card?._id)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='28'
              viewBox='0 0 35 28'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23.2375 10.5H11.3875C10.7334 10.5 10.2031 10.9351 10.2031 11.4718V19.25C10.2031 20.8608 11.7946 22.1667 13.7578 22.1667H20.8672C21.8099 22.1667 22.7141 21.8594 23.3807 21.3124C24.0474 20.7654 24.4219 20.0235 24.4219 19.25V11.4718C24.4219 10.9351 23.8916 10.5 23.2375 10.5Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.5781 8.16644L21.4274 7.92027C20.6481 6.64108 19.0547 5.83301 17.3118 5.83301C15.5688 5.83301 13.9755 6.64108 13.1962 7.92027L13.0469 8.16644H21.5781Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15.6922 14.3878C15.6922 13.9736 15.3564 13.6378 14.9422 13.6378C14.528 13.6378 14.1922 13.9736 14.1922 14.3878H15.6922ZM14.1922 18.2764C14.1922 18.6906 14.528 19.0264 14.9422 19.0264C15.3564 19.0264 15.6922 18.6906 15.6922 18.2764H14.1922ZM20.4328 14.3878C20.4328 13.9736 20.097 13.6378 19.6828 13.6378C19.2686 13.6378 18.9328 13.9736 18.9328 14.3878H20.4328ZM18.9328 18.2764C18.9328 18.6906 19.2686 19.0264 19.6828 19.0264C20.097 19.0264 20.4328 18.6906 20.4328 18.2764H18.9328ZM21.5781 7.41602C21.1639 7.41602 20.8281 7.7518 20.8281 8.16602C20.8281 8.58023 21.1639 8.91602 21.5781 8.91602V7.41602ZM24.4219 8.91602C24.8361 8.91602 25.1719 8.58023 25.1719 8.16602C25.1719 7.7518 24.8361 7.41602 24.4219 7.41602V8.91602ZM13.0469 8.91602C13.4611 8.91602 13.7969 8.58023 13.7969 8.16602C13.7969 7.7518 13.4611 7.41602 13.0469 7.41602V8.91602ZM10.2031 7.41602C9.78891 7.41602 9.45312 7.7518 9.45312 8.16602C9.45312 8.58023 9.78891 8.91602 10.2031 8.91602V7.41602ZM14.1922 14.3878V18.2764H15.6922V14.3878H14.1922ZM18.9328 14.3878V18.2764H20.4328V14.3878H18.9328ZM21.5781 8.91602H24.4219V7.41602H21.5781V8.91602ZM13.0469 7.41602H10.2031V8.91602H13.0469V7.41602Z'
                fill='black'
              />
            </svg>
            Eliminar
          </button>
          <button
            className={`text-[#020202] text-xs font-normal flex flex-col justify-center items-center leading-[1.125rem] 
          tracking-[-0.0165rem]`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='24'
              viewBox='0 0 30 24'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.6208 14.248C21.6208 15.8651 20.0231 17.176 18.0523 17.176H9.131C7.16017 17.176 5.5625 15.8651 5.5625 14.248V6.928C5.5625 5.31091 7.16017 4 9.131 4H18.0523C20.0231 4 21.6208 5.31091 21.6208 6.928V14.248Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12.5728 20H21.494C23.4648 20 25.0625 18.689 25.0625 17.072V9.75195'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Duplicar
          </button>
          <button
            className={`text-[#020202] text-xs font-normal flex flex-col justify-center items-center leading-[1.125rem] 
          tracking-[-0.0165rem]`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='24'
              viewBox='0 0 30 24'
              fill='none'
            >
              <path
                d='M15.7912 8.01383C16.0807 7.71752 16.0751 7.24268 15.7788 6.95324C15.4825 6.66381 15.0076 6.66939 14.7182 6.9657L15.7912 8.01383ZM8.06653 14.8488L8.58358 15.3921C8.59018 15.3858 8.59668 15.3794 8.60305 15.3728L8.06653 14.8488ZM7.85813 15.2668L7.11048 15.2073C7.11003 15.2131 7.10964 15.2188 7.10932 15.2245L7.85813 15.2668ZM7.6875 18.2898L6.93869 18.2475C6.93613 18.2928 6.9377 18.3383 6.94336 18.3833L7.6875 18.2898ZM8.64666 18.9768L8.66678 19.7265C8.70809 19.7254 8.74925 19.7209 8.78982 19.713L8.64666 18.9768ZM12.3029 18.2658L12.4461 19.002L12.4559 19L12.3029 18.2658ZM12.7721 18.0218L13.3011 18.5536L13.3085 18.546L12.7721 18.0218ZM20.6698 11.014C20.9593 10.7177 20.9538 10.2429 20.6576 9.95339C20.3614 9.66387 19.8865 9.66932 19.597 9.96555L20.6698 11.014ZM14.722 6.96551C14.4325 7.26172 14.4379 7.73657 14.7341 8.0261C15.0303 8.31564 15.5052 8.31023 15.7947 8.01402L14.722 6.96551ZM17.1938 5.50976L17.7301 6.03402C17.7415 6.02233 17.7525 6.01028 17.7632 5.99787L17.1938 5.50976ZM19.1791 5.18976L19.6021 4.57042C19.5783 4.55419 19.5536 4.53933 19.5281 4.52594L19.1791 5.18976ZM21.9054 7.05176L22.3817 6.47239C22.3645 6.45829 22.3468 6.44495 22.3284 6.43242L21.9054 7.05176ZM22.3161 7.87264L23.0661 7.87766V7.87766L22.3161 7.87264ZM21.8945 8.68976L21.4245 8.1053C21.4013 8.12396 21.3792 8.14398 21.3584 8.16526L21.8945 8.68976ZM19.5973 9.96526C19.3076 10.2613 19.3128 10.7362 19.6089 11.0259C19.9049 11.3155 20.3798 11.3103 20.6695 11.0143L19.5973 9.96526ZM15.9962 7.35502C15.9218 6.94754 15.5311 6.67755 15.1236 6.75197C14.7162 6.82639 14.4462 7.21704 14.5206 7.62451L15.9962 7.35502ZM20.2165 11.2351C20.6281 11.1893 20.9247 10.8183 20.8788 10.4067C20.8329 9.995 20.4619 9.69849 20.0503 9.74438L20.2165 11.2351ZM14.7182 6.9657L7.53001 14.3247L8.60305 15.3728L15.7912 8.01383L14.7182 6.9657ZM7.54949 14.3055C7.30677 14.5365 7.13885 14.8504 7.11048 15.2073L8.60577 15.3262C8.60398 15.3487 8.59795 15.3666 8.59201 15.3785C8.58621 15.3901 8.58167 15.3939 8.58358 15.3921L7.54949 14.3055ZM7.10932 15.2245L6.93869 18.2475L8.43631 18.332L8.60693 15.309L7.10932 15.2245ZM6.94336 18.3833C7.05582 19.278 7.91541 19.7467 8.66678 19.7265L8.62653 18.227C8.53733 18.2294 8.47211 18.2023 8.43893 18.1785C8.40605 18.155 8.42638 18.1543 8.43164 18.1962L6.94336 18.3833ZM8.78982 19.713L12.4461 19.002L12.1597 17.5296L8.50349 18.2406L8.78982 19.713ZM12.4559 19C12.767 18.9352 13.0667 18.7866 13.301 18.5535L12.2432 17.49C12.2359 17.4973 12.2069 17.5197 12.1499 17.5315L12.4559 19ZM13.3085 18.546L20.6698 11.014L19.597 9.96555L12.2357 17.4976L13.3085 18.546ZM15.7947 8.01402L17.7301 6.03402L16.6574 4.98551L14.722 6.96551L15.7947 8.01402ZM17.7632 5.99787C17.9622 5.7657 18.4466 5.65196 18.83 5.85359L19.5281 4.52594C18.5927 4.03408 17.3265 4.20251 16.6243 5.02166L17.7632 5.99787ZM18.7561 5.8091L21.4824 7.6711L22.3284 6.43242L19.6021 4.57042L18.7561 5.8091ZM21.4292 7.63114C21.542 7.72392 21.5665 7.81391 21.5661 7.86762L23.0661 7.87766C23.0698 7.31613 22.7985 6.81505 22.3817 6.47239L21.4292 7.63114ZM21.5661 7.86762C21.5657 7.9216 21.5398 8.01254 21.4245 8.1053L22.3645 9.27423C22.7846 8.93635 23.0623 8.43892 23.0661 7.87766L21.5661 7.86762ZM21.3584 8.16526L19.5973 9.96526L20.6695 11.0143L22.4306 9.21427L21.3584 8.16526ZM14.5206 7.62451C14.9636 10.0502 17.5984 11.527 20.2165 11.2351L20.0503 9.74438C17.9654 9.97682 16.2565 8.78054 15.9962 7.35502L14.5206 7.62451Z'
                fill='black'
              />
            </svg>
            Editar
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
