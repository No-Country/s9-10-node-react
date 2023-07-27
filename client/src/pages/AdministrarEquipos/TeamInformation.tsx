import React, { useEffect, useState } from 'react';

interface TeamInfo {
  name: string;
  id: string;
  players: string[];
}

const TeamInformation: React.FC = () => {
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null);

  useEffect(() => {
    // Función para obtener la información del equipo.
    const getTeamInformation = async (teamName: string) => {
      const myHeaders = new Headers();
      myHeaders.append(
        "Cookie",
        "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzA4ZjU3N2QxMDRjNWY5Y2U3YzNlNSIsImlhdCI6MTY5MDQyMjU2NCwiZXhwIjoxNjkwNTA4OTY0fQ.YD1DYkwyqzdtyspKL1q2zLXMwARlKaAwg9dahaCoQ8M"
      );

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect, // Cambia el tipo de redirect a RequestRedirect
      };

      try {
        const response = await fetch(`http://localhost:8000/api/admin/users/equip/${encodeURIComponent(teamName)}`, requestOptions);
        const result = await response.text();
        return result || ""; // Devuelve una cadena vacía en caso de que result sea null
      } catch (error) {
        console.log('Error:', error);
        throw new Error('Error al obtener la información del equipo'); // Lanza una excepción en caso de error para manejar errores más específicamente
      }
    };

    // Función para obtener la información del equipo.
    const fetchTeamInfo = async () => {
      try {
        const result = await getTeamInformation("equipo 3");
        // Parsea los datos si la respuesta es JSON (esto dependerá de cómo se envía la información desde el servidor).
        const parsedResult: TeamInfo = JSON.parse(result);
        setTeamInfo(parsedResult);
      } catch (error) {
        console.log('Error:', error);
        // Maneja el error aquí, por ejemplo, mostrando un mensaje de error en la interfaz.
      }
    };

    fetchTeamInfo();
  }, []);

  return (
    <div>
      {teamInfo ? (
        <div>
          <h2>Información del equipo</h2>
          <p>Nombre: {teamInfo.name}</p>
          <p>ID: {teamInfo.id}</p>
          <p>Jugadores:</p>
          <ul>
            {teamInfo.players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando información del equipo...</p>
      )}
    </div>
  );
};

export default TeamInformation;
