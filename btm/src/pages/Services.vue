<template>
    <section class="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white fade-in">
        <div class="w-full flex flex-col items-center pt-12 px-4">
            <div class="w-full max-w-3xl text-center my-12">
                <h2 class="text-2xl md:text-3xl font-bold uppercase text-gray-700 mb-2 tracking-widest">Discover Our
                    Travel Services</h2>
                <div class="w-16 h-0.5 bg-blue-500 mx-auto mb-4"></div>
                <p class="mt-2 text-base text-gray-500">Explore our array of services, including luxury accommodations,
                    seamless transportation arrangements, and expertly guided tours, whether you're dreaming of a
                    relaxing beach getaway, a cultural immersion, or a thrilling escapade.</p>
            </div>
        </div>
        <div class="w-full max-w-7xl mx-auto px-6">
            <div class="h-px bg-gray-200"></div>
        </div>
        <!-- Services Grid -->
        <div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div v-for="service in services" :key="service.title"
                    class="relative rounded-xl overflow-hidden shadow-lg group h-64 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img :src="service.image" :alt="service.title"
                        class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 class="text-md font-semibold text-white drop-shadow-lg mb-2">{{ service.title }}</h3>
                        <div
                            class="h-0.5 w-12 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gray-50 border-t border-gray-100">
            <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div
                    class="relative isolate overflow-hidden bg-gray-900 px-6 py-16 text-center shadow-xl rounded-xl sm:px-16">
                    <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to
                        Start Your Journey?</h2>
                    <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let us help you plan your perfect
                        trip. Contact us today to discuss your travel dreams.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="tel:+234163161009"
                            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contact
                            Us</a>
                        <a href="#services" class="text-sm font-semibold leading-6 text-white">Learn more <span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    { title: 'Aviation Consultancy', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/epqfsjnwqzzgrjfgog1i' },
    { title: 'Visa Assistance & Consultation', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/visa.DC6nRem0.webp' },
    { title: 'Tourism Consultancy', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/okhcxc9uoak6kde39qsv' },
    { title: 'Hotel & Accommodation', image: '/_app/immutable/assets/hotel-accomodation.WQEVyR5m.webp' },
    { title: 'Industrial Training', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/ykpnleajkaitlwue0wrf' },
    { title: 'Airport Concierge', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/b0ytqemclwuu8vmxgl4x' },
    { title: 'Security & Escort Services', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/bbo82cpyhsqmpzm1n1k8' },
    { title: 'SMB Travel Club', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/services/cgvvvq6zbtyocchra185' },
    { title: 'Holidays & Tours', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/b4v8hgpiucqkfrm1rsjs' },
    { title: 'Meeting & Event Management', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/services/blr4qenizcixuado29y9' },
    { title: 'Executive Jet Charter & Flight Clearance Services', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/services/mfiberxyzwnu9ajhd0wz' },
    { title: 'Destination Management', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/uno8youadfpye6hlw7le' },
    { title: 'Airport Transfers & Ground Transportation (Globally)', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/braxuh0grnf5l3btug7a' },
    { title: 'Travel Consultation & Advice', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/lbnhphsn3hjpv3zfywjy' },
    { title: 'Group Travel & Airline Seat Blocking', image: 'https://res.cloudinary.com/dafsjzwqf/image/upload/f_auto,q_auto/v1/BTM-Website/psexhvqza7xhlgnqxeiq' },
];
</script>
