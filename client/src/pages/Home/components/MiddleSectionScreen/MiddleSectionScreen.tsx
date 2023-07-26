function MiddleSectionScreen() {
  return (
    <article
      className={`flex flex-col md:flex-row justify-center items-center w-full h-[47.5rem] md:h-[736px] mt-6 
      md:mt-20 gap-8 md:gap-48 bg-[#185D81]`}
    >
      <div className='flex flex-col justify-center items-center w-full md:w-min'>
        <h2
          className={`text-2xl md:text-6xl font-bold text-white leading-7 md:leading-[5.625rem] tracking-tight md:tracking-[-0.0825rem] 
          text-center md:text-left w-[339px] md:w-[34rem]`}
        >
          Promueva la <span className='text-[#73C36F]'>retroalimentación</span>
        </h2>
        <img
          src='/home5.png'
          alt='programación'
          loading='lazy'
          className='w-[12.38844rem] h-[13.06469rem] md:flex mt-10 md:self-start object-contain md:w-[25.5rem] md:h-[25.5rem] md:mt-8'
        />
      </div>
      <div className='flex justify-center items-center mt-6 md:mt-[78px] gap-7 md:gap-14'>
        <div className='flex flex-col justify-center items-center w-[52px] h-min'>
          <div
            className={`w-[52px] md:w-[88px] h-[52px] md:h-[88px] rounded-full mb-14 md:mb-[93px] z-10
          border-[3px] border-solid border-[#52B5E0] flex items-center justify-center bg-white`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='45'
              height='37'
              viewBox='0 0 45 37'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M27.1699 9.40081C27.1677 11.8276 25.1991 13.7934 22.7723 13.792C20.3455 13.7905 18.3792 11.8225 18.3799 9.39567C18.3806 6.96888 20.3481 5.00195 22.7749 5.00195C23.941 5.00246 25.0592 5.4662 25.8834 6.29115C26.7076 7.11609 27.1704 8.23467 27.1699 9.40081Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M27.3108 20.2734H18.2469C15.0803 20.3729 12.5647 22.9687 12.5647 26.137C12.5647 29.3052 15.0803 31.901 18.2469 32.0005H27.3108C30.4774 31.901 32.993 29.3052 32.993 26.137C32.993 22.9687 30.4774 20.3729 27.3108 20.2734V20.2734Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M38.2857 12.7637C38.2846 14.6198 36.7792 16.1238 34.923 16.1231C33.0669 16.1224 31.5626 14.6172 31.563 12.7611C31.5633 10.9049 33.0682 9.40039 34.9243 9.40039C35.8161 9.40039 36.6714 9.75479 37.3018 10.3856C37.9323 11.0164 38.2862 11.8718 38.2857 12.7637V12.7637Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.74756 12.7617C6.74756 14.6181 8.25248 16.1231 10.1089 16.1231C11.9653 16.1231 13.4702 14.6181 13.4702 12.7617C13.4702 10.9053 11.9653 9.40039 10.1089 9.40039C8.25248 9.40039 6.74756 10.9053 6.74756 12.7617V12.7617Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M35.8731 20.0664C35.0447 20.0664 34.3731 20.738 34.3731 21.5664C34.3731 22.3948 35.0447 23.0664 35.8731 23.0664V20.0664ZM38.3936 21.5664L38.4247 20.0667C38.4144 20.0665 38.404 20.0664 38.3936 20.0664V21.5664ZM38.3936 30.5358V32.0358C38.404 32.0358 38.4144 32.0356 38.4247 32.0354L38.3936 30.5358ZM35.8731 29.0358C35.0447 29.0358 34.3731 29.7073 34.3731 30.5358C34.3731 31.3642 35.0447 32.0358 35.8731 32.0358V29.0358ZM9.15998 23.0664C9.98841 23.0664 10.66 22.3948 10.66 21.5664C10.66 20.738 9.98841 20.0664 9.15998 20.0664V23.0664ZM6.63946 21.5664V20.0664C6.62909 20.0664 6.61873 20.0665 6.60836 20.0667L6.63946 21.5664ZM6.63946 30.5358L6.60836 32.0354C6.61873 32.0356 6.62909 32.0358 6.63946 32.0358V30.5358ZM9.15998 32.0358C9.98841 32.0358 10.66 31.3642 10.66 30.5358C10.66 29.7073 9.98841 29.0358 9.15998 29.0358V32.0358ZM35.8731 23.0664H38.3936V20.0664H35.8731V23.0664ZM38.3625 23.0661C39.987 23.0998 41.2863 24.4263 41.2863 26.0511H44.2863C44.2863 22.7937 41.6814 20.1343 38.4247 20.0667L38.3625 23.0661ZM41.2863 26.0511C41.2863 27.6759 39.987 29.0024 38.3625 29.0361L38.4247 32.0354C41.6814 31.9679 44.2863 29.3085 44.2863 26.0511H41.2863ZM38.3936 29.0358H35.8731V32.0358H38.3936V29.0358ZM9.15998 20.0664H6.63946V23.0664H9.15998V20.0664ZM6.60836 20.0667C3.35165 20.1343 0.746826 22.7937 0.746826 26.0511H3.74683C3.74683 24.4263 5.04611 23.0998 6.67056 23.0661L6.60836 20.0667ZM0.746826 26.0511C0.746826 29.3085 3.35165 31.9679 6.60836 32.0354L6.67056 29.0361C5.04611 29.0024 3.74683 27.6759 3.74683 26.0511H0.746826ZM6.63946 32.0358H9.15998V29.0358H6.63946V32.0358Z'
                fill='#52B5E0'
              />
            </svg>
          </div>
          <hr className='h-[3px] bg-[#52B5E0] w-[218px] md:w-[360px] rotate-90' />
          <div
            className={`w-[52px] md:w-[88px] h-[52px] md:h-[88px] rounded-full mb-14 md:mb-[93px] z-10
          border-[3px] border-solid border-[#52B5E0] flex items-center justify-center bg-white`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='35'
              viewBox='0 0 34 35'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23.2051 2.30469H12.2116C7.35432 2.30469 3.41675 6.24226 3.41675 11.0995V24.2917C3.41675 29.149 7.35432 33.0866 12.2116 33.0866H23.2051C28.0623 33.0866 31.9999 29.149 31.9999 24.2917V11.0995C31.9999 6.24226 28.0623 2.30469 23.2051 2.30469Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M24.3043 12.5957C25.1327 12.5957 25.8043 11.9241 25.8043 11.0957C25.8043 10.2673 25.1327 9.5957 24.3043 9.5957V12.5957ZM11.1121 9.5957C10.2836 9.5957 9.61206 10.2673 9.61206 11.0957C9.61206 11.9241 10.2836 12.5957 11.1121 12.5957V9.5957ZM24.3043 19.1921C25.1327 19.1921 25.8043 18.5205 25.8043 17.6921C25.8043 16.8637 25.1327 16.1921 24.3043 16.1921V19.1921ZM11.1121 16.1921C10.2836 16.1921 9.61206 16.8637 9.61206 17.6921C9.61206 18.5205 10.2836 19.1921 11.1121 19.1921V16.1921ZM17.7082 25.7885C18.5366 25.7885 19.2082 25.1169 19.2082 24.2885C19.2082 23.46 18.5366 22.7885 17.7082 22.7885V25.7885ZM11.1121 22.7885C10.2836 22.7885 9.61206 23.46 9.61206 24.2885C9.61206 25.1169 10.2836 25.7885 11.1121 25.7885V22.7885ZM24.3043 9.5957H11.1121V12.5957H24.3043V9.5957ZM24.3043 16.1921H11.1121V19.1921H24.3043V16.1921ZM17.7082 22.7885H11.1121V25.7885H17.7082V22.7885Z'
                fill='#52B5E0'
              />
            </svg>
          </div>
          <div
            className={`w-[52px] md:w-[88px] h-[52px] md:h-[88px] rounded-full mb-14 md:mb-[93px] z-10
          border-[3px] border-solid border-[#52B5E0] flex items-center justify-center bg-white`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='57'
              height='57'
              viewBox='0 0 57 57'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M28.5 45.125C37.6817 45.125 45.125 37.6817 45.125 28.5H28.5V11.875C19.3183 11.875 11.875 19.3183 11.875 28.5C11.875 37.6817 19.3183 45.125 28.5 45.125Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M34.0408 22.9583V12.8242C38.7724 14.504 42.4952 18.2267 44.1749 22.9583H34.0408Z'
                stroke='#52B5E0'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-9 md:gap-0 w-max h-min -mt-12 md:mt-0'>
          <p
            className={`text-lg md:text-[2rem] font-semibold text-white leading-7 tracking-[-0.39px] w-44 md:w-[22.75rem]
          md:h-[7.68rem] mt-4 md:-mt-6 md:leading-[3rem] md:tracking-[-0.044rem]`}
          >
            Cree diferentes equipos de trabajo
          </p>
          <p
            className={`text-lg md:text-[2rem] font-semibold text-white leading-7 tracking-[-0.39px] w-44 md:w-[22.75rem]
          md:h-[8.68rem] md:mt-[2rem] md:leading-[3rem] md:tracking-[-0.044rem]`}
          >
            Diseñe una encuesta personalizada para cada rol del grupo
          </p>
          <p
            className={`text-lg md:text-[2rem] font-semibold text-white leading-7 tracking-[-0.39px] w-44 md:w-[22.75rem]
          md:h-[11.25rem] md:mt-11 md:leading-[3rem] md:tracking-[-0.044rem]`}
          >
            Obtenga el feedback y las métricas de los empleados
          </p>
        </div>
      </div>
    </article>
  );
}

export default MiddleSectionScreen;
