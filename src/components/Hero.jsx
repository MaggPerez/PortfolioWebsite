


function Hero() {
    return (
        <section className="relative text-gray-600 body-font min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl relative z-10">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <div className="relative">
                        <img className="object-cover object-center rounded-2xl shadow-2xl w-full h-auto" alt="Magdaleno Perez" src="/images/ProfilePic.webp" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-70"></div>
                    </div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="mb-6">
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-2">Hello, I'm</p>
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 dark:text-white leading-tight">
                            Magdaleno Perez
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                            Software Engineer
                        </h2>
                    </div>
                    <p className="mb-8 leading-relaxed text-lg text-gray-700 dark:text-gray-300 max-w-lg">
                        I create innovative web applications that solve real-world problems using modern technologies and best practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#MyProjects">
                            <button className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                View My Projects
                            </button>
                        </a>
                        <a href="https://github.com/MaggPerez" target="_blank">
                            <button className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 py-3 px-8 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                GitHub Profile
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;