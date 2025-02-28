import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home(){
    return(
        <div className="h-screen dark:bg-black">
            <Navbar />
            
            <Hero />
        </div>
    );
}

export default Home;