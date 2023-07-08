import React, { useState } from 'react';
import Star from '../Star/Star';
import IconCara from '../IconCara/IconCara';
import NumberComponent from '../NumberComponent/NumberComponent';
import  TextArea  from '../TextArea/TextArea';

interface ComponentInstance {
  id: string;
  component: React.ReactNode;
  title: string;
  
}

interface FormularioProps {
  selectedComponents: string[];
  onSave: () => void;
}

const Formulario: React.FC<FormularioProps> = ({ selectedComponents, onSave }) => {
  const [componentInstances, setComponentInstances] = useState<ComponentInstance[]>([]);

  const addComponentInstance = (componentId: string) => {
    const component = createComponentInstance(componentId);
    setComponentInstances(prevInstances => [...prevInstances, component]);
  };

  const removeComponentInstance = (index: number) => {
    setComponentInstances(prevInstances => prevInstances.filter((_, i) => i !== index));
  };

  const moveComponentUp = (index: number) => {
    if (index > 0) {
      setComponentInstances(prevInstances => {
        const instances = [...prevInstances];
        const temp = instances[index - 1];
        instances[index - 1] = instances[index];
        instances[index] = temp;
        return instances;
      });
    }
  };

  const moveComponentDown = (index: number) => {
    if (index < componentInstances.length - 1) {
      setComponentInstances(prevInstances => {
        const instances = [...prevInstances];
        const temp = instances[index + 1];
        instances[index + 1] = instances[index];
        instances[index] = temp;
        return instances;
      });
    }
  };



  const createComponentInstance = (componentId: string): ComponentInstance => {
    let component: React.ReactNode = null;

    switch (componentId) {
      case 'star':
        component = <Star onSave={onSave} />;
        break;
      case 'iconCara':
        component = <IconCara onSave={onSave} />;
        break;
      case 'numberComponent':
        component = <NumberComponent onSave={onSave} />;
        break;
        case 'textArea':
        component = <TextArea onSave={onSave} />;
        break;
      // Agrega más casos para otros componentes seleccionados

      default:
        break;
    }

    return {
      id: componentId,
      component,
      title: ''
    };
  };

  return (
    <>
      <h1>Formulario ejemplo</h1>
      {componentInstances.map((instance, instanceIndex) => (
        <div key={instanceIndex}>
          <h4>{instance.title}</h4>
          {instance.component}
          
          <button onClick={() => removeComponentInstance(instanceIndex)}>Quitar</button>
          <button onClick={() => moveComponentUp(instanceIndex)}>Subir</button>
          <button onClick={() => moveComponentDown(instanceIndex)}>Bajar</button>
        </div>
      ))}
      {selectedComponents.map((componentId, index) => (
        <button key={index} onClick={() => addComponentInstance(componentId)}>
          Agregar {componentId}
        </button>
      ))}
    </>
  );
};

export default Formulario;



