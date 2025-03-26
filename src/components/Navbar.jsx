import logo from "../assets/io.png"

export const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Logo" className="w-[1.5%] h-auto" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl"></div>
        </nav>
    )
}