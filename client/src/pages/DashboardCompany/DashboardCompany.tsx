import { SearchBoxScreen } from '../../Components';
import ParentBest from './components/ParentBest/ParentBest';
import ParentComponent from './components/ParentComponent/ParentComponent';

function DashboardCompany() {
  const handleSearch = (search: string) => {
    // Realiza la acción deseada con el texto de búsqueda
    // Por ejemplo, puedes filtrar los resultados basados en el texto de búsqueda
    console.log('Texto de búsqueda:', search);
    // Otra lógica de filtrado u otras acciones
  };

  return (
    <div className='overflow-hidden'>
      <SearchBoxScreen handleSearch={handleSearch} showSelect={true} />
      <ParentComponent />
      <ParentBest />
    </div>
  );
}

export default DashboardCompany;