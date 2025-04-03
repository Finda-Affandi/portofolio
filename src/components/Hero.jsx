import VariableProximity from "./text-effect/VariableProximity.jsx";
import {HERO_CONTENT, NAME, PROFESSION} from "../constants/Content.jsx";
import {useRef, useState} from "react";
import GradientText from "./text-effect/GradientText.jsx";
import {COLOR} from "../constants/UIConfig.jsx";
import DecryptedText from "./text-effect/DecryptedText.jsx";

export const Hero = () => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-40">
            <div className="flex flew-wrap">
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-col items-center lg:items-start">
                        <div
                            ref={containerRef}
                            style={{
                                position: 'relative'
                        }}
                        >
                            <VariableProximity
                                label={NAME}
                                className={'variable-proximity-demo '}
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={100}
                                falloff='gaussian'
                                style={{
                                    fontFamily: '"Pixelify Sans", sans-serif',
                                    fontSize: '5rem',
                                    lineHeight: '80%',
                                    color: isHovered ? 'var(--primary-color)' : 'var(--foreground-color)',
                                    cursor: 'pointer',
                                    textShadow: isHovered ? 'none' : '3px 3px 0px var(--primary-color)',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                        </div>
                        <span className="text-4xl mt-4">
                            <GradientText
                                colors={[COLOR.primary, COLOR.secondary, COLOR.primary, COLOR.secondary, COLOR.primary, COLOR.secondary, COLOR.primary]}
                                animationSpeed={4}
                                showBorder={false}
                            >
                              <b>{PROFESSION}</b>
                            </GradientText>
                        </span>
                        {/*<p className="max-w-xxl">{HERO_CONTENT}</p>*/}
                        <DecryptedText
                            text={HERO_CONTENT}
                        />
                    </div>
                </div>
                <div className="w-full lg:w1/4 lg:p-8">
                    <div className="flex justify-center">
                        <img src="https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Finda Affandi" className="w-120 h-auto -my-30"/>
                    </div>
                </div>
            </div>
        </div>
    )
}