import { Outlet } from 'react-router-dom';
import  NavbarScreen  from '../NavbarScreen/NavbarScreen';
import Aside from '../Aside/Aside';
import Toolbar from '../Toolbar/Toolbar';
import ParentComponent from '../../pages/Cars/components/ParentComponent/ParentComponent';
import ParentBest from '../../pages/Cars/components/ParentBest/ParentBest'
import  SearchBoxScreen  from '../SearchBoxScreen/SearchBoxScreen';



const Root = () => {
    const handleSearch = (search: string) => {
        // Realiza la acción deseada con el texto de búsqueda
        // Por ejemplo, puedes filtrar los resultados basados en el texto de búsqueda
        console.log("Texto de búsqueda:", search);
        // Otra lógica de filtrado u otras acciones
      };


    return (
        <div className=''>
            <div>
                <NavbarScreen/>
            </div>
            <div className='md:flex'>
                <div className='hidden md:block w-60'>
                    <Aside/>
                </div>
                
                <div>
                    <main className=''>
                        <Outlet />
                        
                        <SearchBoxScreen handleSearch={handleSearch} showSelect={true}/>
                        <ParentComponent />
                        <ParentBest />
                    </main>
                    <footer>
                        <p>Footer</p>
                    </footer>
                </div>
            </div>
            <div className='fixed w-full bottom-0 md:hidden'>
                <Toolbar/>
            </div>
        </div>
    );
};
export default Root;
