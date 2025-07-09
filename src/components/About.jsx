


export default function About() {
    return (
        <section id="about" className="text-gray-600 body-font py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="w-full mb-8">
                        <h2 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white">About Me</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded mb-6"></div>
                    </div>
                    <p className="mb-6 leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                        Hi, I'm Magdaleno Perez, a passionate software engineer who specializes in creating innovative web applications that solve real-world problems.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                        With expertise in modern web technologies including React, JavaScript/TypeScript, and cloud platforms, I bring ideas to life through clean, efficient code and thoughtful user experiences.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">React</span>
                        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">TypeScript</span>
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Node.js</span>
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">AWS</span>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="relative">
                        <img className="object-cover object-center rounded-2xl shadow-2xl" alt="coding illustration" src="/images/code.svg" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-600/20 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}