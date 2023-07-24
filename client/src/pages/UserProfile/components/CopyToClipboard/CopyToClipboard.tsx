import React from 'react';
import Clipboard from 'clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';

interface CopyToClipboardProps {
  text: string;
  children: React.ReactElement; // Utilizamos React.ReactElement en lugar de React.ReactNode
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

    clipboard.on('success', function (e) {
      console.log('Texto copiado:', e.text);
      clipboard.destroy();
    });

    clipboard.on('error', function (e) {
      console.error('Error al copiar el texto:', e.action);
      clipboard.destroy();
    });
  };

  return (
    <div className="relative flex items-center justify-start gap-2 p-2 border rounded border-violetPrimary text-violetPrimary w-full md:w-1/2">
      {React.cloneElement(children, {
        className: 'ml-8copy-button',
        onClick: handleCopyClick,
      })}
      <p>{text}</p>
      <MdOutlineContentCopy className="absolute ml-8 right-4" />
    </div>
  );
};

export default CopyToClipboard;
