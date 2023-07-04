import { useState } from 'react';
import { loginRequest } from "../../api/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await loginRequest(email, password);
      console.log(res); // Manejar la respuesta según tus necesidades
    } catch (error) {
      console.log(error); // Manejar el error según tus necesidades
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;





// import React, { useState } from 'react';
// import { useAuthStore } from '../../store/auth';
// import { registerRequest, loginRequest, profileRequest } from "../../api/auth";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const setToken = useAuthStore((state) => state.setToken);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const resRegister = await registerRequest(email, username, password);
//       console.log(resRegister);

//       // Realizar inicio de sesión después del registro exitoso
//       const resLogin = await loginRequest(email, password);
//       console.log(resLogin);
//       setToken(resLogin.id);

//       // Obtener el perfil del usuario
//       const resProfile = await profileRequest();
//       console.log(resProfile);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="ejemplo@email.com"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="********"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
