import { Link } from "react-router-dom"

const Aside = () => {
    return (
        <div className="bg-gray-300 h-screen hidden md:block w-60">
            <p>Imagen</p>
            <p>Nombre de la empresa</p>
            <hr />
            <Link to={'/'} className="block">Dashboard</Link>
            <Link to={'/'} className="block">Administrar roles</Link>
            <Link to={'/'} className="block">Administrar equipos</Link>
            <Link to={'/'} className="block">Formularios</Link>
            <Link to={'/'} className="block">Perfil</Link>
        </div>
    )
}

export default Aside