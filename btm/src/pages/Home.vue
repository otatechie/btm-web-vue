<script setup>
import { ref, onMounted } from 'vue'

const partners = ref([
    { name: 'Emirates Airlines', logo: '/images/emirate-logo.png' },
    { name: 'Qatar Airways', logo: '/images/qatar-logo.png' },
    { name: 'Lufthansa', logo: '/images/lufthansa-logo.png' },
    { name: 'British Airways', logo: '/images/ba-logo.png' },
    { name: 'Air France', logo: '/images/air-france-logo.png' },
    { name: 'Delta Airlines', logo: '/images/delta-logo.png' },
    { name: 'Kenya Airways', logo: '/images/kenya-logo.png' },
    { name: 'Ethiopian Airlines', logo: '/images/ethiopain-logo.png' },
    { name: 'South African Airways', logo: '/images/south-logo.png' },
    { name: 'ASKY Airlines', logo: '/images/asky-logo.png' },
    { name: 'RwandAir', logo: '/images/rwanda-logo.png' },
    { name: 'Turkish Airlines', logo: '/images/turkish-logo.png' }
])

// Parallax effect for hero section
const handleScroll = () => {
    const heroSection = document.getElementById('hero-content')
    if (heroSection) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.5
        heroSection.style.backgroundPositionY = `${rate}px`
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
</script>

<template>
    <!-- Hero Section -->
    <section id="hero-content" class="relative w-full min-h-[70vh] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <!-- Background image and overlay -->
        <div class="absolute inset-0 z-0">
            <img src="/images/jumbo-image.webp"
                alt="Aerial view of beach with colorful umbrellas and boats in the water"
                class="w-full h-full object-cover object-center scale-105 animate-ken-burns transform transition-transform duration-[20s]" />
            <div class="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40 backdrop-blur-[0px]"></div>
            <!-- Decorative elements -->
            <div class="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <!-- Hero Content -->
            <div class="text-white mb-12 text-center max-w-4xl mx-auto animate-fade-in ">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white/95 to-white/90 text-transparent bg-clip-text animate-fade-in-up py-4" style="animation-delay: 400ms;">
                    Helping Africans<br class="hidden sm:block" /> Travel More
                </h1>
                <p class="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light px-4" style="animation-delay: 600ms;">
                    Let us turn your travel dreams into unforgettable, personalized adventures.
                </p>
            </div>

            <!-- Search Form -->
            <div class="max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up" style="animation-delay: 800ms;">
                <div class="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:bg-white/95 transition-all duration-300">
                    <!-- Form Header -->
                    <div class="mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <h2 class="text-gray-800 font-semibold">Find Your Next Adventure</h2>
                            <p class="text-gray-500 text-sm">Search flights, hotels, and more</p>
                        </div>
                        <!-- Form Toggle Tabs -->
                        <div class="flex p-1 bg-gray-50/80 rounded-lg space-x-1 text-sm">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm transition-all duration-200 hover:bg-blue-600 font-medium">Flights</button>
                            <button class="px-4 py-2 text-gray-600 hover:bg-white rounded-md transition-all duration-200">Hotels</button>
                            <button class="px-4 py-2 text-gray-600 hover:bg-white rounded-md transition-all duration-200">Cars</button>
                        </div>
                    </div>

                    <!-- Form Fields -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <!-- From Field -->
                        <div>
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="From where?"
                                    class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                            </div>
                        </div>

                        <!-- To Field -->
                        <div>
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Where to?"
                                    class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                            </div>
                        </div>

                        <!-- Date Field -->
                        <div>
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Select dates"
                                    class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                            </div>
                        </div>

                        <!-- Search Button -->
                        <div>
                            <button class="w-full h-12 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 group">
                                <span>Search Flights</span>
                                <svg class="w-5 h-5 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Services</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Discover seamless travel experiences with our
                    services</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <!-- Service Card 1 -->
                <div
                    class="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100">
                    <div class="p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">Flight Booking</h3>
                        <p class="text-white/90 text-sm">Find the best deals on flights worldwide with our premium
                            booking service.</p>
                    </div>
                </div>

                <!-- Service Card 2 -->
                <div
                    class="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-100">
                    <div class="p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">Hotel Booking</h3>
                        <p class="text-white/90 text-sm">Book luxurious accommodations at competitive prices around the
                            globe.</p>
                    </div>
                </div>

                <!-- Service Card 3 -->
                <div
                    class="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-100">
                    <div class="p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">Car Rental</h3>
                        <p class="text-white/90 text-sm">Rent vehicles for your journey with our convenient and
                            affordable options.</p>
                    </div>
                </div>

                <!-- Service Card 4 -->
                <div
                    class="bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-100">
                    <div class="p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">Travel Insurance</h3>
                        <p class="text-white/90 text-sm">Protect your journey with comprehensive travel insurance
                            packages.</p>
                    </div>
                </div>

                <!-- Service Card 5 -->
                <div
                    class="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-100">
                    <div class="p-6 text-white">
                        <h3 class="text-xl font-semibold mb-2">Custom Packages</h3>
                        <p class="text-white/90 text-sm">Enjoy tailor-made travel experiences designed to match your
                            preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Jumbotron Section -->
    <section id="jumbotron-content">
        <div class="relative bg-white py-16 sm:py-24">
            <div class="absolute inset-y-0 right-0 hidden lg:block w-1/2 bg-gradient-to-l from-blue-50 to-transparent">
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-4 border border-gray-200 rounded-2xl">
                        <div class="relative group">
                            <img src="/images/travel-concept.webp"
                                alt="Illustration of suitcase surrounded by famous landmarks, representing travel concept."
                                class="rounded-2xl w-full object-cover transform transition duration-300 ">
                        </div>
                    </div>
                    <div>
                        <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p class="text-base font-medium leading-7 text-blue-600 uppercase tracking-wide">Who we are
                            </p>
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Effective
                                Travel Management Solutions For Your Business</h1>
                            <div class="max-w-xl">
                                <div class="mt-6 space-y-6 text-gray-600">
                                    <p class="relative pl-6"><span
                                            class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"></span>We use
                                        our vast pool of experience to carefully review, manage and provide strategic
                                        solutions for our clients.</p>
                                    <p class="relative pl-6"><span
                                            class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"></span>Compiling
                                        each fragment of your company's complicated travel scope may often seem like a
                                        daunting task.</p>
                                    <p class="relative pl-6"><span
                                            class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"></span>Our
                                        experts view it as their favourite type of puzzle. We deploy our experts to
                                        ensure that your company's travel-spend is not uncontrollably eroding margins
                                        and business growth plans are properly managed and achieved.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 flex border-t border-gray-100">
                            <router-link to="/about" class="group inline-flex items-center gap-2 text-base font-medium leading-7 text-blue-600 hover:text-blue-800 mt-5 transition-all duration-300">
                                Learn more about our company 
                                <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Partners Section -->
    <section id="partners-content" class="relative bg-white py-16 sm:py-24">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Trusted Partners</h2>
                <p class="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">Working with the best in the industry to serve you better</p>
            </div>
            
            <!-- Partner Logos Grid -->
            <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center">
                <div 
                    v-for="(partner, index) in partners" 
                    :key="index"
                    class="flex items-center justify-center p-4 group"
                >
                    <img 
                        :src="partner.logo" 
                        :alt="partner.name" 
                        class="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    >
                </div>
            </div>
        </div>
    </section>
</template>