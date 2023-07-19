import { Link } from "react-router-dom"

const Aside = () => {
  return (
    <div className="h-screen bg-gray-300">
      <p>Imagen</p>
      <p>Nombre de la empresa</p>
      <hr />
      <Link to={'/user'} className="block">Dashboard</Link>
            <Link to={'/user'} className="block">Administrar roles</Link>
            <Link to={'/user'} className="block">Administrar equipos</Link>
            <Link to={'/user'} className="block">Formularios</Link>
            <Link to={'/user'} className="block">Perfil</Link>
      <hr />
      <Link to={'/user/ranking-rol'} className="block">Ranking Roles</Link>
      <Link to={'/user/ranking-equipos'} className="block">Ranking Equipos</Link>
            <Link to={'/user/profile'} className="block">Perfil del usuario</Link>
    </div>
  )
}

export default Aside
