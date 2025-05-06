<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
	<Navbar />
	<main>
		<router-view />
	</main>
	<Footer />
</template>

<style>
@keyframes ken-burns {
    0% {
        transform: scale(1.05);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1.05);
    }
}
.animate-ken-burns {
    animation: ken-burns 20s infinite;
}
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.animate-fade-in {
    animation: fade-in 1s ease-out;
}
@media (max-width: 640px) {
    .animate-ken-burns {
        animation: none;
    }
}
/* Hide scrollbar but keep functionality */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.partner-card {
    perspective: 1000px;
}
.partner-card:hover img {
    transform: translateZ(20px);
}
@media (max-width: 640px) {
    .partner-card {
        perspective: none;
    }
}
</style>
