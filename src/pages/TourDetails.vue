<script setup>
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    slug: {
        type: String,
        required: true
    }
});

const tourPackages = [
    {
        slug: 'dubai-family-package',
        title: 'Dubai Family Package',
        description: 'Experience luxury and adventure in the heart of Dubai',
        fullDescription: `Embark on an unforgettable family adventure in Dubai, where modern luxury meets Arabian tradition. This carefully curated package includes:

• 5-star luxury hotel accommodation
• Desert safari with BBQ dinner
• Visit to Burj Khalifa observation deck
• Dubai Mall and Aquarium access
• Dubai Marina dinner cruise
• Wild Wadi Water Park entry
• Private airport transfers
• Daily breakfast and selected meals`,
        image: 'https://res.cloudinary.com/djjoidnbp/image/upload/v1746444989/popup-agency-jJtqDVzozQY-unsplash_nyvcs9.jpg',
        gallery: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
            'https://images.unsplash.com/photo-1526495124232-a04e1849168c',
            'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b',
        ],
        price: 'USD 7500',
        duration: '7 days / 6 nights',
        groupSize: '2-6 people',
        includes: [
            'All accommodations',
            'Daily breakfast',
            'Selected activities',
            'Airport transfers',
            'Local guide',
            'All entrance fees'
        ],
        highlights: [
            'Desert Safari Adventure',
            'Burj Khalifa Experience',
            'Dubai Marina Cruise',
            'Wild Wadi Water Park'
        ]
    },
    
    {
        slug: 'qatar-family-package',
        title: 'Qatar Family Package',
        description: 'Discover the wonders of modern Qatar',
        fullDescription: `Experience the perfect blend of tradition and modernity in Qatar. This comprehensive family package includes:

• Luxury hotel stay in Doha
• Desert safari and dune bashing
• Dhow cruise with dinner
• Visit to Museum of Islamic Art
• Souq Waqif exploration
• Katara Cultural Village tour
• The Pearl-Qatar visit
• All transfers and guided tours`,
        image: 'https://res.cloudinary.com/djjoidnbp/image/upload/v1746445727/hongbin-1UF8ddEalwk-unsplash_mwqomm.jpg',
        gallery: [
            'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46',
            'https://images.unsplash.com/photo-1565849980697-25ef80573146',
            'https://images.unsplash.com/photo-1563911892437-1feda0179e1b'
        ],
        price: 'USD 7800',
        duration: '6 days / 5 nights',
        groupSize: '2-8 people',
        includes: [
            'Luxury accommodation',
            'Daily breakfast',
            'Desert safari',
            'Cultural tours',
            'Airport transfers',
            'Expert guide'
        ],
        highlights: [
            'Desert Adventure',
            'Cultural Heritage',
            'Modern Architecture',
            'Local Cuisine'
        ]
    },

    {
        slug: 'kenya-family-package',
        title: 'Kenya Family Package',
        description: 'Explore Mombasa and Nairobi\'s rich culture',
        fullDescription: `Discover the magic of Kenya with this family-friendly adventure package. Experience includes:

• Mixed accommodation in Nairobi and Mombasa
• Nairobi National Park safari
• Giraffe Centre visit
• Mombasa Old Town tour
• Beach activities
• Fort Jesus exploration
• Traditional dinner experiences
• Cultural village visits`,
        image: 'https://media.istockphoto.com/id/2070262465/photo/skyline-of-nairobi-east-with-ngara-district.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWYoNpIT4lxt6utSDPlrPo0LOFnWo2EuxJq6QT_HfPw=',
        gallery: [
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
            'https://images.unsplash.com/photo-1523805009345-7448845a9e53',
            'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5'
        ],
        price: 'USD 1775',
        duration: '8 days / 7 nights',
        groupSize: '2-10 people',
        includes: [
            'Mixed accommodation',
            'Safari experience',
            'Cultural tours',
            'Beach activities',
            'Local transport',
            'Some meals'
        ],
        highlights: [
            'Wildlife Safari',
            'Beach Experience',
            'Cultural Tours',
            'City Exploration'
        ]
    },
    {
        slug: 'odyssey-of-the-seas',
        title: 'Odyssey of the Seas',
        description: 'Experience luxury cruising at its finest',
        fullDescription: `Embark on an unforgettable journey aboard the magnificent Odyssey of the Seas. This cruise experience includes:

• Luxury cabin accommodation
• All-inclusive dining
• World-class entertainment
• Pool and spa access
• Fitness center access
• Multiple port stops
• Shore excursion options
• Evening shows and activities`,
        image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1548574505-5e239809ee19',
            'https://images.unsplash.com/photo-1544473244-f6895e69ad8b',
            'https://images.unsplash.com/photo-1544473244-7c0a46c65a6e'
        ],
        price: 'USD 1670',
        duration: '7 days / 6 nights',
        groupSize: 'Various cabin options',
        includes: [
            'Cabin accommodation',
            'All meals',
            'Entertainment',
            'Port charges',
            'Basic beverages',
            'Ship activities'
        ],
        highlights: [
            'Luxury Cruising',
            'Fine Dining',
            'Entertainment',
            'Port Excursions'
        ]
    },

    {
        slug: 'zanzibar-tropical-dreams',
        title: 'Tropical Dreams Come True in Zanzibar',
        description: 'Unwind in paradise with this carefully designed 5-day getaway to Zanzibar',
        fullDescription: `Unwind in paradise with this carefully designed 5-day getaway to Zanzibar, where white-sand beaches, vibrant culture, and breathtaking ocean adventures await. This experience blends comfort, relaxation, and discovery for the perfect tropical holiday.

Enjoy 4 nights of comfortable accommodation at either the serene Zanzibar Bay Resort or the stunning My Blue Hotel, complete with daily breakfast and private return airport transfers to ensure a seamless arrival and departure.`,
        image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f',
            'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe',
            'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe'
        ],
        price: 'From USD 700',
        duration: '5 days / 4 nights',
        groupSize: 'Flexible',
        includes: [
            'Accommodation in Zanzibar',
            'Daily breakfast',
            'Return airport transfers',
            'Meet & Greet service',
            'Stone Town & Spice Farm tour',
            'Mnemba Island tour with Dolphin trekking',
            'All taxes (excl. infrastructure fee)'
        ],
        highlights: [
            'Stone Town UNESCO Site',
            'Spice Plantations',
            'Mnemba Island Snorkeling',
            'Dolphin Watching'
        ],
        validityInfo: 'Travel valid from 1st to 31st August 2025. Rates subject to availability and may change without prior notice. Rates are per person sharing.',
        hotelOptions: [
            {
                name: 'Zanzibar Bay Resort',
                price: 'USD 700'
            },
            {
                name: 'My Blue Hotel',
                price: 'USD 1010'
            }
        ]
    }
];

