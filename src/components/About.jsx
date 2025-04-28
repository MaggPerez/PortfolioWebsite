


export default function About() {
    return (
        <section id="about" class="text-gray-600 body-font h-screen">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">About me</h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p class="mb-8 leading-relaxed text-xl dark:text-white">Hi, my name is Magdaleno Perez and I am a software engineer who is passionate in developing projects that will come to life.</p>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="/images/code.svg" />
                </div>
            </div>
        </section>
    );
}