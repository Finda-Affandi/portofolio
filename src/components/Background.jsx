import {COLOR} from "../constants/UIConfig";
import Squares from "./effect/BackgroundEffect.jsx";

export const Background = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Squares Background */}
            <Squares
                speed={0.5}
                squareSize={40}
                direction="up"  // Set your preferred direction
                borderColor={COLOR.idleButton}  // Use your primary color or define in UIConfig
                hoverFillColor={COLOR.secondary}  // Use your foreground color or define in UIConfig
            />
            {/* Any additional content you want to overlay */}

        </div>
    )
}