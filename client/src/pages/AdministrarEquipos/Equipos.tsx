import React, { useState } from "react";
import axios from "axios";



const Equipos: React.FC = () => {
  const [groupName, setGroupName] = useState<string>("");
  const [users, setUsers] = useState<any[]>([]);
  const [memberName, setMemberName] = useState<string>("");
  const [members, setMembers] = useState<any[]>([]);
  

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleMemberNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberName(e.target.value);
  };

  const handleAddMember = () => {
    // Agregar el nuevo miembro a la lista de miembros
    setMembers([...members, { name: memberName }]);

    // Limpiar el input después de agregar el miembro
    setMemberName("");
  };

  const fetchUsersByEquip = async (equipName: string) => {
    try {
      // Realizar la petición al backend para obtener usuarios por equipo
      const response = await axios.get(
        `http://localhost:8000/api/admin/users/equip/${equipName}`
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener usuarios por equipo:", error);
    }
  };

  const handleCreateTeam = async () => {
    try {
      // Agregar el token de acceso a las cabeceras de la solicitud
      const token = "AQUÍ_EL_TOKEN_DE_ACCESO"; // Reemplazarn esto con tu token de acceso real
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Realizar la petición al backend para crear el equipo con las cabeceras que incluyen el token de acceso
      const response = await axios.post(
        "http://localhost:8000/api/admin/equip",
        { name: groupName, members }, // Agrega los miembros al cuerpo de la solicitud
        { headers }
      );
      console.log("Respuesta del backend:", response.data);

      // Una vez que se ha creado el equipo, obtén los usuarios por equipo
      fetchUsersByEquip(groupName);

      // Aquí podrías mostrar un mensaje de éxito o hacer alguna otra acción en función de la respuesta del backend
    } catch (error) {
      console.error("Error al crear el equipo:", error);
      // Aquí podrías mostrar un mensaje de error o hacer alguna otra acción en caso de error
    }
  };

  return (
    <div>
      <h2>Equipos</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre de Equipo"
          value={groupName}
          onChange={handleGroupNameChange}
        />
        <button onClick={handleCreateTeam}>Crear equipo</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Nombre del miembro"
          value={memberName}
          onChange={handleMemberNameChange}
        />
        <button onClick={handleAddMember}>Agregar miembro</button>
      </div>
      {/* Aquí puedes mostrar la lista de usuarios por equipo */}
      <h3>Miembros del equipo:</h3>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
      <h3>Usuarios por equipo:</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Equipos;

