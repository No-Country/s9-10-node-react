import React from 'react';
import Clipboard from 'clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';

interface CopyToClipboardProps {
  text: string;
  children: React.ReactElement;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
}) => {
  const handleCopyClick = () => {
    const clipboard = new Clipboard('.copy-button', {
      text: function () {
        return text;
      },
    });

    clipboard.on('success', function (e: ClipboardJS.Event) {
      console.log('Texto copiado:', e.text);
      clipboard.destroy();
    });

    clipboard.on('error', function (e: ClipboardJS.Event) {
      console.error('Error al copiar el texto:', e.action);
      clipboard.destroy();
    });
  };

  const handleButtonClick = () => {
    // Llamamos a la función 'handleCopyClick' cuando el botón sea presionado
    handleCopyClick();
  };

  return (
    <div className="relative flex items-center justify-start gap-2 p-2 border rounded border-violetPrimary text-violetPrimary w-full md:w-1/2">
      {React.cloneElement(children, {
        className: 'copy-button',
        onClick: handleButtonClick,
      })}
      <p>{text}</p>
      <MdOutlineContentCopy className="absolute ml-8 right-4" />
    </div>
  );
};

export default CopyToClipboard;
