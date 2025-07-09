import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 text-gray-600 dark:text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-6xl">
                <a href="/" className="flex title-font font-bold items-center text-gray-900 dark:text-white mb-4 md:mb-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-white" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                    <span className="ml-3 text-xl font-bold">Magdaleno Perez</span>
                </a>
                <nav className="md:mr-auto md:ml-8 md:py-1 flex flex-wrap items-center text-base justify-center font-medium">
                    <a href="#about" className="mr-8 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#latest-project" className="mr-8 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 relative group">
                        Latest Project
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#MyProjects" className="mr-8 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 relative group">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#contact" className="mr-8 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="https://github.com/MaggPerez" target="_blank" rel="noopener noreferrer" className="mr-8 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 relative group">
                        GitHub
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>
                <DarkModeToggle />
            </div>
        </header>
    );
}

export default Navbar;