import {Navbar} from "./Navbar";
import {Hero} from "./Hero";
import {About} from "./About.jsx";
import {Technologies} from "./Technologies.jsx";

export const Container = () => {


    return (
        <div className="container mx-auto px-8">
            <Navbar/>
            <Hero/>
            <About/>
            <Technologies/>
        </div>
    )
}