import {COLOR} from "../constants/UIConfig";

export const Background = () => {
    return (
        <div
            style={{
                background: COLOR.background,
                backgroundImage: `linear-gradient(to right, ${COLOR.idleButton} 1px, transparent 1px),
                      linear-gradient(to bottom, ${COLOR.idleButton} 1px, transparent 1px)`,
                backgroundSize: "6rem 4rem"
            }}
            className="absolute inset-0 -z-10 h-full w-full">
            <div
                style={{
                    backgroundImage: `radial-gradient(circle 800px at 100% 200px, ${COLOR.background} 1%, transparent)`,
                }}
                className="absolute bottom-0 left-0 right-0 top-0">
            </div>
        </div>
    )
}