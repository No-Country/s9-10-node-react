import React, { useState } from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate, Input } from 'antd';

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

interface IconCaraProps {
  onSave: (text: string) => void;
}

const IconCara: React.FC<IconCaraProps> = ({ onSave }) => {
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
    onSave(text);
  };

  const renderCharacter = ({ index }: { index?: number }): React.ReactNode => {
    if (typeof index === 'number') {
      return customIcons[index + 1];
    }
    return null;
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
      <Rate defaultValue={3} character={renderCharacter} />
    </>
  );
};

export default IconCara;


