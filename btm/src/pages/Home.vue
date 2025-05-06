<template>
  <!-- Hero Section -->
  <section id="hero-content" class="relative w-full min-h-[580px] py-8 sm:py-16 lg:py-24 overflow-hidden">
    <!-- Background image and overlay -->
    <div class="absolute inset-0 z-0">
      <img src="/images/jumbo-image.webp"
        alt="Aerial view of beach with colorful umbrellas and boats in the water"
        class="w-full h-full object-cover object-center scale-105 animate-ken-burns" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/45"></div>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Navigation Tabs -->
      <div class="flex gap-2 sm:gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 justify-start sm:justify-center -mx-4 sm:mx-0 px-4 sm:px-0 mt-10 sm:mt-0 no-scrollbar">
        <button class="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full text-white whitespace-nowrap hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base min-w-[120px] justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span>Stays</span>
        </button>
        <button class="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3 text-white hover:bg-white/20 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 text-sm sm:text-base min-w-[120px] justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span>Flights</span>
        </button>
        <button class="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3 text-white hover:bg-white/20 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 text-sm sm:text-base min-w-[120px] justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
          <span>Car rentals</span>
        </button>
      </div>
      <!-- Hero Content -->
      <div class="text-white mb-8 sm:mb-12 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Helping Africans Travel More</h1>
        <p class="text-xl text-white/90">Let us turn your travel dreams into unforgettable, personalized adventures.</p>
      </div>
      <!-- Search Form -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 transform hover:scale-[1.02] transition-all duration-300">
          <div class="flex-1 min-w-0">
            <div class="relative">
              <div class="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none text-gray-400">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input type="text" placeholder="Where are you going?" class="w-full h-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm sm:text-base" />
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="relative">
              <div class="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none text-gray-400">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input type="text" placeholder="Check-in — Check-out" class="w-full h-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm sm:text-base" />
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="relative">
              <div class="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none text-gray-400">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <button class="w-full h-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-lg bg-transparent text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm sm:text-base">2 adults · 0 children · 1 room</button>
            </div>
          </div>
          <button class="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base cursor-pointer">Search</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Jumbotron Section -->
  <section id="jumbotron-content">
    <div class="relative bg-white py-16 sm:py-24">
      <div class="absolute inset-y-0 right-0 hidden lg:block w-1/2 bg-gradient-to-l from-blue-50 to-transparent"></div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-4 border border-gray-200 rounded-2xl">
            <div class="relative group">
              <img src="/images/travel-concept.webp" alt="Illustration of suitcase surrounded by famous landmarks, representing travel concept." class="rounded-2xl w-full object-cover transform transition duration-300 ">
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p class="text-base font-medium leading-7 text-blue-600 uppercase tracking-wide">Who we are</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Effective Travel Management Solutions For Your Business</h1>
              <div class="max-w-xl">
                <div class="mt-6 space-y-6 text-gray-600">
                  <p class="relative pl-6"><span class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"></span>We use our vast pool of experience to carefully review, manage and provide strategic solutions for our clients.</p>
                  <p class="relative pl-6"><span class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"></span>Compiling each fragment of your company's complicated travel scope may often seem like a daunting task.</p>
                  <p class="relative pl-6"><span class="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600"></span>Our experts view it as their favourite type of puzzle. We deploy our experts to ensure that your company's travel-spend is not uncontrollably eroding margins and business growth plans are properly managed and achieved.</p>
                </div>
              </div>
            </div>
            <div class="mt-10 flex border-t border-gray-100">
              <a href="about.html" class="text-base font-medium leading-7 text-blue-500 hover:text-blue-800 mt-5">Learn more about our company <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners Section -->
  <section id="partners-content" class="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Partners</h2>
        <p class="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">Creating top travel experiences with industry leaders.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <!-- Partner logos go here (same as before) -->
      </div>
    </div>
  </section>
</template> 