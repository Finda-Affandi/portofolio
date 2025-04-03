import {Tooltip} from "react-tooltip";

export const Button = ({content}) => {
    return (
        <div className="flex justify-center">
            <button className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[var(--primary-color)] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[var(--foreground-color)] border-2 border-[var(--primary-color)] group-hover:bg-[var(--primary-color)]"></span>
                <span className="relative flex items-center justify-center text-[var(--primary-color)] group-hover:text-[var(--foreground-color)]">
                    {content}
                </span>
            </button>
        </div>
    )
}

export const IconTransButton = ({ idle, hover, tooltipId, tooltip }) => {
    return (
        <div className="flex justify-center">
            <button className="relative inline-block px-4 py-4 font-medium group cursor-pointer" data-tooltip-id={tooltipId}>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[var(--primary-color)] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[var(--foreground-color)] border-2 border-[var(--primary-color)] group-hover:bg-[var(--primary-color)]"></span>
                <span className="relative flex items-center justify-center text-[var(--primary-color)] group-hover:text-[var(--foreground-color)]">
                  <span className="block group-hover:hidden">{idle}</span>
                  <span className="hidden group-hover:block">{hover}</span>
                </span>
            </button>
            {tooltipId !== '' ? <Tooltip className="custom-tooltip"  id={tooltipId} content={tooltip} /> : null}
        </div>
    );
};