export const Button = ({text}) => {
    return (
        <div className="flex justify-center">
            <button className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[var(--primary-color)] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[var(--foreground-color)] border-2 border-[var(--primary-color)] group-hover:bg-[var(--primary-color)]"></span>
                <span className="relative text-[var(--primary-color)] group-hover:text-[var(--foreground-color)]">
                    {text}
                </span>
            </button>
        </div>
    )
}