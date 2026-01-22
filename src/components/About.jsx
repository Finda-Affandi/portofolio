import {ABOUT_TEXT, HERO_CONTENT} from "../constants/Content.jsx";
import DecryptedText from "./text-effect/DecryptedText.jsx";
import {CustomImage} from "./CustomImage.jsx";
import {ShadowText} from "./text-effect/Shadow.jsx";

export const About = () => {
    return (
        <div className="w-full h-full flex items-center">
            <div className="w-full">
                <h2 className="mb-12 text-center text-3xl sm:text-4xl lg:text-5xl">
                    <ShadowText content="About Me"/>
                </h2>
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                        <div className="flex items-center justify-center">
                            <CustomImage imageSource="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <div className="max-w-xl text-center lg:text-left">
                                <DecryptedText
                                    text={ABOUT_TEXT}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}