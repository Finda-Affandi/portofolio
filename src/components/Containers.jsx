import {Navbar} from "./Navbar";
import {Hero} from "./Hero";
import {About} from "./About.jsx";
import {Technologies} from "./Technologies.jsx";
import {Experience} from "./Experience.jsx";

export const Container = () => {

    return (
        <div className="w-full">
            {/* Navbar - Fixed */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4 sm:px-8">
                    <Navbar/>
                </div>
            </div>

            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center justify-center pt-20">
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <Hero/>
                </div>
            </section>

            {/* About Section - Full Screen */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <About/>
                </div>
            </section>

            {/* Technologies Section - Full Screen */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <Technologies/>
                </div>
            </section>

            {/* Experience Section - Full Screen */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <Experience/>
                </div>
            </section>
        </div>
    )
}