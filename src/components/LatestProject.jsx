import React from 'react'

function LatestProject() {
    return (
        <section id="latest-project" className="text-gray-600 dark:text-white body-font py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-5 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white">Latest Project</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My most recent work showcasing cutting-edge AI technology and modern web development practices.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img 
                                    className="w-full h-auto object-cover object-center rounded-2xl shadow-lg" 
                                    alt="LawDoc AI Screenshot" 
                                    src="/images/LawDocAi.png" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-600/10 rounded-2xl"></div>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-semibold mb-4">
                                    Featured Project
                                </span>
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    LawDoc AI
                                </h3>
                            </div>
                            
                            <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-8">
                                An AI-powered legal document assistant that revolutionizes how users interact with complex legal documents. 
                                Upload files and engage with our intelligent chatbot to get summaries, identify potential risks, and ask follow-up questions.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                                {["Next.js", "OpenAI API", "PineconeDB", "AWS", "Drizzle ORM", "Shadcn UI"].map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="https://github.com/abdkhan-git/lawdoc-ai" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View on GitHub
                                    </button>
                                </a>
                                <button className="w-full sm:w-auto inline-flex items-center justify-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 py-3 px-8 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestProject