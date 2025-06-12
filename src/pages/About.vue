<template>
    <main class="relative min-h-screen bg-neutral-50 fade-in">
        <section class="w-full flex flex-col items-center pt-12 px-4" aria-labelledby="about-heading">
            <header class="w-full max-w-3xl text-center my-12">
                <h1 id="about-heading"
                    class="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-2 tracking-widest">We Take Care Of
                    Your Travel Needs</h1>
                <div class="w-16 h-0.5 bg-blue-500 mx-auto mb-4" aria-hidden="true"></div>
                <p class="mt-2 text-base text-gray-500">Who we are</p>
            </header>
        </section>

        <section class="w-full flex justify-center pb-10 px-4" aria-labelledby="company-info">
            <div class="w-full max-w-4xl">
                <div class="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
                    <p class="flex-1 min-w-[260px] text-gray-600 text-md leading-relaxed">
                        Business Travel Management (BTM) Limited, is a member of the GHI Assets ltd group which houses
                        several brands including but not limited to; Emirates Holidays, Sky Logistics Ltd and Rwandair.
                        BTM Ltd was incorporated in 1998, and is an ISO 8001:2015 accredited agent as well as being
                        accredited by I.A.T.A. (International Air Transport Association).
                    </p>
                    <p class="flex-1 min-w-[260px] text-gray-600 text-md leading-relaxed">
                        In July 1999, the company which specialises in comprehensive travel management, corporate
                        services and logistics for businesses, became the top provider of corporate travel management,
                        B2B logistic solutions, and the pacesetter in the application of technology and innovative
                        travel management in Nigeria. BTM Ltd quickly expanded to service clients throughout West &
                        Central Africa.
                    </p>
                </div>

                <div class="w-full flex justify-center mb-6">
                    <div class="w-2/3 h-0.5 bg-gradient-to-r from-blue-200 via-gray-200 to-green-200 rounded-full"
                        aria-hidden="true"></div>
                </div>
            </div>
        </section>

        <section class="mb-10" aria-labelledby="values-heading">
            <h2 id="values-heading"
                class="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-2 tracking-tight">Our Values</h2>
            <p class="text-center text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
                The guiding principles that shape our culture and drive our actions define who we are, how we work, and
                what we stand for.
            </p>
            <div class="overflow-x-auto pb-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-1 sm:px-2 gap-4" role="list"
                    aria-label="Company values">
                    <article
                        class="bg-white rounded-lg p-6 flex flex-col items-center border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        tabindex="0">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3"
                            aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-7 h-7 text-blue-500">
                                <path
                                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-base text-gray-800 mb-1">Dedication</h3>
                        <div class="w-6 h-1 bg-gray-200 rounded-full mb-2" aria-hidden="true"></div>
                        <p class="text-gray-500 text-center text-sm">We go extraordinary lengths to get our customers
                            what they want.</p>
                    </article>
                    <article
                        class="bg-white rounded-lg p-6 flex flex-col items-center border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        tabindex="0">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3"
                            aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-7 h-7 text-blue-500">
                                <path fill-rule="evenodd"
                                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                                    clip-rule="evenodd" />
                                <path
                                    d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-base text-gray-800 mb-1">Consideration</h3>
                        <div class="w-6 h-1 bg-gray-200 rounded-full mb-2" aria-hidden="true"></div>
                        <p class="text-gray-500 text-center text-sm">With an outstanding suite of products, we ensure
                            everyone is treated with care.</p>
                    </article>
                    <article
                        class="bg-white rounded-lg p-6 flex flex-col items-center border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        tabindex="0">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3"
                            aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-7 h-7 text-blue-500">
                                <path fill-rule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-base text-gray-800 mb-1">Customer-Centricity</h3>
                        <div class="w-6 h-1 bg-gray-200 rounded-full mb-2" aria-hidden="true"></div>
                        <p class="text-gray-500 text-center text-sm">We understand what modern, successful businesses
                            expect and deliver accordingly.</p>
                    </article>
                    <article
                        class="bg-white rounded-lg p-6 flex flex-col items-center border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        tabindex="0">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3"
                            aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-7 h-7 text-blue-500">
                                <path fill-rule="evenodd"
                                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-base text-gray-800 mb-1">Reliability</h3>
                        <div class="w-6 h-1 bg-gray-200 rounded-full mb-2" aria-hidden="true"></div>
                        <p class="text-gray-500 text-center text-sm">Getting corporate travelers to where they want to
                            be, safely and on time.</p>
                    </article>
                    <article
                        class="bg-white rounded-lg p-6 flex flex-col items-center border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        tabindex="0">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3"
                            aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-7 h-7 text-blue-500">
                                <path fill-rule="evenodd"
                                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-base text-gray-800 mb-1">Trusted</h3>
                        <div class="w-6 h-1 bg-gray-200 rounded-full mb-2" aria-hidden="true"></div>
                        <p class="text-gray-500 text-center text-sm">Trust us to seamlessly fit together the pieces of
                            your travel program.</p>
                    </article>
                    <article
                        class="bg-white rounded-lg p-6 flex flex-col items-center border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        tabindex="0">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-3"
                            aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-7 h-7 text-blue-500">
                                <path
                                    d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                                <path
                                    d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-base text-gray-800 mb-1">Adaptability</h3>
                        <div class="w-6 h-1 bg-gray-200 rounded-full mb-2" aria-hidden="true"></div>
                        <p class="text-gray-500 text-center text-sm">Providing flexible, user-friendly technologies to
                            streamline bookings and payments.</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="bg-white py-16" aria-labelledby="leadership-heading">
            <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div class="max-w-2xl mx-auto">
                    <h2 id="leadership-heading"
                        class="text-3xl font-semibold font-display tracking-tight text-gray-800 sm:text-4xl">Our
                        leadership</h2>
                    <p class="mt-3 text-md leading-6 text-gray-500">Meet the team driving our success.</p>
                </div>
                <ul class="xl:col-span-2 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16" role="list"
                    aria-label="Leadership team">
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-24 w-24 rounded-full object-cover border border-gray-200"
                                src="https://www.btmghana.net/_app/immutable/assets/lola.BNJGfSIO.jpg" width="80"
                                height="80" alt="Lola Adefope" />
                            <div>
                                <h3 class="text-sm font-medium leading-7 tracking-tight text-gray-800">Ms. Lola
                                    Adefope</h3>
                                <p class="text-sm font-medium leading-6 text-gray-500">Managing Director</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center gap-x-6">
                            <img class="h-24 w-24 rounded-full object-cover border border-gray-200"
                                src="/images/nii.jpeg" width="80"
                                height="80" alt="Ademola Adefarasin" />
                            <div>
                                <h3 class="text-sm font-medium leading-7 tracking-tight text-gray-800">Mr. Nii 
                                    Anyetei Akofio-Sowah</h3>
                                <p class="text-sm font-medium leading-6 text-gray-500">Country Manager</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style>
