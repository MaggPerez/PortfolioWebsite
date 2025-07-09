import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import LatestProject from "../components/LatestProject";
import Contact from "../components/Contact";

function Home(){
    return(
        <div className="dark:bg-black">
            <Navbar />
            <main className="pt-20">
                <Hero />
                <About />
                <LatestProject />
                <Gallery />
                <Contact />
            </main>
        </div>
    );
}

export default Home;