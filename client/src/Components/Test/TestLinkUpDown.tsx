import { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const TestLinkUpDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div>
            <h1>Tests</h1>
            <hr />

            <div className="flex flex-col">
                <Link to={'/'}>ti 01</Link>
                <Link to={'/user'} onClick={toggleMenu} className="">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-x-5">
                            Administrar Equipos {isOpen ? <BiSolidChevronUp/> : <BiSolidChevronDown/>}
                        </div>
                        <div>
                            {isOpen && (
                                <ul>
                                    <li>Elemento 1</li>
                                    <li>Elemento 2</li>
                                    <li>Elemento 3</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </Link>
                <Link to={'/'}>ti 03</Link>
            </div>
        </div>
    )
}

export default TestLinkUpDown
