import logo from "../assets/io.png"
import {Button} from "./Button.jsx";

export const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Logo" className="w-20 h-auto" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4">
                <Button text="Reach Out"/>
            </div>
        </nav>
    )
}