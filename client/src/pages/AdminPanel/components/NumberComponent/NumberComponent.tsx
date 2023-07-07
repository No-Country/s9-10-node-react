import React, { useState } from 'react';
import { Rate, Input } from 'antd';

interface NumberComponentProps {
  index?: number;
  onSave: () => void;
}

const NumberComponent: React.FC<NumberComponentProps> = ({ onSave }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('¿Consulta ejemplo?');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    onSave();
  };

  return (
    <>
      {editing ? (
        <>
          <Input value={text} onChange={handleTextChange} />
          <button onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <h4 onClick={handleEditClick}>{text}</h4>
      )}
      <Rate defaultValue={2} character={({ index }: { index?: number }) => (index !== undefined ? index + 1 : null)} />
      <br />
    </>
  );
};

export default NumberComponent;

