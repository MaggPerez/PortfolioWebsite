import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";

function Home(){
    return(
        <div className=" dark:bg-black">
            <Navbar />
            
            <Hero />
            <About />
            <Gallery />

        </div>
    );
}

export default Home;