import { TermsSearchScreen } from './components';
import { useScreenSize } from '../../hooks';
import { searchOptions, SearchBoxProps } from './models';
import { useSearch } from './hook';
import { AiOutlineUserAdd } from 'react-icons/ai';

function SearchBoxScreen({
  handleSearch,
  showSelect,
  showButton,
  handleCreate,
  label,
  showTags = true,
  buttonLabel = 'Crear',
}: SearchBoxProps) {
  const { search, setSearch, handleCreateTags, clearInput } = useSearch();
  const { width } = useScreenSize();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h2 className="text-center md:text-left text-2xl text-[26px] font-bold leading-9 tracking-[-0.572px] mt-5 md:mt-8">
        {label}
      </h2>

      <div className="relative flex items-center justify-center mx-auto mt-6 search-contenedor md:w-min md:mx-0">
        <input
          className={`w-[283px] md:w-[293px] h-10 border-[1px] border-[#2085B0] rounded-3xl pl-9 pr-2 mr-4 bg-[#FAFDFF]
          focus:ring-[#DCF0DB] focus:border-[#DCF0DB] appearance-none focus:outline-none`}
          type="search"
          placeholder="Buscador"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputChange(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              handleSearch(search);
              handleCreateTags(search);
              clearInput();
            }
          }}
        />
        <div className="absolute left-6 md:left-2 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.80524 15.7137C5.9404 14.8306 5.35381 13.7131 5.11824 12.4997C4.88072 11.2829 5.00269 10.0233 5.46924 8.87469C5.93181 7.73253 6.72153 6.7525 7.73924 6.05769C9.80409 4.64744 12.5224 4.64744 14.5872 6.05769C15.605 6.7525 16.3947 7.73253 16.8572 8.87469C17.3238 10.0233 17.4458 11.2829 17.2082 12.4997C16.9727 13.7131 16.3861 14.8306 15.5212 15.7137C14.3759 16.889 12.8044 17.5519 11.1632 17.5519C9.52213 17.5519 7.95059 16.889 6.80524 15.7137V15.7137Z"
              stroke="#3C94BA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.17 7.20316C10.7581 7.24681 10.4596 7.61611 10.5032 8.02801C10.5468 8.43992 10.9161 8.73846 11.3281 8.69481L11.17 7.20316ZM13.0214 9.69237C13.1828 10.0738 13.623 10.2521 14.0044 10.0906C14.3859 9.92916 14.5642 9.48904 14.4027 9.1076L13.0214 9.69237ZM16.1419 15.0872C15.8487 14.7946 15.3739 14.795 15.0812 15.0881C14.7886 15.3813 14.789 15.8562 15.0822 16.1488L16.1419 15.0872ZM18.4702 19.5308C18.7633 19.8234 19.2382 19.823 19.5308 19.5298C19.8235 19.2367 19.823 18.7618 19.5299 18.4692L18.4702 19.5308ZM11.3281 8.69481C12.0506 8.61825 12.7381 9.02331 13.0214 9.69237L14.4027 9.1076C13.8619 7.83029 12.5493 7.05701 11.17 7.20316L11.3281 8.69481ZM15.0822 16.1488L18.4702 19.5308L19.5299 18.4692L16.1419 15.0872L15.0822 16.1488Z"
              fill="#3C94BA"
            />
          </svg>
        </div>
        {showTags && <TermsSearchScreen handleSearch={handleSearch} />}
        {width >= 768 && showSelect && (
          <select
            className={`w-36 h-8 rounded-[1.125rem] bg-[#DCF0DB] px-4 ml-1 border-[1px] border-solid border-[#40903C] flex items-center 
            justify-center text-sm text-[#40903C] font-normal leading-5 text-center`}
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
            className={`flex min-w-[9rem] h-8 rounded-[6.25rem] py-[1.3rem] bg-[#73C36F] items-center justify-center text-sm font-bold
      leading-7 tracking-[-0.00938rem] text-white  md:-top-1 md:-right-44 md:w-52 md:h-12
        md:text-lg md:tracking-[-0.01125rem] gap-2`}
            onClick={handleCreate}
          >
            <AiOutlineUserAdd className="w-6 font-bold" />
            {buttonLabel}
          </button>
        )}
      </div>
    </>
  );
}

export default SearchBoxScreen;
