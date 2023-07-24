import { DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Objetos from './OBJECTS.jpg';
import './BtnDelet.css';

interface ModalProps {
  onDelete: () => void;
  title?: string;
  content?: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

function ModalAlert({
  title = '¿Seguro que deseas eliminar el equipo?',
  content = `Al eliminar el equipo ya no se podrán visualizar los usuarios
pertenecientes.`,
  onDelete,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    onDelete(); // Llama a la función onDelete cuando se confirme el modal.
  };

  return (
    <Modal
      title={<p className='custom-modal-title'>{title}</p>}
      open={isModalOpen}
      onCancel={handleCancel}
      width={672}
      className='modal-alert'
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
            <div key='ok-button' onClick={handleOk} className='modal-ok-button'>
              <DeleteOutlined />
              Eliminar equipo
            </div>
            
          </div>
        </>
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
    </Modal>
  );
}

export default ModalAlert;
