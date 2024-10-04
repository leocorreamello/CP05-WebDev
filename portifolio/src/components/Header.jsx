import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
import menu from "../../public/iconmenu.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-black fixed top-0 w-full flex text-white justify-between h-20 items-center text-2xl px-4 z-50">
                <div>
                    <img className="w-1/4" src={logo} alt="logo" />
                </div>
                <nav className="hidden lg:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink to="/" onClick={toggleMenu}>
                                Principal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" onClick={toggleMenu}>
                                Sobre mim
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projetos" onClick={toggleMenu}>
                                Projetos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <img src={menu} alt="icon-menu" className="w-10" />
                    </button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="lg:hidden bg-black text-white fixed top-20 w-full z-40">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <NavLink to="/" onClick={toggleMenu}>
                                Principal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" onClick={toggleMenu}>
                                Sobre mim
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projetos" onClick={toggleMenu}>
                                Projetos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}