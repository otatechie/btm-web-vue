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
        description: 'Experience the magic of Dubai with your family! This 6-day adventure includes a luxurious stay, thrilling desert safari, iconic city tours, and unforgettable dining experiences—all designed for family fun and comfort.',
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
            'https://images.unsplash.com/photo-1526495124232-a04e1849168c'
        ],
        price: 'USD 7500',
        duration: '5 nights',
        groupSize: '2-6 people',
        includes: [
            'Flight arrangements',
            'Luxury hotel accommodation',
            'Private car transfers',
            'Guided sightseeing tours',
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
            'Wild Wadi Water Park',
            'Dubai Mall & Aquarium',
            'Traditional Dinner Experience'
        ],
        validityInfo: 'Travel valid throughout the year. Rates subject to availability and may change without prior notice. Rates are per person sharing.',
        hotelOptions: [
            {
                name: 'Burj Al Arab',
                price: 'USD 8500'
            },
            {
                name: 'Atlantis The Palm',
                price: 'USD 7500'
            },
            {
                name: 'Jumeirah Beach Hotel',
                price: 'USD 6500'
            }
        ]
    },

    {
        slug: 'qatar-family-package',
        title: 'Qatar Family Package',
        description: 'Treat your family to 5 nights of beachfront bliss in a 5-star seaview chalet. Enjoy a thrilling desert safari, explore Doha\'s top museums, and shop in style. Flights, visa, transfers, and daily breakfast included—plus protocol service for a smooth trip. All for $7,800 per family of 4. Pure comfort, culture, and adventure in one unforgettable getaway!',
        fullDescription: `Experience the perfect blend of tradition and modernity in Qatar. This comprehensive family package includes:

• 5-star beachfront seaview chalet accommodation
• Desert safari and dune bashing
• Dhow cruise with dinner
• Visit to Museum of Islamic Art
• Souq Waqif exploration
• Katara Cultural Village tour
• The Pearl-Qatar visit
• All transfers and guided tours
• Protocol service for smooth travel
• Visa assistance and processing`,
        image: 'https://res.cloudinary.com/djjoidnbp/image/upload/v1746445727/hongbin-1UF8ddEalwk-unsplash_mwqomm.jpg',
        gallery: [
            'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46',
            'https://images.unsplash.com/photo-1565849980697-25ef80573146'
        ],
        price: 'USD 7800',
        duration: '5 nights',
        groupSize: 'Family of 4',
        includes: [
            'Flight arrangements',
            '5-star beachfront accommodation',
            'Private car transfers',
            'Guided sightseeing tours',
            'Daily breakfast',
            'Desert safari',
            'Cultural tours',
            'Visa assistance',
            'Protocol service',
            'Airport transfers',
            'Expert guide'
        ],
        highlights: [
            'Beachfront Seaview Chalet',
            'Desert Safari Adventure',
            'Cultural Heritage Tours',
            'Museum of Islamic Art',
            'Souq Waqif Experience',
            'The Pearl-Qatar Visit'
        ],
        validityInfo: 'Travel valid throughout the year. Package price is for a family of 4. Rates subject to availability and may change without prior notice.',
        hotelOptions: [
            {
                name: 'Seaview Chalet - Premium',
                price: 'USD 7800'
            },
            {
                name: 'Seaview Chalet - Deluxe',
                price: 'USD 8500'
            }
        ]
    },

    {
        slug: 'kenya-family-package',
        title: 'Kenya Family Package (Mombasa and Nairobi)',
        description: 'Explore wild Nairobi and sunny Mombasa in 6 unforgettable days. Safari at Nairobi National Park, feed giraffes, feast at Carnivore, snorkel with dolphins, and splash around Wild Waters Mombasa. Flights, hotels, meals & transfers—all covered. Just pack your bags and make memories that last a lifetime!',
        fullDescription: `Discover the magic of Kenya with this family-friendly adventure package. Experience includes:

• Mixed accommodation in Nairobi and Mombasa
• Nairobi National Park safari
• Giraffe Centre visit
• Carnivore Restaurant experience
• Mombasa Old Town tour
• Dolphin snorkeling adventure
• Wild Waters Mombasa entry
• Fort Jesus exploration
• Traditional dinner experiences
• Cultural village visits
• All meals included
• Private transfers throughout`,
        image: 'https://media.istockphoto.com/id/2070262465/photo/skyline-of-nairobi-east-with-ngara-district.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWYoNpIT4lxt6utSDPlrPo0LOFnWo2EuxJq6QT_HfPw=',
        gallery: [
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
            'https://images.unsplash.com/photo-1523805009345-7448845a9e53'
        ],
        price: 'USD 1775',
        duration: '5 nights',
        groupSize: '2-10 people',
        includes: [
            'Flight arrangements',
            'Mixed accommodation in Nairobi and Mombasa',
            'Private car transfers',
            'Guided sightseeing tours',
            'Safari experience',
            'Cultural tours',
            'Beach activities',
            'All meals included',
            'Local transport',
            'Park entrance fees',
            'Activity fees'
        ],
        highlights: [
            'Nairobi National Park Safari',
            'Giraffe Centre Visit',
            'Carnivore Restaurant Experience',
            'Dolphin Snorkeling',
            'Wild Waters Mombasa',
            'Fort Jesus Exploration'
        ],
        validityInfo: 'Travel valid throughout the year. Rates subject to availability and may change without prior notice. Rates are per person sharing.',
        hotelOptions: [
            {
                name: 'Nairobi - Sarova Stanley',
                price: 'USD 1775'
            },
            {
                name: 'Mombasa - Voyager Beach Resort',
                price: 'USD 1775'
            }
        ]
    },
    {
        slug: 'beat-the-clock-mediterranean',
        title: 'Beat the Clock Mediterranean',
        description: 'Experience the best of Greece and Turkey in this enchanting Mediterranean cruise',
        fullDescription: `Set sail on an unforgettable Mediterranean journey starting June 27th, 2025, exploring the most iconic destinations in Greece and Turkey. This carefully crafted itinerary takes you through:

• Athens (Piraeus), Greece - Starting point
• Santorini, Greece - Famous for its stunning caldera views
• Ephesus (Kusadasi), Turkey - Ancient historical marvel
• Istanbul, Turkey - Where East meets West
• Mykonos, Greece - Iconic white-washed paradise
• Athens (Piraeus), Greece - Return

Experience the perfect blend of ancient history, stunning landscapes, and Mediterranean charm. Your journey includes comfortable Oceanview Stateroom accommodation, ensuring beautiful sea views throughout your voyage.

All your needs are taken care of with:
• Comprehensive dining options
• Exciting entertainment programs
• Various onboard activities
• All gratuities included
• Port charges and taxes covered

This is your chance to explore the Mediterranean's most beautiful destinations while enjoying the comfort and luxury of modern cruising.`,
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1533105079780-92b9be482077',
            'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713'
        ],
        price: 'USD 1422',
        duration: '7 days',
        groupSize: 'Oceanview Stateroom',
        includes: [
            'Oceanview Stateroom accommodation',
            'All dining options',
            'Entertainment & activities',
            'Gratuities',
            'Taxes and fees',
            'Port charges'
        ],
        highlights: [
            'Athens Exploration',
            'Santorini Sunset Views',
            'Ancient Ephesus Tour',
            'Istanbul Discovery',
            'Mykonos Island Experience'
        ]
    },

    {
        slug: 'odyssey-of-the-seas',
        title: 'Odyssey of the Seas',
        description: 'Experience luxury Mediterranean cruising at its finest',
        fullDescription: `Embark on an unforgettable Mediterranean journey aboard the magnificent Odyssey of the Seas from August 18th - 24th, 2025. This 7-night cruise experience takes you through the most beautiful destinations in the Mediterranean, including:

• Rome (Civitavecchia), Italy
• Santorini, Greece
• Ephesus, Turkey
• Naples, Italy
• Return to Rome (Civitavecchia), Italy

Each destination offers unique experiences, from ancient historical sites to breathtaking coastal views. Your journey includes:

• Luxury cabin accommodation for 7 nights
• More than 10 meals daily featuring world-class cuisine
• Exciting entertainment including Broadway shows
• Pool side movie nights under the stars
• Room service available until 10pm
• All taxes and port charges included
`,
        image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1548574505-5e239809ee19'
        ],
        price: 'USD 1670',
        duration: '7 nights',
        groupSize: 'Various cabin options',
        includes: [
            '7 Night\'s Accommodation on board',
            'More than 10 meals daily',
            'Pool Side Movie Night',
            'Broadway Shows',
            'Room service until 10pm',
            'Taxes and port charges',
            'Visa application assistance',
            'Flight booking assistance'
        ],
        highlights: [
            'Rome & Civitavecchia',
            'Santorini Island',
            'Ancient Ephesus',
            'Naples Exploration',
            'Luxury Cruising'
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
            'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe'
        ],
        price: 'USD 700',
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
    },
    {
        slug: 'cape-town-escape',
        title: 'Cape Town Escape',
        description: 'Experience the perfect blend of nature, history, and culture in Cape Town',
        fullDescription: `Embark on a carefully curated 5-day adventure through the vibrant city of Cape Town — a destination where natural beauty, rich history, and unforgettable experiences come together.

Enjoy 4 nights of comfortable accommodation with daily breakfast, private airport transfers, and expertly guided tours that bring the city's charm to life.

Highlights Include:
• Cape Town City Tour
Stroll through the heart of the city, explore historic landmarks, and ascend the iconic Table Mountain via cable car for panoramic views.

• V&A Waterfront Visit
Immerse yourself in Cape Town's dynamic waterfront district, filled with shopping, dining, and entertainment options.

• Full-Day Cape Peninsula Tour
Journey to the scenic Cape of Good Hope, meet the adorable penguins at Boulders Beach, and enjoy awe-inspiring views along the coastline.

• Half-Day Winelands Tour
Unwind among lush vineyards and indulge in a premium wine tasting experience in one of South Africa's most celebrated wine regions.

Whether you're drawn by nature, culture, or cuisine, this package delivers a perfect balance of relaxation and exploration.`,
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1580060839134-75a5edca2e99',
            'https://images.unsplash.com/photo-1546026423-cc4642628d2b'
        ],
        price: 'USD 630',
        duration: '5 days / 4 nights',
        groupSize: 'Flexible',
        includes: [
            '4 nights accommodation',
            'Daily breakfast',
            'Return private airport transfers',
            'Cape Town City Tour',
            'Table Mountain cable car ride',
            'V&A Waterfront visit',
            'Full-day Cape Peninsula Tour',
            'Half-day Winelands Tour with wine tasting'
        ],
        highlights: [
            'Table Mountain Experience',
            'V&A Waterfront Visit',
            'Cape Peninsula Tour',
            'Winelands Wine Tasting'
        ],
        validityInfo: 'Travel valid for March – May & September – November 2025. Rates subject to availability and may change without prior notice.',
        hotelOptions: [
            {
                name: 'Lagoon Beach Hotel & Spa',
                price: 'USD 790'
            },
            {
                name: 'Holiday Inn Express Cape Town City Centre',
                price: 'USD 650'
            },
            {
                name: 'Capetonian Hotel',
                price: 'USD 630'
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
                <ol class="flex items-center" itemscope itemtype="https://schema.org/BreadcrumbList">
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
                            <span itemprop="name" class="text-xs">{{ tour.title }}</span>
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
                            <span class="px-2 py-1 bg-blue-600/90 text-white rounded-full text-xs font-medium">{{
                                tour.duration }}</span>
                            <span v-if="['dubai-family-package', 'qatar-family-package', 'kenya-family-package'].includes(tour.slug)" class="flex items-center gap-1 bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                                <svg class="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9l-4.243 4.243a1 1 0 01-1.414 0L5.05 13.95a7 7 0 010-9.9zm4.95 2.45a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd" />
                                </svg>
                                Family Package
                            </span>
                            <span v-else class="flex items-center gap-1 bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                                <svg class="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                                Popular
                            </span>
                        </div>
                        <h1 class="text-4xl font-bold text-white mb-4 leading-tight">{{ tour.title }}</h1>
                        <p class="text-lg text-white/90 max-w-3xl">{{ tour.description }}</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- Tour Overview -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Overview
                        </h2>
                        <p class="text-gray-600 whitespace-pre-line leading-relaxed">{{ tour.description }}</p>
                        <p class="text-gray-600 whitespace-pre-line leading-relaxed mt-4">{{ tour.fullDescription }}</p>
                    </div>

                    <!-- Itinerary -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Itinerary
                        </h2>
                        <div class="space-y-6">
                            <div v-for="(highlight, index) in tour.highlights" :key="highlight"
                                class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-blue-600 font-semibold">{{ index + 1 }}</span>
                                </div>
                                <div>
                                    <h3 class="font-medium text-gray-900">{{ highlight }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Inclusions -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Inclusions
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="item in tour.includes" :key="item"
                                class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span class="text-gray-700">{{ item }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Terms & Conditions -->
                    <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Terms & Conditions
                        </h2>
                        <div class="space-y-6">
                            <!-- Validity Information -->
                            <div v-if="tour.validityInfo" class="bg-gray-50 rounded-lg p-6">
                                <h3 class="font-semibold text-gray-900 mb-3">Validity</h3>
                                <p class="text-gray-600">{{ tour.validityInfo }}</p>
                            </div>

                            <!-- Hotel Options -->
                            <div v-if="tour.hotelOptions" class="bg-gray-50 rounded-lg p-6">
                                <h3 class="font-semibold text-gray-900 mb-3">Accommodation Options</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div v-for="hotel in tour.hotelOptions" :key="hotel.name"
                                        class="flex justify-between items-center p-3 bg-white rounded">
                                        <span class="text-gray-700">{{ hotel.name }}</span>
                                        <span class="text-blue-600 font-semibold">{{ hotel.price }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- General Terms -->
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h3 class="font-semibold text-gray-900 mb-3">General Terms</h3>
                                <ul class="list-disc list-inside space-y-2 text-gray-600">
                                    <li>All prices are subject to availability and may change without prior notice</li>
                                    <li>Prices are per person sharing unless otherwise stated</li>
                                    <li>Booking confirmation is subject to availability at the time of booking</li>
                                    <li>Special requests are subject to availability and cannot be guaranteed</li>
                                    <li>Travel insurance is recommended for all travelers</li>
                                </ul>
                            </div>
                        </div>
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
                </div>

                <!-- Sidebar -->
                <div class="lg:col-span-1">
                    <!-- Booking Card -->
                    <div class="bg-white rounded-xl shadow-lg p-8 sticky top-8">
                        <div class="text-center mb-8 pb-6 border-b border-gray-100">
                            <p class="text-sm text-gray-500 uppercase tracking-wide font-medium">Starting from</p>
                            <p class="text-3xl font-bold text-gray-700 my-2">{{ tour.price }}</p>
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

            <!-- Mobile Fixed Booking Bar -->
            <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div class="flex items-center justify-between max-w-7xl mx-auto">
                    <div class="flex flex-col">
                        <span class="text-sm text-gray-500">Starting from</span>
                        <span class="text-xl font-bold text-gray-900">{{ tour.price }}</span>
                    </div>
                    <button class="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Add padding to the bottom of the page on mobile to account for fixed booking bar */
@media (max-width: 1023px) {
    main {
        padding-bottom: 5rem;
    }
}
</style>