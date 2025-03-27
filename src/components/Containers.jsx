import {useRef, useState} from 'react';
import {Navbar} from "./Navbar";
import VariableProximity from "./VariableProximity.jsx";
import {NAME} from "../constants/Content.jsx";

export const Container = () => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="container mx-auto px-8">
            <Navbar/>
            <div
                ref={containerRef}
                style={{position: 'relative'}}
            >
                <VariableProximity
                    label={NAME}
                    className={'variable-proximity-demo '}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                    style={{
                        fontFamily: '"Pixelify Sans", sans-serif',
                        fontSize: '4rem',
                        color: isHovered ? 'var(--primary-color)' : 'var(--foreground-color)',
                        cursor: 'pointer',
                        textShadow: isHovered ? 'none' : '3px 3px 0px var(--primary-color)',
                        transition: 'all 0.2s ease-in-out'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </div>
        </div>
    )
}