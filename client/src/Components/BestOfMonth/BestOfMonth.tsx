import { MouseEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScreenSize } from '../../hooks';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { SearchBoxScreen } from '..';
import Modal from '../Modal/Modal';

interface BestOfMonthProps {
  bestPersons: {
    position: number;
    name: string;
    job: string;
    score: string;
    praises: number;
    email: string;
  }[];
}

const BestOfMonth = ({ bestPersons }: BestOfMonthProps) => {
  const navigate = useNavigate();
  const { width } = useScreenSize();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [bestPersonsState, setBestPersonsState] = useState(bestPersons);
  const [selectedUser, setSelectedUser] = useState<{
    name: string;
    email: string;
  } | null>(null);
  useEffect(() => {
    setBestPersonsState(bestPersons);
  }, [bestPersons]);

  const [editedEmails, setEditedEmails] = useState<{ [key: number]: string }>(
    {}
  );

  const handleOpenModal = (index: number) => {
    setSelectedUser(bestPersonsState[index]);
    setSelectedRow(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAccept = () => {
    const deletePerson = (index: number) => {
      const updatedBestPersons = [...bestPersonsState];
      updatedBestPersons.splice(index, 1);
      setBestPersonsState(updatedBestPersons);
    };
    if (selectedRow !== null) {
      deletePerson(selectedRow);
    }
    setShowModal(false);
    setSelectedRow(null);
    setSelectedUser(null);
    setEditedEmails({});

    // Agrega aquí la lógica que deseas ejecutar al hacer clic en 'Aceptar'
  };

  const handleCancel = () => {
    console.log("Se hizo clic en 'Cancelar'");
    // Agrega aquí la lógica que deseas ejecutar al hacer clic en 'Cancelar'
    handleCloseModal();
  };

  const handlePersonClick = (e: MouseEvent, name: number) => {
    e.preventDefault();
    navigate(`/user/${name}`);
  };

  const handleEditClick = (index: number) => {
    setEditedEmails((prevEditedEmails) => ({
      ...prevEditedEmails,
      [index]: bestPersonsState[index].email,
    }));
    setSelectedRow(index);
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setEditedEmails((prevEditedEmails) => ({
      ...prevEditedEmails,
      [index]: e.target.value,
    }));
  };

  const handleSaveChanges = (index: number) => {
    if (editedEmails[index] !== undefined) {
      // Realizar la lógica para guardar los cambios, ya sea en el estado, en una fuente de datos externa, etc.
      // Por ejemplo, si deseas actualizar el estado bestPersons con los cambios:
      const updatedBestPersons = [...bestPersonsState];
      updatedBestPersons[index].email = editedEmails[index];
      // Actualizar el estado bestPersons con los cambios
      // setBestPersons(updatedBestPersons);
      // Eliminar la entrada en editedEmails para finalizar la edición
      setEditedEmails((prevEditedEmails) => {
        const updatedEditedEmails = { ...prevEditedEmails };
        delete updatedEditedEmails[index];
        return updatedEditedEmails;
      });
      setSelectedRow(null);
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Si se presiona "Enter", guardar los cambios
    if (e.key === 'Enter') {
      handleSaveChanges(index);
    }
  };

  return (
    <div className="px-6 md:px-16">
      <SearchBoxScreen
        label="Editar equipo de Digital Team"
        showButton={true}
        buttonLabel="Agregar miembro"
        showSelect={false}
        handleSearch={(search: string) => console.log(search)}
      />
      <div className="flex items-center justify-between w-2/6 px-4 py-2 mt-8 mb-4 text-2xl font-bold border-2 rounded-full text-violetPrimary border-violetPrimary bg-celesteClaro">
        Asesoria legal
        <div className="flex items-center justify-center gap-8">
          <BiEditAlt
            className="w-6 cursor-pointer text-violetPrimary"
            onClick={() => {
              console.log('edit');
            }}
          />
          <MdOutlineDeleteForever
            className="w-6 cursor-pointer text-violetPrimary"
            onClick={() => {
              console.log('delete');
            }}
          />
        </div>
      </div>
      <div className="mb-8 overflow-hidden border border-gray-300 rounded-xl">
        <table className="w-full text-center text-white border-collapse table-auto border-spacing-8 border-radius-2xl ">
          <thead className="bg-violetPrimary ">
            <tr>
              <th className="py-3">Nombre y Apellido</th>
              <th>Correo electrónico</th>
              <th
                {...(width < 768 && {
                  className: 'hidden',
                })}
              >
                Puesto
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bestPersonsState.map((person, index) => (
              <tr
                key={person.position}
                id={`tr-${person.position}`}
                className={selectedRow === index ? 'bg-yellow-200' : ''}
              >
                <td
                  className="px-4 py-2 text-black bg-white border-b border-gray-200"
                  onClick={(e) => handlePersonClick(e, person.position)}
                >
                  <span>{person.name}</span>
                  <span>{width < 768 && person.job}</span>
                </td>
                <td
                  className={`w-1/5 p-2 text-black bg-white border-b border-gray-200`}
                  {...(width < 768 && {
                    className: 'hidden',
                  })}
                >
                  {editedEmails[index] !== undefined ? (
                    <input
                      type="text"
                      className="p-2 text-black border-2 rounded-lg bg-celesteClaro border-violetPrimary focus:ring-2 focus:outline-none"
                      value={editedEmails[index]}
                      onChange={(e) => handleEmailChange(e, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                  ) : (
                    person.email
                  )}
                </td>
                <td
                  className="px-4 py-2 text-black bg-white border-b border-gray-200"
                  {...(width < 768 && {
                    className: 'hidden',
                  })}
                >
                  {person.job}
                </td>
                <td className="px-4 py-2 text-black bg-white border-b border-gray-200">
                  <div className="flex items-center justify-center gap-8">
                    {editedEmails[index] === undefined ? (
                      <BiEditAlt
                        className="w-8 h-8 text-black cursor-pointer"
                        onClick={() => handleEditClick(index)}
                      />
                    ) : (
                      <BiEditAlt
                        className="w-8 h-8 text-blue-500 cursor-pointer"
                        onClick={() => handleSaveChanges(index)}
                      />
                    )}
                    <MdOutlineDeleteForever
                      className="w-8 h-8 text-black cursor-pointer"
                      onClick={() => {
                        handleOpenModal(person.position);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          onAccept={handleAccept}
          onCancel={handleCancel}
        >
          <div className="flex justify-around p-4">
            <img
              className="w-2/5"
              src="/popupDeletePerson.png"
              alt="popupdeleteperson"
            />
            <div className="flex flex-col w-2/5 gap-8">
              <h2 className="text-2xl font-bold text-black">
                ¿Seguro que deseas eliminar del equipo a {selectedUser?.name}?
              </h2>
              <div>
                <p className="text-black">
                  Al eliminar al miembro, no podrá visualizar los formularios
                  correspondientes al equipo.
                </p>
                <p className="font-semibold text-black">
                  No se podrá deshacer esta acción.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default BestOfMonth;
