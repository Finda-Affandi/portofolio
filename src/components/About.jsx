import {ABOUT_TEXT, HERO_CONTENT} from "../constants/Content.jsx";
import DecryptedText from "./text-effect/DecryptedText.jsx";
import {CustomImage} from "./CustomImage.jsx";
import {ShadowText} from "./text-effect/Shadow.jsx";

export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-10 text-center text-4xl">
                <ShadowText content="About Me"/>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <CustomImage imageSource="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <div className="my-2 max-w-xl py-6">
                            <DecryptedText
                                text={ABOUT_TEXT}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}