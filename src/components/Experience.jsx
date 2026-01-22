import {EXPERIENCES} from "../constants/Content.jsx";
import DecryptedText from "./text-effect/DecryptedText.jsx";
import {ShadowText} from "./text-effect/Shadow.jsx";
import TrueFocus from "./text-effect/TrueFocus.jsx";
import {COLOR} from "../constants/UIConfig.jsx";

export const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                <ShadowText content="Experience"/>
            </h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-[var(--secondaryForeground-color)]">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - {" "}
                                <span className="text-sm">
                                    {experience.company}
                                </span>
                            </h6>
                            <div className="mb-4">
                                <DecryptedText
                                    text={experience.description}
                                />
                            </div>
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
                ))}
            </div>
        </div>
    )
}