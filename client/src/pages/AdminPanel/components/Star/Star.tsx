import React, { useState } from 'react';
import { Rate } from 'antd';

interface StarProps {
  onSave: () => void; // Agrega la prop onSave a la interfaz
}

const Star: React.FC<StarProps> = ({ onSave }) => {
  const [editing, setEditing] = useState(false);
  const [question, setQuestion] = useState('¿Consulta ejemplo?');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    onSave(); // Llama a la función onSave pasada como prop
  };

  return (
    <>
      {editing ? (
        <>
          <input value={question} onChange={(e) => setQuestion(e.target.value)} />
          <button onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <h4 onClick={handleEditClick}>{question}</h4>
      )}
      <Rate defaultValue={3} />
    </>
  );
};

export default Star;




