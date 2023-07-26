import { useState} from "react";
import { TeamOutlined, FilterOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { useScreenSize } from "../../hooks";
import { searchOptions, SearchBoxProps } from "./models";
import { Modal } from "antd";
import { Link } from "react-router-dom"
 import "../../pages/AdministrarEquipos/Components/CrearEquipos/CrearEquiposSesktop.css";
import Barra from "./models/img/Progress Bar.png";
import Imagen from "./models/img/Gallery_2.png";
import Flecha from "./models/img/vectorFlecha.png";
import BarraProgreso from "./models/img/Progress.png";
import Grupo from "./models/img/Group 80.png";
//import Equipos from "../../pages/AdministrarEquipos/Equipos";
import axios from "axios";

function SearchEquipos({
  handleSearch,
  showSelect,
  showButton,
}: SearchBoxProps) {
  const [search, setSearch] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");
  const { width } = useScreenSize();
  const [selectedOption, setSelectedOption] = useState<string>("");
  

  const menu = (
    <Menu
      theme="light"
      selectedKeys={[selectedOption]}
      onSelect={(item) => {
        setSelectedOption(item.key as string);
        handleSearch(item.key);
      }}
    >
      {searchOptions.map((option) => (
        <Menu.Item key={option?.term}>{option?.term}</Menu.Item>
      ))}
    </Menu>
  );

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isThirdModalVisible, setIsThirdModalVisible] = useState(false);

  //tercer modal

  const hideThirdModal = () => {
    setIsThirdModalVisible(false);
  };
  


  

  // Función para mostrar el modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Función para ocultar el modal
  const hideModal = () => {
    setIsModalVisible(false);
  };

  // Función para mostrar el segundo modal
  const showSuccessModal = () => {
    setIsSuccessModalVisible(true);
  };

  // Función para ocultar el segundo modal
  const hideSuccessModal = () => {
    setIsSuccessModalVisible(false);

  };

  const handleAddMembers = () => {
    setIsSuccessModalVisible(false);
    setIsThirdModalVisible(true);
  }

 

  const handleCreateTeam = async () => {
    try {
      // Realizar la petición al backend para crear el equipo
      const response = await axios.post("http://localhost:8000/api/admin/equip", { name: groupName });

      // Obtener el nombre del equipo creado desde la respuesta del backend
      const { name } = response.data;

      // Mostrar el segundo modal para añadir miembros al equipo
      showSuccessModal();

      // Guardar el nombre del equipo en el estado del componente
      setGroupName(name);
    } catch (error) {
      console.error("Error al crear el equipo:", error);
      // Aquí podrías mostrar un mensaje de error o hacer alguna otra acción en caso de error
    }
  };

  return (
    <>
      <div className="search-contenedor">
        <input
          className="input-search"
          type="search"
          placeholder="Buscador"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputChange(e);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSearch(search);
            }
          }}
        />
        <div className="icon-search">
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
        {width >= 768 && showSelect && (
          <select
            className="select-search"
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
        {/* Renderiza el ícono de filtro si el ancho de pantalla es menor a 768 */}
        <div className="filter-mobile">
          {width < 768 && showSelect && (
            <>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomLeft"
              >
                <span className="filter-icon">
                  <FilterOutlined style={{ color: "#185D81" }} />
                </span>
              </Dropdown>
            </>
          )}
        </div>
        {showButton && (
          <button className="button-search" onClick={showModal}>
            <TeamOutlined />
            Crear equipos
          </button>
        )}
      </div>
      <Modal
        title=""
        visible={isModalVisible}
        onCancel={hideModal}
        footer={null}
        className="modal"
      >
        <div className="modal-conte">
          <img src={Barra} alt="Barra de progreso" className="modal-barra" />
          <h2 className="modal-title">Crear un nuevo equipo</h2>
          <p className="modal-parra">
            Podrá agregar miembros una vez que se haya guardado el equipo de
            trabajo.
          </p>
          <div className="conte-input-modal">
            <img src={Imagen} alt="Icono de imagen" className="modal-img" />
            <button className="modal-agregar">+</button>
            <input
              type="text"
              placeholder="Nombre de Equipo"
              className="modal-imput"
              value={groupName}
              onChange={handleGroupNameChange}
            />
          </div>
          <div className="cont-btn">
            <button onClick={hideModal} className="btn-cancel">
              Cancelar
            </button>
            <button onClick={handleCreateTeam} className="btn-crear">
              Crear equipo
            </button>
          </div>
          {/* <Equipos /> */}
        </div>
      </Modal>
      <Modal
        title=""
        visible={isSuccessModalVisible}
        onCancel={hideSuccessModal}
        footer={null}
        className="modal"
      >
        <div className="modal-conte">
          <div className="conte-img-progreso">
            <button onClick={hideSuccessModal} className="vector-flecha">
              <img src={Flecha} alt="felcha" className="flecha-mobal" />
            </button>
            <img
              src={BarraProgreso}
              alt="Barra de progreso"
              className="modal-barra"
            />
          </div>
          <h2 className="modal-title-progres">Añadir miembros al equipo</h2>
          <p className="modal-parra-progres">
            Selecione los miembros que desea que sean parte del equipo.
          </p>

          {/* SEARCH */}
          <div className="search-contenedor search-mobal">
            <input
              className="input-search"
              type="search"
              placeholder="Buscador"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                inputChange(e);
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSearch(search);
                }
              }}
            />
            <div className="icon-search">
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
          </div>
          {/* SEARCH */}

          <div className="cont-btn">
            <button onClick={hideModal} className="btn-cancel btn-anada">
              Añadir más tarde
            </button>
            <button onClick={handleAddMembers} className="btn-crear">
              Añadir
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        title=""
        visible={isThirdModalVisible}
        onCancel={hideThirdModal}  
        footer={null}
        className="modal"
      >
        <div className="modal-conte-equipo">
        <div className="barra-progreso">.</div>
        <h2 className="modal-title-equipo">Equipo <span className="title-naranja">{groupName}</span></h2>
        <p className="modal-parra-equipo">Creado exitosamente</p>
        <img src={Grupo} alt="Grupo" />
        <Link to="/user"><button className="btn-crear">Ir al equipo</button></Link>
        </div>

      </Modal>
      
    </>
  );
}

export default SearchEquipos;