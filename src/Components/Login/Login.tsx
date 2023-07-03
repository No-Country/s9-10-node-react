import { useState } from 'react';
import { loginRequest } from '../../api/auth';
import { profileRequest } from '../../api/auth';
import { useAuthStore } from '../../store/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const setToken = useAuthStore(state => state.setToken)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resLogin = await loginRequest(email, username, password);
    console.log(email, username, password);
    console.log(resLogin);
    setToken(resLogin.data.id)
    //const resProfile = await profileRequest()
    //console.log(resProfile);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="ejemplo@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;

