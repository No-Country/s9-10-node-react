import { useState, useEffect } from 'react';

//custom hook que permite obtener los valores del ancho y alto de la pantalla.
const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //handleResize es la función que va a ejecutar cuando cambie el tamaño de la ventana
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    //se agrega un listener que va a escuchar cada vez que se cambie el tamaño de la ventana
    //@param handleResize es la función que va a ejecutar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    //eliminamos el listener y la función que tiene que dejar de hacer.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { height, width };
};

export default useScreenSize;
