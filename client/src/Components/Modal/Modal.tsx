import React, { useState, useEffect, ReactNode } from 'react';

// Tipos para las propiedades del modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onCancel: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  onCancel,
  children,
}) => {
  // Estado local para manejar el montaje y desmontaje del modal
  const [modalOpen, setModalOpen] = useState(isOpen);

  // Utilizamos useEffect para sincronizar el estado local con la prop isOpen
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  // Función para ejecutar la acción de "Aceptar" y cerrar el modal
  const handleAccept = () => {
    onAccept();
    closeModal();
  };

  // Función para ejecutar la acción de "Cancelar" y cerrar el modal
  const handleCancel = () => {
    onCancel();
    closeModal();
  };

  // Renderizar el modal solo si está abierto
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <div className="p-6 bg-white rounded-md">
        {/* Contenido del modal */}
        {children}

        {/* Botones de aceptar y cancelar */}
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
            onClick={handleAccept}
          >
            Eliminar miembro
          </button>
          <button
            className="px-4 py-2 text-white bg-gray-500 rounded"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
