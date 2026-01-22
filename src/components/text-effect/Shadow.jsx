import {useState} from "react";

export const ShadowText = ({content, fontsize, shadow}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            style={{
                fontFamily: '"Pixelify Sans", sans-serif',
                fontSize: fontsize,
                lineHeight: '80%',
                color: isHovered ? 'var(--primary-color)' : 'var(--foreground-color)',
                cursor: 'pointer',
                textShadow: isHovered ? 'none' : `${shadow || '2.5px'} ${shadow || '2.5px'} 0px var(--primary-color)`,
                transition: 'all 0.2s ease-in-out'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {content}
        </div>
    )
}

export const ShadowSvg = ({image, alt, shadow}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <img
            src={image}
            alt={alt}
            style={{
                filter: isHovered ? 'none': 'drop-shadow(2px 2px 0 #a684ff)',
                transition: 'all 0.2s ease-in-out'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    )
}

