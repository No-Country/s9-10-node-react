import { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import { useScreenSize } from '../../../../hooks';
import { SearchBoxPropsBase, TAGS, TermsSearch } from '../../models';
import '../../../../pages/Cars/components/TopMonthDesktop/TopMonthDesktop.css'

function TermsSearchScreen({ handleSearch }: SearchBoxPropsBase) {
  const { width } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (  
    <>
      {width < 768 ? (
        <div className=''>
          <button onClick={toggleMenu}>
            <FilterOutlined style={{ fontSize: '29px' }} />
          </button>
          {isOpen && (
            <div className='absolute  top-full right-0 w-48 bg-white border border-gray-300 rounded shadow'>
              <ul className='list-none'>
                {TAGS?.length > 0 &&
                  TAGS?.map((item: TermsSearch) => (
                    <li key={item?.id}>
                      <button
                        className='block py-2 px-4 text-gray-800 hover:bg-gray-200 w-48'
                        onClick={() => handleSearch(item?.term)}
                      >
                        {item?.term}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <>
          {TAGS?.length > 0 &&
            TAGS?.map((item: TermsSearch) => (
              <button
                key={item?.id}
                className={`mr-3 min-w-[96px] h-8 bg-red-300 rounded-3xl text-sm font-medium uppercase px-1`}
                onClick={() => handleSearch(item?.term)}
              >
                {item?.term}
              </button>
            ))}
        </>
      )}
    </>
  );
}

export default TermsSearchScreen;
