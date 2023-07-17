import { useState } from 'react';
import { TermsSearchScreen } from './components';
import { useScreenSize } from '../../hooks';
import { searchOptions, SearchBoxProps } from './models';

function SearchBoxScreen({
  handleSearch,
  showSelect,
  showButton,
  handleCreate,
  label,
}: SearchBoxProps) {
  const [search, setSearch] = useState<string>('');
  const { width } = useScreenSize();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h2 className='text-center md:text-left text-2xl text-[26px] font-bold leading-9 tracking-[-0.572px] mt-5 md:mt-8'>
        {label}
      </h2>
      <div className='flex relative justify-center items-center mt-6 w-min mx-auto md:mx-0'>
        <input
          className={`w-[283px] md:w-[293px] h-10 border-[1px] border-[#2D3648] rounded-3xl pl-9 pr-2 mr-4`}
          type='search'
          placeholder='Search'
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputChange(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              handleSearch(search);
            }
          }}
        />
        <div className='absolute left-2 top-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='27'
            height='28'
            viewBox='0 0 27 28'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.89498 18.1265C6.93404 17.1453 6.28228 15.9036 6.02054 14.5554C5.75663 13.2034 5.89215 11.8039 6.41054 10.5276C6.9245 9.25856 7.80197 8.16964 8.93276 7.39762C11.227 5.83067 14.2474 5.83067 16.5417 7.39762C17.6724 8.16964 18.5499 9.25856 19.0639 10.5276C19.5823 11.8039 19.7178 13.2034 19.4539 14.5554C19.1921 15.9036 18.5404 17.1453 17.5794 18.1265C16.3068 19.4325 14.5607 20.169 12.7372 20.169C10.9137 20.169 9.16759 19.4325 7.89498 18.1265V18.1265Z'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12.754 8.75299C12.3421 8.79664 12.0435 9.16594 12.0872 9.57785C12.1308 9.98976 12.5001 10.2883 12.912 10.2446L12.754 8.75299ZM14.879 11.4034C15.0405 11.7849 15.4806 11.9632 15.8621 11.8017C16.2435 11.6402 16.4218 11.2001 16.2603 10.8187L14.879 11.4034ZM18.2106 17.4891C17.9175 17.1965 17.4426 17.1969 17.15 17.4901C16.8574 17.7832 16.8578 18.2581 17.1509 18.5507L18.2106 17.4891ZM20.9154 22.3085C21.2085 22.6011 21.6834 22.6007 21.976 22.3076C22.2687 22.0144 22.2682 21.5395 21.9751 21.2469L20.9154 22.3085ZM12.912 10.2446C13.7513 10.1557 14.55 10.6262 14.879 11.4034L16.2603 10.8187C15.6738 9.43321 14.2501 8.59447 12.754 8.75299L12.912 10.2446ZM17.1509 18.5507L20.9154 22.3085L21.9751 21.2469L18.2106 17.4891L17.1509 18.5507Z'
              fill='black'
            />
          </svg>
        </div>
        <TermsSearchScreen handleSearch={handleSearch} />
        {width >= 768 && showSelect && (
          <select
            className='w-36 h-8 rounded-[30px] bg-[#EDF0F7] p-1 ml-1'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              handleSearch(e.target.value);
            }}
          >
            {searchOptions.map((option) => (
              <option key={option?.id} value={option?.term}>
                {option?.term}
              </option>
            ))}
          </select>
        )}
        {showButton && (
          <button
            className={`flex w-36 h-8 rounded-[6.25rem] py-[1.3rem] bg-[#2D3648] items-center justify-center text-sm font-bold
        leading-7 tracking-[-0.00938rem] text-white absolute right-0 top-[-60px] md:-top-1 md:-right-44 md:w-48 md:h-12 md:px-[1.95rem]
        md:text-lg md:tracking-[-0.01125rem]`}
            onClick={handleCreate}
          >
            Crear
          </button>
        )}
      </div>
    </>
  );
}

export default SearchBoxScreen;
