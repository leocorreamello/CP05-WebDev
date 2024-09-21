import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-purple-800 flex text-white justify-around h-14 items-center">
                <div>
                    <h1 className="font-bold">Leonardo Mello</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/sobre">Sobre</NavLink></li>
                        <li><NavLink to="/projetos">Projetos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}