


export default function Gallery() {
    const projects = [
        {
            title: "LawDoc AI",
            description: "AI-powered legal document assistant that helps users understand complex legal language through document upload and interactive chat.",
            image: "/images/LawDocAi.png",
            link: "https://github.com/abdkhan-git/lawdoc-ai",
            tags: ["Next.js", "OpenAI API", "PineconeDB", "AWS"],
            featured: true
        },
        {
            title: "Piggy United",
            description: "Full-featured banking simulation platform with transaction management, account history, and multi-account support.",
            image: "/images/piggyunited.jpeg",
            link: "https://github.com/MaggPerez/PiggyUnited-REACT",
            tags: ["React", "Firebase", "JavaScript", "CSS"]
        },
        {
            title: "Stock Synergy",
            description: "Comprehensive inventory management system for retail stores with analytics, inventory tracking, and sales floor data.",
            image: "/images/StockSynergy.jpeg",
            link: "#",
            tags: ["JavaFX", "Database", "Analytics", "UI/UX"]
        },
        {
            title: "Movie Mine",
            description: "Movie collection management system that organizes film data including sales information, release dates, and popularity metrics.",
            image: "/images/movie_mine.png",
            link: "#",
            tags: ["Database", "Management", "Analytics", "UI"]
        }
    ];

    return (
        <section id="MyProjects" className="text-gray-600 dark:text-white body-font py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container px-5 py-24 mx-auto max-w-7xl">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white">My Projects</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 dark:text-gray-300 text-lg">
                        A collection of projects showcasing my expertise in modern web technologies including React, TypeScript, Node.js, cloud platforms, and database management.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {projects.map((project, index) => (
                        <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                                <div className="relative mb-6 overflow-hidden rounded-xl">
                                    {project.link !== "#" ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <img 
                                                className="h-40 rounded-xl w-full object-cover object-center transition-transform duration-300 hover:scale-110" 
                                                src={project.image} 
                                                alt={project.title}
                                            />
                                        </a>
                                    ) : (
                                        <img 
                                            className="h-40 rounded-xl w-full object-cover object-center" 
                                            src={project.image} 
                                            alt={project.title}
                                        />
                                    )}
                                    {project.featured && (
                                        <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                                
                                {project.link !== "#" && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold transition-colors duration-200">
                                        View Project 
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}