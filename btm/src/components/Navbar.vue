<template>
    <header class="bg-white fixed inset-x-0 top-0 z-50 shadow-lg transition-shadow duration-300">
        <nav class="flex items-center justify-between p-3 lg:px-12" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">BTM</span>
                    <img class="h-8 w-auto" src="/images/btm-logo.png" width="32" height="32" alt="BTM logo">
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 cursor-pointer"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-16">
                <router-link to="/about"
                    class="text-sm font-medium leading-6 text-gray-800 hover:text-blue-600 transition-colors duration-200 uppercase"
                    exact-active-class="!text-blue-600 font-bold">About</router-link>
                <router-link to="/services"
                    class="text-sm font-medium leading-6 text-gray-800 hover:text-blue-600 transition-colors duration-200 uppercase"
                    exact-active-class="!text-blue-600 font-bold">Services</router-link>
                <div class="relative" ref="brandsDropdownRef">
                    <button type="button"
                        class="text-sm font-medium leading-6 text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center uppercase cursor-pointer"
                        @click="brandsDropdownOpen = !brandsDropdownOpen">
                        Our brands
                        <svg :class="['ml-2 h-4 w-4 fill-current transition-transform duration-300', { 'rotate-180': brandsDropdownOpen }]"
                            viewBox="0 0 20 20">
                            <path
                                d="M5.23 7.79a.75.75 0 011.06 0L10 11.47l3.71-3.68a.75.75 0 111.06 1.06l-4.24 4.2a.75.75 0 01-1.06 0L5.23 8.85a.75.75 0 010-1.06z" />
                        </svg>
                    </button>
                    <div v-show="brandsDropdownOpen"
                        class="absolute mt-2 w-48 bg-white shadow-lg rounded-sm py-2 z-10 transform origin-top transition-all duration-300">
                        <a href="https://www.btmholidays.com/" target="_blank"
                            class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 uppercase font-medium">BTM
                            Holidays</a>
                        <a href="https://www.journeyeasy.net/Login" target="_blank"
                            class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 uppercase font-medium">JourneyEasy</a>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 uppercase font-medium">TrekBuyFly</a>
                        <a href="https://marketplace.btmlimited.net/" target="_blank"
                            class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 uppercase font-medium">BTM
                            Marketplace</a>
                    </div>
                </div>
                <router-link to="/contact"
                    class="text-sm font-medium leading-6 text-gray-800 hover:text-blue-600 transition-colors duration-200 uppercase"
                    exact-active-class="!text-blue-600 font-bold">Contact</router-link>
                <router-link to="/tour"
                    class="text-sm font-medium leading-6 text-gray-800 hover:text-blue-600 transition-colors duration-200 uppercase"
                    exact-active-class="!text-blue-600 font-bold">Tour</router-link>
                <router-link to="/login"
                    class="text-sm font-medium leading-6 text-gray-800 hover:text-blue-600 transition-colors duration-200 uppercase"
                    exact-active-class="!text-blue-600 font-bold">Login</router-link>
            </div>
        </nav>
        <!-- Mobile menu -->
        <div v-show="mobileMenuOpen"
            class="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 transform transition-transform duration-300 ease-in-out">
            <div class="flex items-center justify-between">
                <a href="index.html" class="-m-1.5 p-1.5">
                    <span class="sr-only">BTM logo</span>
                    <img class="h-8 w-auto" src="/images/btm-logo.png" width="32" height="32" alt="BTM logo">
                </a>
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400 cursor-pointer"
                    @click="mobileMenuOpen = false">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="space-y-2 py-6">
                    <router-link to="/about"
                        class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase"
                        exact-active-class="!text-blue-600 font-bold">About</router-link>
                    <div>
                        <button type="button"
                            class="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase cursor-pointer"
                            @click="mobileBrandsDropdownOpen = !mobileBrandsDropdownOpen">
                            Our brands
                            <svg :class="['ml-2 h-4 w-4 transition-transform duration-300', { 'rotate-180': mobileBrandsDropdownOpen }]"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div v-show="mobileBrandsDropdownOpen" class="pl-4 py-2 space-y-2">
                            <a href="https://www.btmholidays.com/" target="_blank"
                                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase">BTM
                                Holidays</a>
                            <a href="https://www.journeyeasy.net/Login" target="_blank"
                                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase">JourneyEasy</a>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase">TrekBuyFly</a>
                            <a href="https://marketplace.btmlimited.net/" target="_blank"
                                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase">BTM
                                Marketplace</a>
                        </div>
                    </div>
                    <router-link to="/services"
                        class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase"
                        exact-active-class="!text-blue-600 font-bold">Services</router-link>
                    <router-link to="/contact"
                        class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase"
                        exact-active-class="!text-blue-600 font-bold">Contact</router-link>
                    <router-link to="/tour"
                        class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase"
                        exact-active-class="!text-blue-600 font-bold">Tour</router-link>
                    <router-link to="/login"
                        class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 uppercase"
                        exact-active-class="!text-blue-600 font-bold">Login</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const brandsDropdownOpen = ref(false)
const mobileMenuOpen = ref(false)
const mobileBrandsDropdownOpen = ref(false)
const brandsDropdownRef = ref(null)

function handleClickOutside(event) {
    if (brandsDropdownRef.value && !brandsDropdownRef.value.contains(event.target)) {
        brandsDropdownOpen.value = false
    }
}
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>
