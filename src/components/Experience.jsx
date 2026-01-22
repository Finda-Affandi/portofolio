import {EXPERIENCES} from "../constants/Content.jsx";
import DecryptedText from "./text-effect/DecryptedText.jsx";
import {ShadowText} from "./text-effect/Shadow.jsx";
import TrueFocus from "./text-effect/TrueFocus.jsx";
import {COLOR} from "../constants/UIConfig.jsx";

export const Experience = () => {
    return (
        <div className="w-full h-full flex items-center">
            <div className="w-full">
                <h2 className="mb-12 text-center text-3xl sm:text-4xl lg:text-5xl">
                    <ShadowText content="Experience"/>
                </h2>
                <div className="max-w-4xl mx-auto">
                    {EXPERIENCES.map((experience, index) => (
                        <div
                            key={index}
                            className="mb-8 flex flex-wrap lg:justify-center"
                        >
                            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                                <p className="text-sm text-[var(--secondaryForeground-color)] text-center lg:text-left">{experience.year}</p>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold text-center lg:text-left">
                                    {experience.role} - {" "}
                                    <span className="text-sm">
                                        {experience.company}
                                    </span>
                                </h6>
                                <div className="mb-4 text-center lg:text-left">
                                    <DecryptedText
                                        text={experience.description}
                                    />
                                </div>
                                <div className="flex justify-center lg:justify-start">
                                    <TrueFocus
                                        sentence={experience.technologies.join(' ')}
                                        manualMode={false}
                                        blurAmount={1}
                                        borderColor={COLOR.primary}
                                        animationDuration={2}
                                        pauseBetweenAnimations={1}
                                        startIndex={index + Math.floor(Math.random() * 4)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}