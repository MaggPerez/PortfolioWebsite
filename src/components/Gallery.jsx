


export default function Gallery() {
    return (
        <section class="text-gray-600 dark:text-white body-font dark:bg-black">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">My Projects</h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">These are the projects that I have developed using React, JavaScript/Typescript, HTML/CSS, Tailwind CSS, JavaFX, Firebase and Microsoft Access.</p>
                </div>

                {/* First box */}
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 dark:bg-zinc-900 p-6 rounded-lg">
                            <a href="https://github.com/MaggPerez/PiggyUnited-REACT" target="_blank">
                            <img class="h-40 rounded w-full object-cover object-center mb-6 " src="https://dummyimage.com/720x400" alt="content"/>
                            <p className="text-center">View project</p>
                            </a>
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PROJECT</h3>
                                <h2 class="text-lg text-gray-900 dark:text-indigo-300 font-medium title-font mb-4">Piggy United</h2>
                                <p class="leading-relaxed text-base ">Bank simulation website where you can do transaction behaviors, view history, and manage various accounts.</p>
                        </div>
                    </div>

                    {/* Second box */}
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 dark:bg-zinc-900 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PROJECT</h3>
                                <h2 class="text-lg text-gray-900 dark:text-indigo-300 font-medium title-font mb-4">Stock Synergy</h2>
                                <p class="leading-relaxed text-base">Inventory management system for retail stores to help track analytics, inventory levels, and sales floor data.</p>
                        </div>
                    </div>

                    {/* Third box */}
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 dark:bg-zinc-900 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PROJECT</h3>
                                <h2 class="text-lg text-gray-900 dark:text-indigo-300 font-medium title-font mb-4">Movie Mine</h2>
                                <p class="leading-relaxed text-base">Movie sales management that gathers collections of famous movies along with their sales, name, and year released.</p>
                        </div>
                    </div>

                    {/* Fourth box */}
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 dark:bg-zinc-900 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PROJECT</h3>
                            <h2 class="text-lg text-gray-900 dark:text-indigo-300 font-medium title-font mb-4">Shape Sensei</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}