import { Link } from "react-router-dom"
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsPersonVcard } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbNotes } from 'react-icons/tb';


const Toolbar = () => {
    return (
        <div className="bg-navBackground flex justify-between items-center py-3 px-5 h-20 border-t-2">
            <Link to={'/'} className="flex flex-col items-center text-2xl text-textPrimary gap-y-1">
                <LuLayoutDashboard/>
                <p className="text-xs">Dashboard</p>
            </Link>
            <Link to={'/'} className="flex flex-col items-center text-2xl text-textPrimary gap-y-1">
                <BsPersonVcard/>
                <p className="text-xs">Roles</p>
            </Link>
            <Link to={'/'} className="flex flex-col items-center text-2xl text-textPrimary gap-y-1">
                <FaPeopleGroup/>
                <p className="text-xs">Equipos</p>
            </Link>
            <Link to={'/'} className="flex flex-col items-center text-2xl text-textPrimary gap-y-1">
                <TbNotes/>
                <p className="text-xs">Formulario</p>
            </Link>
        </div>
    )
}

export default Toolbar
