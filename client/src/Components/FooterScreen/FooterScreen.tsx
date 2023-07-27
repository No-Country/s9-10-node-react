import { useLocationState, useScreenSize } from '../../hooks';
import { SocialMediaScreen } from './components';

function FooterScreen() {
  const { width } = useScreenSize();
  const { isPathname } = useLocationState('/');
  const isMobile = width < 768;

  return (
    <>
      {(!isMobile || isPathname) && (
        <footer
          className={`flex-col w-full justify-center items-center h-20 ${
            isPathname && width >= 768 ? 'md:h-[288px]' : 'md:h-[91px]'
          } p-3 static bottom-0 bg-[#185D81]`}
        >
          <SocialMediaScreen />
        </footer>
      )}
    </>
  );
}

export default FooterScreen;
