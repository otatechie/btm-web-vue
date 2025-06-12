<script setup>
import { ref, onMounted } from 'vue';

const serviceHeadings = {
    'BTM Visa Assistance & Consultation Services': 'BTM Visa Assistance & Consultation Services',
    'Tourism Consultancy Services': 'Tourism Consultancy Services',
    'Hotel Booking Services': 'Hotel Booking Services',
    'Consultancy Services': 'Consultancy Services',
    'Airport Concierge & Transfer Services': 'Airport Concierge & Transfer Services',
    'Travel Advisory Services': 'Travel Advisory Services',
    'Group Travel & Airline Seat Blocking': 'Group Travel & Airline Seat Blocking',
};

const serviceImages = {
    'BTM Visa Assistance & Consultation Services': 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1000&auto=format&fit=crop',
    'Tourism Consultancy Services': 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/okhcxc9uoak6kde39qsv',
    'Hotel Booking Services': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop',
    'Consultancy Services': 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?q=80&w=1000&auto=format&fit=crop',
    'Airport Concierge & Transfer Services': 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/b0ytqemclwuu8vmxgl4x',
    'Travel Advisory Services': 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/bbo82cpyhsqmpzm1n1k8',
    'Group Travel & Airline Seat Blocking': 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/psexhvqza7xhlgnqxeiq',
};

const services = Object.keys(serviceHeadings).map(title => ({
    title,
    image: serviceImages[title]
}));

const showModal = ref(false);
const selectedService = ref(null);

onMounted(() => {
    // Get the service from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const serviceFromUrl = urlParams.get('service');
    
    if (serviceFromUrl) {
        // Find the matching service
        const service = services.find(s => s.title === serviceFromUrl);
        if (service) {
            selectedService.value = service;
            showModal.value = true;
        }
    }
});

const serviceDescriptions = {
    'BTM Visa Assistance & Consultation Services': `As part of our comprehensive range of offerings, we provide expert visa assistance and consultation through our dedicated BTM Visa Services. Our experienced in-house team is well-equipped to deliver professional, reliable, and efficient support on all matters relating to visa applications and immigration requirements. We are committed to guiding our clients through every step of the process with clarity and confidence.`,
    'Tourism Consultancy Services': `BTM's Tourism Consultancy Service offers expert guidance and strategic support to help clients successfully navigate the dynamic and complex tourism industry. Our consultancy provides tailored solutions, in-depth market analysis, and innovative strategies designed to enhance travel experiences, boost customer satisfaction, streamline travel program management, and ensure compliance with evolving industry trends and regulations.`,
    'Hotel Booking Services': `BTM offers a sophisticated and efficient hotel booking system designed to meet the diverse needs of our clients. Through our extensive directory, we provide access to a wide selection of hotels—ranging from local favorites to renowned international chains—ensuring options that suit every preference and budget. Over the years, we have cultivated strong partnerships with leading hotel brands globally, allowing us to consistently secure the best available rates. Our system searches across all major destinations to deliver deals that balance exceptional comfort with outstanding value.`,
    'Consultancy Services': `BTM offers comprehensive consultancy services across the Tourism, Travel, and Aviation sectors. Our expert team provides strategic guidance and tailored solutions to help clients navigate the complexities of these industries with confidence and clarity.\n\nTourism Consultancy: We deliver customized strategies, market insights, and operational support to enhance travel experiences, elevate customer satisfaction, and foster sustainable growth.\nTravel Consultancy: From corporate travel management to leisure planning, we offer data-driven advice and efficiency-focused solutions that streamline travel programs and optimize costs.\nAviation Consultancy: Leveraging deep industry knowledge, we support airlines, travel agencies, and aviation stakeholders with strategic planning, regulatory compliance, and operational best practices.`,
    'Airport Concierge & Transfer Services': `BTM offers a premium range of Airport Concierge and Transfer Services designed to ensure a seamless, stress-free travel experience from arrival to final destination. Our personalized concierge services include meet and greet, baggage assistance, fast-track security clearance, airport lounge access, and VIP terminal handling—delivering exceptional comfort and efficiency at every stage of your airport journey.\n\nIn addition, our Airport Transfer Services provide reliable, pre-arranged transportation from the airport to your preferred destination—whether a hotel, cruise port, business location, or local attraction. With a diverse fleet and flexible options, we tailor each transfer to meet the specific needs of individual travelers or groups.\n\nAt BTM, we combine professionalism, convenience, and attention to detail to enhance your airport experience and ground transportation with the highest standards of service.`,
    'Travel Advisory Services': `At BTM, we specialize in providing tailored travel advisory services for both corporate organizations and individual clients. Our goal is to support the development of efficient, cost-effective, and responsive travel programs aligned with each client's unique travel needs.\n\nThrough our structured subscription models, we offer expert guidance and real-time insights that help organizations streamline their travel operations. Our advisory services include detailed travel reporting and analytics—tracking key metrics such as travel time, booking patterns, and approval delays—to identify inefficiencies and reduce costly last-minute bookings.\n\nWith BTM's strategic travel advice, clients gain the clarity and control needed to optimize travel planning, improve decision-making, and ensure compliance with internal policies.`,
    'Group Travel & Airline Seat Blocking': `BTM offers specialized Group Travel and Airline Seat Blocking services for organizations planning travel for events, conferences, or large delegations. We manage end-to-end logistics, including bulk flight bookings and advance seat reservations, ensuring availability, cost-efficiency, and convenience. Our solutions are tailored to meet the specific needs of each group, with dedicated support every step of the way.`
};

