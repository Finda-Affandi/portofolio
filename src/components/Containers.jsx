import {Navbar} from "./Navbar";
import {Hero} from "./Hero";
import {About} from "./About.jsx";
import {Technologies} from "./Technologies.jsx";
import {Experience} from "./Experience.jsx";

export const Container = () => {

    return (
        <div className="container mx-auto px-8">
            <Navbar/>
            <Hero/>
            <About/>
            <Technologies/>
            <Experience/>
        </div>
    )
}