// Test Button down & up on a Link 

import { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';
import { Link } from "react-router-dom";

export default function Test() {
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
                <div>
                    <Link to={'/'}>ti 02</Link>
                    <button onClick={toggleMenu}>{isOpen ? <BiSolidChevronUp/> : <BiSolidChevronDown/>} </button>
                    {isOpen && (
                        <ul>
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                        </ul>
                    )}
                </div>
                <Link to={'/'}>ti 03</Link>
            </div>
        </div>
    )
}
