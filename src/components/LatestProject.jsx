import React from 'react'

function LatestProject() {
    return (
        <section id="latest-project" class="text-gray-400 dark:bg-black body-font mb-14">

            {/* Latest Project section name */}
            <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                <div class="container mx-auto flex px-5 py-18 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">Latest Project</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <img className="lg:w-1/2 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/LawDocAi.png" />
                <div className="text-center lg:w-2/3 w-full">
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">Latest Project</h1> */}
                    {/* Image content */}
                    <h1 className='text-3xl text-indigo-400'>LawDoc AI</h1>
                    <p className="leading-relaxed my-5 text-gray-500 dark:text-white">In my recent project, I built a legal document assistant where users can upload files and interact with our LawDoc A.I chatbot to get summaries, identify potential risks, and ask follow-up questions.
                        Using Next.js, PineconeDB, AWS, Drizzle ORM, Shadcn UI, and the OpenAI API, I created a seamless platform that simplifies complex legal language and empowers users to understand their documents with ease.</p>
                    <div className="flex justify-center">
                        <a href="https://github.com/abdkhan-git/lawdoc-ai" target='_blank'><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">View on GitHub</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestProject