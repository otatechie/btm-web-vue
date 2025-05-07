<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <section class="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
                <img src="https://www.btmghana.net/_app/immutable/assets/jumbo-image.BzyAVUnH.webp"
                    alt="Hero Background" class="w-full h-full object-cover scale-110 animate-subtle-zoom">
            </div>

            <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <div class="inline-block mb-6">
                    <span
                        class="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">Welcome
                        to Ghana</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-up">
                    Discover Ghana's Hidden Treasures
                </h1>
                <p
                    class="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-up animation-delay-200">
                    Experience the perfect blend of culture, adventure, and luxury with our curated tour packages
                </p>
                <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up animation-delay-400">
                    <a href="/tours/package/create"
                        class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#2563eb] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#1d4ed8]">
                        <span class="relative z-10">Start Your Journey</span>
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="/contact"
                        class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/30 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10">
                        <span class="relative z-10">Contact Us</span>
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <section class="container mx-auto px-6 sm:px-8 py-8 sm:py-12 antialiased max-w-5xl">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Popular Tour Packages</h2>
            <p class="text-md text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-center">Choose from our handpicked
                selection of
                unforgettable experiences</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Dubai Package -->
                <article
                    class="flex flex-col group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white shadow transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.025]">
                    <div class="relative">
                        <img class="w-full h-52 object-cover rounded-t-2xl"
                            src="https://res.cloudinary.com/djjoidnbp/image/upload/v1746444989/popup-agency-jJtqDVzozQY-unsplash_nyvcs9.jpg"
                            alt="Dubai Family Package (4 persons)">
                        <span
                            class="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Best
                            Seller</span>
                    </div>
                    <div class="flex-1 flex flex-col p-4">
                        <h3 class="text-lg font-bold text-gray-800 mt-2 mb-1">Dubai Family Package <span
                                class="font-normal">(4 persons)</span></h3>
                        <p class="text-gray-400 mb-3 leading-relaxed text-sm">Experience luxury and adventure in the
                            heart of Dubai</p>
                        <div class="flex gap-4 justify-center my-3">
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div class="border-t border-gray-100 my-4"></div>
                        <div class="text-center mb-2">
                            <p class="text-gray-500 text-xs font-medium">Starting From</p>
                            <p class="text-xl font-bold text-gray-700">USD 7500</p>
                            <p class="text-gray-400 text-xs mt-1">Per Person On Double Sharing Basis</p>
                        </div>
                        <a href="/tours/599c401e-219c-4578-81de-eee5dcd23d7a"
                            class="mt-4 block w-full py-3 text-center text-white bg-[#2563eb] rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2">
                            View more
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </article>
                <!-- Qatar Package -->
                <article
                    class="flex flex-col group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white shadow transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.025]">
                    <div class="relative">
                        <img class="w-full h-52 object-cover rounded-t-2xl"
                            src="https://res.cloudinary.com/djjoidnbp/image/upload/v1746445727/hongbin-1UF8ddEalwk-unsplash_mwqomm.jpg"
                            alt="Qatar Family Package (4 persons)">
                    </div>
                    <div class="flex-1 flex flex-col p-4">
                        <h3 class="text-lg font-bold text-gray-800 mt-2 mb-1">Qatar Family Package <span
                                class="font-normal">(4 persons)</span></h3>
                        <p class="text-gray-400 mb-3 leading-relaxed text-sm">Discover the wonders of modern Qatar</p>
                        <div class="flex gap-4 justify-center my-3">
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div class="border-t border-gray-100 my-4"></div>
                        <div class="text-center mb-2">
                            <p class="text-gray-500 text-xs font-medium">Starting From</p>
                            <p class="text-xl font-bold text-gray-700">USD 7800</p>
                            <p class="text-gray-400 text-xs mt-1">Per Person On Double Sharing Basis</p>
                        </div>
                        <a href="/tours/73b08ef5-6f0a-4ebb-b6cf-c0e1237883df"
                            class="mt-4 block w-full py-3 text-center text-white bg-[#2563eb] rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2">
                            View more
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </article>
                <!-- Kenya Package -->
                <article
                    class="flex flex-col group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white shadow transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.025]">
                    <div class="relative">
                        <img class="w-full h-52 object-cover rounded-t-2xl"
                            src="https://media.istockphoto.com/id/2070262465/photo/skyline-of-nairobi-east-with-ngara-district.webp?a=1&amp;b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=sWYoNpIT4lxt6utSDPlrPo0LOFnWo2EuxJq6QT_HfPw="
                            alt="Kenya Family Package (Mombasa and Nairobi) - Family of 4">
                    </div>
                    <div class="flex-1 flex flex-col p-4">
                        <h3 class="text-lg font-bold text-gray-800 mt-2 mb-1">Kenya Family Package (Mombasa and Nairobi)
                            <span class="font-normal">- Family of 4</span>
                        </h3>
                        <p class="text-gray-400 mb-3 leading-relaxed text-sm">Explore Mombasa and Nairobi's rich culture
                        </p>
                        <div class="flex gap-4 justify-center my-3">
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                            <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div class="border-t border-gray-100 my-4"></div>
                        <div class="text-center mb-2">
                            <p class="text-gray-500 text-xs font-medium">Starting From</p>
                            <p class="text-xl font-bold text-gray-700">USD 1775</p>
                            <p class="text-gray-400 text-xs mt-1">Per Person On Double Sharing Basis</p>
                        </div>
                        <a href="/tours/d355d93d-c80f-4e8a-8858-1d1ab7ec7d3d"
                            class="mt-4 block w-full py-3 text-center text-white bg-[#2563eb] rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2">
                            View more
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>
        </section>

        <!-- Destinations -->
        <section class="py-16 px-4 bg-white">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
                    <p class="text-md text-gray-600 max-w-2xl mx-auto">Explore our most sought-after locations in Ghana
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Tamale -->
                    <div
                        class="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-[#2563eb]/20 transition-all duration-300">
                        <div class="relative h-56 overflow-hidden">
                            <img src="https://www.btmghana.net/_app/immutable/assets/tamale.yi4dDZTj.webp" alt="Tamale"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute top-4 right-4">
                                <span
                                    class="px-3 py-1 bg-white/95 text-gray-800 rounded-full text-sm font-medium shadow-sm">Cultural
                                    Hub</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Tamale</h3>
                            <p class="text-gray-600 mb-4">Northern Ghana's vibrant cultural center</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs text-gray-500">Cultural Tours</span>
                                    <span class="text-gray-300">•</span>
                                    <span class="text-xs text-gray-500">Local Markets</span>
                                </div>
                                <a href="/destinations/tamale"
                                    class="text-[#2563eb] hover:text-[#1d4ed8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Explore
                                    <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Cape Coast -->
                    <div
                        class="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-[#2563eb]/20 transition-all duration-300">
                        <div class="relative h-56 overflow-hidden">
                            <img src="https://www.btmghana.net/_app/immutable/assets/castle_view.D631QD1r.webp"
                                alt="Cape Coast"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute top-4 right-4">
                                <span
                                    class="px-3 py-1 bg-white/95 text-gray-800 rounded-full text-sm font-medium shadow-sm">Historical</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Cape Coast</h3>
                            <p class="text-gray-600 mb-4">Historic coastal city with rich heritage</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs text-gray-500">Historical Tours</span>
                                    <span class="text-gray-300">•</span>
                                    <span class="text-xs text-gray-500">Coastal Views</span>
                                </div>
                                <a href="/destinations/cape-coast"
                                    class="text-[#2563eb] hover:text-[#1d4ed8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Explore
                                    <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Kumasi -->
                    <div
                        class="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-[#2563eb]/20 transition-all duration-300">
                        <div class="relative h-56 overflow-hidden">
                            <img src="https://www.btmghana.net/_app/immutable/assets/statue.B-2PvUWJ.webp" alt="Kumasi"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute top-4 right-4">
                                <span
                                    class="px-3 py-1 bg-white/95 text-gray-800 rounded-full text-sm font-medium shadow-sm">Garden
                                    City</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Kumasi</h3>
                            <p class="text-gray-600 mb-4">The heart of Ashanti culture</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs text-gray-500">Cultural Tours</span>
                                    <span class="text-gray-300">•</span>
                                    <span class="text-xs text-gray-500">Historical Sites</span>
                                </div>
                                <a href="/destinations/kumasi"
                                    class="text-[#2563eb] hover:text-[#1d4ed8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Explore
                                    <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-5xl mx-auto px-6 sm:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium travel services</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white bg-[#2563eb] rounded-xl">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                                <p class="text-gray-600">Round-the-clock assistance for all your travel needs, ensuring a seamless experience from booking to return.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white bg-[#2563eb] rounded-xl">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Secure Booking</h3>
                                <p class="text-gray-600">Safe and secure payment processing with industry-leading encryption and fraud protection.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white bg-[#2563eb] rounded-xl">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Expert Guides</h3>
                                <p class="text-gray-600">Professional and knowledgeable tour guides with years of experience in local culture and history.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white bg-[#2563eb] rounded-xl">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Best Value</h3>
                                <p class="text-gray-600">Competitive prices with premium experiences, ensuring you get the most out of your travel investment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.perspective {
    perspective: 2000px;
}

.preserve-3d {
    transform-style: preserve-3d;
}

.backface-hidden {
    backface-visibility: hidden;
}

.rotate-y-180 {
    transform: rotateY(180deg);
}

.animate-fade-up {
    animation: fadeUp 0.7s ease-out forwards;
}

.animation-delay-200 {
    animation-delay: 200ms;
}

.animation-delay-400 {
    animation-delay: 400ms;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

.animate-subtle-zoom {
    animation: subtleZoom 20s ease-in-out infinite alternate;
}

@keyframes subtleZoom {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}

/* Add smooth scrolling to the page */
html {
    scroll-behavior: smooth;
}
</style>
