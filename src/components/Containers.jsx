import {Navbar} from "./Navbar";
import {Hero} from "./Hero";

export const Container = () => {


    return (
        <div className="container mx-auto px-8">
            <Navbar/>
            <Hero/>
        </div>
    )
}