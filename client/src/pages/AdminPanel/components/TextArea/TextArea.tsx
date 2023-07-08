import React, { useState } from 'react';


interface TextAreaProps {
  onSave: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onSave }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('¿Consulta ejemplo?');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    onSave(title);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <div>
          <h4 onClick={handleEditClick}>{title}</h4>
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            readOnly
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default TextArea;
