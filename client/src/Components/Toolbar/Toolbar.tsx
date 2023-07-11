import { Link } from "react-router-dom"

const Toolbar = () => {
    return (
        <div className="bg-gray-200 flex justify-between py-3 px-5 fixed w-full md:hidden">
            <div className="flex flex-col items-center">
                <p>Icono</p>
                <Link to={'/'}>Dashboard</Link>
            </div>
            <div className="flex flex-col items-center">
                <p>Icono</p>
                <Link to={'/'}>Roles</Link>
            </div>
            <div className="flex flex-col items-center">
                <p>Icono</p>
                <Link to={'/'}>Equipos</Link>
            </div>
            <div className="flex flex-col items-center">
                <p>Icono</p>
                <Link to={'/'}>Formulario</Link>
            </div>
        </div>
    )
}

export default Toolbar
