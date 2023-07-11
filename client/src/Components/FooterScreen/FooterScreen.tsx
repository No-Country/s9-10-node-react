import { useLocationState, useScreenSize } from '../../hooks';
import { SocialMediaScreen, TabBottomScreen } from './components';

function FooterScreen() {
  const { width } = useScreenSize();
  const { isPathname } = useLocationState('/');

  return (
    <footer
      className={`flex flex-col w-full justify-center items-center h-20 ${
        isPathname ? 'md:h-[288px]' : 'md:h-[91px]'
      } p-3 fixed md:static bottom-0 bg-slate-200`}
    >
      {width < 768 ? <TabBottomScreen /> : <SocialMediaScreen />}
    </footer>
  );
}

export default FooterScreen;