function openModal(service) {
    selectedService.value = service;
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
    selectedService.value = null;
}
</script>

<template>
    <main class="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white fade-in">
        <div class="w-full flex flex-col items-center pt-12 px-4">
            <div class="w-full max-w-3xl text-center my-12">
                <h1 class="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-2 tracking-widest">Discover Our
                    Travel Services</h1>
                <div class="w-16 h-0.5 bg-blue-500 mx-auto mb-4" aria-hidden="true"></div>
                <p class="mt-2 text-base text-gray-500">Explore our array of services, including luxury accommodations,
                    seamless transportation arrangements, and expertly guided tours, whether you're dreaming of a
                    relaxing beach getaway, a cultural immersion, or a thrilling escapade.</p>
            </div>
        </div>
        <div class="h-px bg-gray-200 max-w-7xl mx-auto px-6" aria-hidden="true"></div>
        <section class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8" id="services" aria-labelledby="services-heading">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" role="list">
                <div v-for="service in services" :key="service.title"
                    class="relative rounded-xl overflow-hidden shadow-lg group h-64 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                    tabindex="0" role="listitem" :aria-label="service.title" @click="openModal(service)"
                    @keydown.enter="openModal(service)">
                    <img :src="service.image" :alt="service.title"
                        class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                        aria-hidden="true">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 class="text-md font-semibold text-white drop-shadow-lg mb-2">{{ service.title }}</h3>
                        <div class="h-0.5 w-12 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                            aria-hidden="true">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-50 border-t border-gray-100" aria-labelledby="cta-heading">
            <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div
                    class="relative isolate overflow-hidden bg-gray-900 px-6 py-16 text-center shadow-xl rounded-xl sm:px-16">
                    <h2 id="cta-heading"
                        class="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to
                        Start Your Journey?</h2>
                    <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let us help you plan your perfect
                        trip. Contact us today to discuss your travel dreams.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="tel:+233302743234" class="btn-primary !w-auto !h-auto text-sm font-semibold"
                            style="color:#fff;" aria-label="Contact Us by Phone">Contact Us</a>
                        <a href="mailto:info.gh@btmlimited.net" class="text-sm font-semibold leading-6 text-white"
                            aria-label="Email us at info.gh@btmlimited.net">Send us an email <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs transition-opacity duration-300"
            role="dialog" aria-modal="true"
            :aria-labelledby="selectedService ? `modal-title-${selectedService.title}` : 'modal-title'">
            <div class="relative w-full max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-0 sm:p-0 animate-modal-in">
                <button
                    class="absolute top-2 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 text-2xl font-medium shadow transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    @click="closeModal" aria-label="Close modal">&times;</button>
                <div class="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
                    <img v-if="selectedService?.image" :src="selectedService.image" :alt="selectedService.title"
                        class="w-full h-48 object-cover rounded-lg mb-6 border border-gray-100 shadow" />
                    <h2 :id="selectedService ? `modal-title-${selectedService.title}` : 'modal-title'"
                        class="text-xl font-semibold mb-2 text-gray-800 tracking-tight">
                        {{ serviceHeadings[selectedService?.title] || selectedService?.title }}
                    </h2>
                    <p class="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-4">
                        {{ serviceDescriptions[selectedService?.title] || `More details about ${selectedService?.title}
                        will go here.` }}
                    </p>
                    <div class="h-px bg-gray-100 max-w-7xl mx-auto px-6" aria-hidden="true"></div>
                    <div class="mt-6 flex justify-end">
                        <button
                            class="btn-primary !w-auto !h-auto px-8 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label="Book Now">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.3s ease;
}

@keyframes modal-in {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(40px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.animate-modal-in {
    animation: modal-in 0.3s cubic-bezier(.4, 0, .2, 1);
}
</style>
