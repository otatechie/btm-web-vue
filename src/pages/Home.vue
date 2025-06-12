<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'

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

const services = ref([
    { title: 'BTM Visa Assistance & Consultation Services', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Tourism Consultancy Services', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/okhcxc9uoak6kde39qsv' },
    { title: 'Hotel Booking Services', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Consultancy Services', image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Airport Concierge & Transfer Services', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/b0ytqemclwuu8vmxgl4x' },
    { title: 'Travel Advisory Services', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/bbo82cpyhsqmpzm1n1k8' },
    { title: 'Group Travel & Airline Seat Blocking', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/psexhvqza7xhlgnqxeiq' }
])

const activeTab = ref('flights')

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

let servicesScrollRef = ref(null)
const scrollAmount = 200
const atStart = ref(true)
const atEnd = ref(false)

const updateArrowState = () => {
    const el = servicesScrollRef.value
    if (!el) return
    atStart.value = el.scrollLeft <= 0
    atEnd.value = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 2
}

const scrollLeft = () => {
    if (servicesScrollRef.value) {
        servicesScrollRef.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        nextTick(() => setTimeout(updateArrowState, 350))
    }
}

const scrollRight = () => {
    if (servicesScrollRef.value) {
        servicesScrollRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        nextTick(() => setTimeout(updateArrowState, 350))
    }
}

onMounted(() => {
    if (servicesScrollRef.value) {
        servicesScrollRef.value.addEventListener('scroll', updateArrowState)
        updateArrowState()
    }
})

const handleTabChange = (tab) => {
    activeTab.value = tab
}

// Add form data refs
const flightData = ref({
    from: '',
    to: '',
    dates: ''
})

const hotelData = ref({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '1'
})
</script>

<template>
    <main>
        <section id="hero-content" class="relative w-full min-h-[70vh] py-16 sm:py-20 lg:py-24 overflow-hidden"
            aria-labelledby="hero-heading">
            <div class="absolute inset-0 z-0">
                <img src="/images/jumbo-image.webp"
                    alt="Aerial view of beach with colorful umbrellas and boats in the water"
                    class="w-full h-full object-cover object-center scale-105 animate-ken-burns transition-transform duration-[20s]" />
                <div class="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"
                    aria-hidden="true"></div>
                <div class="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay"
                    aria-hidden="true"></div>
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"
                    aria-hidden="true"></div>
            </div>
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div class="text-white mb-12 text-center max-w-4xl mx-auto animate-fade-in">
                    <h1 id="hero-heading"
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white/95 to-white/90 text-transparent bg-clip-text animate-fade-in-up py-4"
                        style="animation-delay: 400ms;">
                        Helping Africans<br class="hidden sm:block" /> Travel More
                    </h1>
                    <p class="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light px-4"
                        style="animation-delay: 600ms;">
                        Let us turn your travel dreams into unforgettable, personalized adventures.
                    </p>
                </div>
                <div class="max-w-4xl mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
                    style="animation-delay: 800ms;">
                    <div
                        class="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:bg-white/95 transition-all duration-300">
                        <div class="mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                            <div>
                                <h2 class="text-gray-800 font-semibold">{{ activeTab === 'flights' ? 'Find Your Next Adventure' : 'Find Your Perfect Stay' }}</h2>
                                <p class="text-gray-500 text-sm">{{ activeTab === 'flights' ? 'Search flights and more' : 'Search hotels and accommodations' }}</p>
                            </div>
                            <div class="flex p-1 bg-gray-50/80 rounded-lg space-x-4 text-sm" role="tablist"
                                aria-label="Search type">
                                <button
                                    @click="handleTabChange('flights')"
                                    :class="[
                                        'px-4 py-2 rounded-md shadow-sm transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                                        activeTab === 'flights' 
                                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                            : 'text-gray-600 hover:bg-white'
                                    ]"
                                    role="tab" 
                                    :aria-selected="activeTab === 'flights'" 
                                    aria-controls="flights-tab">Flights</button>
                                <button
                                    @click="handleTabChange('hotels')"
                                    :class="[
                                        'px-4 py-2 rounded-md shadow-sm transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                                        activeTab === 'hotels' 
                                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                            : 'text-gray-600 hover:bg-white'
                                    ]"
                                    role="tab" 
                                    :aria-selected="activeTab === 'hotels'" 
                                    aria-controls="hotels-tab">Hotels</button>
                            </div>
                        </div>
                        <form class="grid grid-cols-1 md:grid-cols-4 gap-4" aria-label="Search form">
                            <!-- Flight Search Fields -->
                            <template v-if="activeTab === 'flights'">
                                <div>
                                    <label for="from-field" class="sr-only">From where?</label>
                                    <div class="relative group">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <input id="from-field" v-model="flightData.from" type="text" placeholder="From where?"
                                            class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label for="to-field" class="sr-only">Where to?</label>
                                    <div class="relative group">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <input id="to-field" v-model="flightData.to" type="text" placeholder="Where to?"
                                            class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label for="date-field" class="sr-only">Select dates</label>
                                    <div class="relative group">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input id="date-field" v-model="flightData.dates" type="text" placeholder="Select dates"
                                            class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                                    </div>
                                </div>
                            </template>

                            <!-- Hotel Search Fields -->
                            <template v-else>
                                <div>
                                    <label for="location-field" class="sr-only">Where are you going?</label>
                                    <div class="relative group">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <input id="location-field" v-model="hotelData.location" type="text" placeholder="Where are you going?"
                                            class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label for="check-in-field" class="sr-only">Check-in date</label>
                                    <div class="relative group">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input id="check-in-field" v-model="hotelData.checkIn" type="text" placeholder="Check-in"
                                            class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label for="check-out-field" class="sr-only">Check-out date</label>
                                    <div class="relative group">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input id="check-out-field" v-model="hotelData.checkOut" type="text" placeholder="Check-out"
                                            class="pl-10 w-full h-12 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-800 text-sm placeholder:text-gray-400" />
                                    </div>
                                </div>
                            </template>

                            <div>
                                <button type="submit"
                                    class="btn-primary group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    :aria-label="activeTab === 'flights' ? 'Search Flights' : 'Search Hotels'">
                                    <span>{{ activeTab === 'flights' ? 'Search Flights' : 'Search Hotels' }}</span>
                                    <svg class="w-5 h-5 transition-transform duration-200 transform group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-white" aria-labelledby="services-heading">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 id="services-heading" class="text-4xl font-bold text-gray-800 mb-4">Services</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">Discover seamless travel experiences with our
                        services</p>
                </div>
                <div class="relative">
                    <button @click="scrollLeft" :aria-label="'Scroll services left'" :disabled="atStart"
                        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-xl border border-blue-100 p-2 rounded-full hover:bg-blue-50 transition-all duration-300 md:block hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        :class="{ 'opacity-40 cursor-not-allowed': atStart, 'opacity-100': !atStart }"
                        style="box-shadow: 0 2px 8px 0 rgba(37,99,235,0.12);">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button @click="scrollRight" :aria-label="'Scroll services right'" :disabled="atEnd"
                        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-xl border border-blue-100 p-2 rounded-full hover:bg-blue-50 transition-all duration-300 md:block hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        :class="{ 'opacity-40 cursor-not-allowed': atEnd, 'opacity-100': !atEnd }"
                        style="box-shadow: 0 2px 8px 0 rgba(37,99,235,0.12);">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div ref="servicesScrollRef"
                        class="services-scroll-container flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
                        aria-label="Our services" tabindex="0">
                        <a v-for="service in services" :key="service.title" :href="`/services?service=${encodeURIComponent(service.title)}`" tabindex="0"
                            class="flex-none w-[180px] snap-start group outline-none focus:ring-2 focus:ring-blue-400 rounded-xl transition-shadow">
                            <div
                                class="relative rounded-xl overflow-hidden shadow-md h-[200px] cursor-pointer transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-active:scale-95 group-focus:shadow-2xl">
                                <img :src="service.image" :alt="service.title"
                                    class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-active:scale-100" />
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-800/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                                    aria-hidden="true"></div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 class="text-xs font-semibold text-white drop-shadow mb-1 leading-tight">{{
                                        service.title }}</h3>
                                    <div class="h-0.5 w-8 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                        aria-hidden="true"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex justify-center gap-6 mt-2 md:hidden">
                        <button @click="scrollLeft" :aria-label="'Scroll services left'" :disabled="atStart"
                            class="bg-white/90 shadow-xl border border-blue-100 p-2 rounded-full hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            :class="{ 'opacity-40 cursor-not-allowed': atStart, 'opacity-100': !atStart }"
                            style="box-shadow: 0 2px 8px 0 rgba(37,99,235,0.12);">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button @click="scrollRight" :aria-label="'Scroll services right'" :disabled="atEnd"
                            class="bg-white/90 shadow-xl border border-blue-100 p-2 rounded-full hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            :class="{ 'opacity-40 cursor-not-allowed': atEnd, 'opacity-100': !atEnd }"
                            style="box-shadow: 0 2px 8px 0 rgba(37,99,235,0.12);">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex justify-center mt-6">
                        <a href="/services"
                            class="btn-primary !w-auto !h-auto px-8 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label="View all services">View all our services</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="jumbotron-content" aria-labelledby="about-heading">
            <div class="relative bg-white py-12 sm:py-12">
                <div class="absolute inset-y-0 right-0 hidden lg:block w-1/2 bg-gradient-to-t from-blue-50 "
                    aria-hidden="true"></div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div class="lg:pr-4 border border-gray-200 rounded-2xl">
                            <div class="relative group">
                                <img src="/images/travel-concept.webp"
                                    alt="Illustration of suitcase surrounded by famous landmarks, representing travel concept."
                                    class="rounded-2xl w-full object-cover transition duration-300">
                            </div>
                        </div>
                        <div>
                            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p class="text-base font-medium leading-7 text-blue-600 uppercase tracking-wide">Who we
                                    are</p>
                                <h2 id="about-heading"
                                    class="mt-2 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">Effective
                                    Travel Management Solutions For Your Business</h2>
                                <div class="max-w-xl">
                                    <div class="mt-6 space-y-6 text-gray-600">
                                        <p class="relative pl-6"><span
                                                class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"
                                                aria-hidden="true"></span>We use our vast pool of experience to
                                            carefully review, manage and provide strategic solutions for our clients.
                                        </p>
                                        <p class="relative pl-6"><span
                                                class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"
                                                aria-hidden="true"></span>Compiling each fragment of your company's
                                            complicated travel scope may often seem like a daunting task.</p>
                                        <p class="relative pl-6"><span
                                                class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"
                                                aria-hidden="true"></span>Our experts view it as their favourite type of
                                            puzzle. We deploy our experts to ensure that your company's travel-spend is
                                            not uncontrollably eroding margins and business growth plans are properly
                                            managed and achieved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="partners-content" class="relative bg-white py-16 sm:py-24" aria-labelledby="partners-heading">
            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 id="partners-heading" class="text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">Our
                        Trusted Partners</h2>
                    <p class="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">Working with the best in the
                        industry to serve you better</p>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center" role="list"
                    aria-label="Partner logos">
                    <div v-for="(partner, index) in partners" :key="index"
                        class="flex items-center justify-center p-4 group" role="listitem">
                        <img :src="partner.logo" :alt="partner.name"
                            class="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 filter grayscale group-hover:grayscale-0">
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.services-scroll-container {
    touch-action: pan-x;
    -webkit-overflow-scrolling: touch;
}
</style>