@keyframes fadein {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadein {
    animation: fadein 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-card {
    background: transparent;
    width: 100%;
    height: 260px;
    perspective: 1000px;
    outline: none;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
}

.flip-card:focus .flip-card-inner,
.flip-card:hover .flip-card-inner,
.flip-card:active .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flip-card-back {
    transform: rotateY(180deg);
}

@media (max-width: 640px) {
    .flip-card {
        height: 220px;
    }
}

.fade-in-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.fade-in-card:nth-child(1) {
    animation-delay: 0.1s;
}

.fade-in-card:nth-child(2) {
    animation-delay: 0.2s;
}

.fade-in-card:nth-child(3) {
    animation-delay: 0.3s;
}

.fade-in-card:nth-child(4) {
    animation-delay: 0.4s;
}

.fade-in-card:nth-child(5) {
    animation-delay: 0.5s;
}

.fade-in-card:nth-child(6) {
    animation-delay: 0.6s;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: none;
    }
}

.ripple-parent {
    position: relative;
    overflow: hidden;
}

.ripple-parent:active .ripple {
    animation: ripple-effect 0.5s linear;
}

.ripple {
    position: absolute;
    border-radius: 9999px;
    transform: scale(0);
    background: rgba(59, 130, 246, 0.2);
    pointer-events: none;
}

@keyframes ripple-effect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>

<script>
export default {
    mounted() {
        document.querySelectorAll('.ripple-parent').forEach(card => {
            card.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = card.getBoundingClientRect();
                ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
                ripple.style.left = (e.clientX - rect.left - rect.width / 2) + rect.width / 2 + 'px';
                ripple.style.top = (e.clientY - rect.top - rect.height / 2) + rect.height / 2 + 'px';
                card.appendChild(ripple);
                ripple.addEventListener('animationend', () => ripple.remove());
            });
        });
    }
}
</script>