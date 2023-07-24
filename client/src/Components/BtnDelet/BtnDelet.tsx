import React, { useState } from 'react';
//import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
//import Objetos from './OBJECTS.jpg';
import './BtnDelet.css';
import { ModalAlert } from '..';

interface BtnDeletProps {
  onDelete: () => void;
  
}

const BtnDelet: React.FC<BtnDeletProps> = ({ onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  //   onDelete(); // Llama a la función onDelete cuando se confirme el modal.
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      {/* Botón para abrir el modal */}
      <div className='delet-cont' onClick={showModal}>
        <div className='delet-icon'>
          <DeleteOutlined />
        </div>
        <div className='delet-eliminar'>Eliminar</div>
      </div>

      {/* Modal personalizado */}

      {/* <Modal
        title={<p className='custom-modal-title'>{title}</p>}
        open={isModalOpen}
        onCancel={handleCancel}
        width={672}
        footer={[
          <>
            <div className='cont-btn'>
              <div
                key='cancel-button'
                onClick={handleCancel}
                className='modal-cancel-button'
              >
                Cancelar
              </div>
              <div
                key='ok-button'
                onClick={handleOk}
                className='modal-ok-button'
              >
                <DeleteOutlined />
                Eliminar equipo
              </div>
              ,
            </div>
          </>,
        ]}
      >
        <div className='modal-cont'>
          <div className='modal-image'>
            <img
              src={Objetos}
              alt='Objetos'
              style={{ width: '208px', height: '157px', marginTop: '25%' }}
            />
          </div>
          <div className='modal-text'>
            <p>
              {content}
              <span style={{ fontWeight: '700' }}>
                No se podrá deshacer esta acción.
              </span>
            </p>
          </div>
        </div>
      </Modal> */}
      <ModalAlert
        onDelete={onDelete}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        
      />
    </>
  );
};

export default BtnDelet;