const tour = computed(() => {
    return tourPackages.find(t => t.slug === props.slug);
});

// Update page title when tour changes
watchEffect(() => {
    if (tour.value) {
        document.title = `${tour.value.title} - BTM Ghana Tours`;
    } else {
        document.title = 'Tour Not Found - BTM Ghana Tours';
    }
});
</script>

<template>
    <main v-if="tour" class="min-h-screen bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Breadcrumb -->
            <nav class="flex my-8" aria-label="Breadcrumb">
                <ol class="flex items-center space-x-1" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="flex items-center" itemprop="itemListElement" itemscope
                        itemtype="https://schema.org/ListItem">
                        <a href="/"
                            class="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center gap-1 group transition-colors"
                            itemprop="item">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span itemprop="name">Home</span>
                        </a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="flex items-center">
                        <svg class="h-5 w-5 text-gray-300 mx-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <a href="/tours"
                            class="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center gap-1 group transition-colors"
                            itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span itemprop="name">Tours</span>
                            <meta itemprop="position" content="2" />
                        </a>
                    </li>
                    <li class="flex items-center">
                        <svg class="h-5 w-5 text-gray-300 mx-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm font-medium text-gray-700 flex items-center gap-1"
                            itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span itemprop="name">{{ tour.title }}</span>
                            <meta itemprop="position" content="3" />
                        </span>
                    </li>
                </ol>
            </nav>

            <!-- Tour Header -->
            <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-8 group">
                <div class="relative h-[500px]">
                    <img :src="tour.image" :alt="tour.title"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-12">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="px-3 py-1 bg-blue-600/90 text-white rounded-full text-sm font-medium">{{
                                tour.duration }}</span>
                            <span class="px-3 py-1 bg-blue-600/90 text-white rounded-full text-sm font-medium">{{
                                tour.groupSize }}</span>
                        </div>
                        <h1 class="text-5xl font-bold text-white mb-4 leading-tight">{{ tour.title }}</h1>
                        <p class="text-xl text-white/90 max-w-3xl">{{ tour.description }}</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- Tour Description -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Tour Overview
                        </h2>
                        <p class="text-gray-600 whitespace-pre-line leading-relaxed">{{ tour.fullDescription }}</p>
                    </div>

                    <!-- Gallery -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Gallery
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="(image, index) in tour.gallery" :key="index"
                                class="relative group overflow-hidden rounded-lg">
                                <img :src="image" :alt="`${tour.title} gallery image ${index + 1}`"
                                    class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                                <div
                                    class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Highlights -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Tour Highlights
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="highlight in tour.highlights" :key="highlight"
                                class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                                <div class="flex items-center gap-3 text-gray-700">
                                    <div
                                        class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="font-medium">{{ highlight }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Hotel Options -->
                    <div v-if="tour.hotelOptions" class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Accommodation Options
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="hotel in tour.hotelOptions" :key="hotel.name"
                                class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                                <h3 class="font-semibold text-lg text-gray-900 mb-2">{{ hotel.name }}</h3>
                                <p class="text-blue-600 font-bold">{{ hotel.price }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Validity Information -->
                    <div v-if="tour.validityInfo" class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Validity & Terms
                        </h2>
                        <p class="text-gray-600 whitespace-pre-line leading-relaxed">{{ tour.validityInfo }}</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="lg:col-span-1">
                    <!-- Booking Card -->
                    <div class="bg-white rounded-xl shadow-lg p-8 sticky top-8">
                        <div class="text-center mb-8 pb-6 border-b border-gray-100">
                            <p class="text-sm text-gray-500 uppercase tracking-wide font-medium">Starting from</p>
                            <p class="text-4xl font-bold text-gray-900 my-2">{{ tour.price }}</p>
                            <p class="text-sm text-gray-500">per person</p>
                        </div>

                        <div class="space-y-6 mb-8">
                            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <div
                                    class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500">Duration</p>
                                    <p class="font-medium text-gray-900">{{ tour.duration }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <div
                                    class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500">Group Size</p>
                                    <p class="font-medium text-gray-900">{{ tour.groupSize }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-100 pt-6 mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                What's Included
                            </h3>
                            <ul class="space-y-4">
                                <li v-for="item in tour.includes" :key="item"
                                    class="flex items-center gap-3 text-gray-600 group">
                                    <div
                                        class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                        <svg class="h-4 w-4 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="group-hover:text-gray-900 transition-colors">{{ item }}</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:translate-y-0">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>