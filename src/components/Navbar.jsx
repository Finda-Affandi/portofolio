import logo from "../assets/io.png"
import {Button} from "./Button";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Logo" className="w-16 h-auto sm:w-20" />
            </div>
            <div className="flex items-center justify-center">
                <Button
                    content="Reach Out"
                />
            </div>
        </nav>
    )
}