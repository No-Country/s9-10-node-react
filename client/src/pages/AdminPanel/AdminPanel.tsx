import React from 'react';
import { useState } from 'react';
import { Formulario, Star, IconCara, NumberComponent, TextArea } from './components';

const availableComponents = [
  { id: 'star', label: 'Estrella', component: Star },
  { id: 'iconCara', label: 'Icono de Cara', component: IconCara },
  {
    id: 'numberComponent',
    label: 'Componente de Número',
    component: NumberComponent,
  },
  {id: 'textArea', label: 'Texto', component: TextArea }
];

const AdminPanel: React.FC = () => {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const handleToggleComponent = (componentId: string) => {
    setSelectedComponents((prevComponents) => {
      if (prevComponents.includes(componentId)) {
        return prevComponents.filter((id) => id !== componentId);
      } else {
        return [...prevComponents, componentId];
      }
    });
  };

  const handleSaveClick = () => {
    // Lógica para guardar el formulario
    console.log('Formulario guardado');
  };

  const handleSubmitClick = () => {
    // Lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  return (
    <div>
      <h2>Componentes disponibles:</h2>
      <ul>
        {availableComponents.map((component) => (
          <li key={component.id}>
            <label>
              <input
                type='checkbox'
                checked={selectedComponents.includes(component.id)}
                onChange={() => handleToggleComponent(component.id)}
              />
              {component.label}
            </label>
          </li>
        ))}
      </ul>
      <h2>Formulario:</h2>
      <Formulario
        selectedComponents={selectedComponents}
        onSave={handleSaveClick}
      />
      <button onClick={handleSubmitClick}>Enviar</button>
      <button onClick={handleSaveClick}>Guardar</button>
    </div>
  );
};

export default AdminPanel;
