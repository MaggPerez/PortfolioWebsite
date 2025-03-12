import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

function Home(){
    return(
        <div className="dark:bg-black">
            <Navbar />
            
            <Hero />
            <Gallery />

        </div>
    );
}

export default Home;