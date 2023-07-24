import { Helmet } from 'react-helmet';

interface HeadScreenProps {
  title: string;
}

function HeadScreen({ title }: HeadScreenProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} - FeedbackApp`}</title>
        <meta
          name='description'
          content={`Nuestra web app es la herramienta perfecta para gestionar tu equipo. Puedes registrar a tus empleados, asignarles roles, 
          crear formularios para dar y recibir feedback, y mucho más. Nuestra app es fácil de usar y está diseñada para ayudarte a ahorrar 
          tiempo y mejorar la comunicación entre tu equipo. Regístrate hoy mismo y comprueba por ti mismo cómo nuestra app puede ayudarte a 
          gestionar tu equipo de forma más eficiente.`}
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      </Helmet>
    </>
  );
}

export default HeadScreen;
