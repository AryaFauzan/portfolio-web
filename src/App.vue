<script setup>
import { ref } from 'vue'
import { store } from './toggle.js'
import { Analytics } from '@vercel/analytics/vue'
const isMobileMenuOpen = ref(false)
</script>

<template>
  <div
    class="min-h-screen text-gray-200 font-sans flex flex-col relative pb-32 transition-colors duration-700"
  >
    <div class="fixed top-0 left-0 w-full h-[120vh] -z-10 bg-[#0a0a0a]">
      <div
        class="fixed top-0 left-0 w-full h-[120vh] bg-cover bg-[center_50%] bg-no-repeat transition-opacity duration-1000 ease-in-out"
        :class="store.activeUser === 'arya' ? 'opacity-100' : 'opacity-0'"
        style="background-image: url('/img/forest-bg.jpeg')"
      ></div>

      <div
        class="fixed top-0 left-0 w-full h-[120vh] bg-cover bg-bottom bg-no-repeat transition-opacity duration-1000 ease-in-out"
        :class="store.activeUser === 'arya' ? 'opacity-0' : 'opacity-100'"
        style="background-image: url('/img/sea-bg.jpeg')"
      ></div>

      <div
        class="fixed top-0 left-0 w-full h-[120vh] backdrop-blur-md transition-colors duration-1000"
        :class="store.activeUser === 'arya' ? 'bg-[#1a2e2a]/50' : 'bg-[#0f172a]/50'"
      ></div>

      <div
        class="fixed top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-50 animate-pulse-slow transition-colors duration-1000"
        :class="
          store.activeUser === 'arya'
            ? 'bg-gradient-to-r from-green-400/30 to-teal-500/30'
            : 'bg-gradient-to-r from-blue-500/30 to-cyan-400/30'
        "
      ></div>
    </div>

    <nav
      class="glass-navbar sticky top-0 z-50 transition-colors duration-500 relative"
      :class="store.activeUser === 'arya' ? 'border-green-500/10' : 'border-blue-500/10'"
    >
      <div class="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <router-link
          to="/"
          class="text-lg md:text-xl italic text-white tracking-tight whitespace-nowrap"
        >
          <span v-if="store.activeUser === 'arya'"
            >Arya Cahya <span class="font-bold">Fauzan</span></span
          >
          <span v-else><span class="font-bold">Dwi</span> Ayu Sekar Wati</span>
        </router-link>

        <div class="hidden md:flex gap-8 font-medium text-sm text-gray-300">
          <router-link to="/" class="hover:text-white transition-colors duration-300"
            >Beranda</router-link
          >
          <router-link to="/projects" class="hover:text-white transition-colors duration-300"
            >Proyek</router-link
          >
          <router-link to="/about" class="hover:text-white transition-colors duration-300"
            >Tentang Saya</router-link
          >
          <router-link to="/contact" class="hover:text-white transition-colors duration-300"
            >Kontak</router-link
          >
        </div>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <transition name="fade">
        <div
          v-show="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        >
          <div class="flex flex-col px-6 py-6 space-y-5 font-medium text-base text-gray-300">
            <router-link
              @click="isMobileMenuOpen = false"
              to="/"
              class="hover:text-white transition-colors"
              >Beranda</router-link
            >
            <router-link
              @click="isMobileMenuOpen = false"
              to="/projects"
              class="hover:text-white transition-colors"
              >Proyek</router-link
            >
            <router-link
              @click="isMobileMenuOpen = false"
              to="/about"
              class="hover:text-white transition-colors"
              >Tentang Saya</router-link
            >
            <router-link
              @click="isMobileMenuOpen = false"
              to="/contact"
              class="hover:text-white transition-colors"
              >Kontak</router-link
            >
          </div>
        </div>
      </transition>
    </nav>

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <div
      class="fixed bottom-8 md:bottom-10 left-0 w-full z-[100] flex justify-center pointer-events-none"
    >
      <div
        class="bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/10 p-1 md:p-1.5 rounded-full flex gap-1 shadow-2xl transition-colors duration-500 w-auto max-w-[95vw] pointer-events-auto"
        :class="
          store.activeUser === 'arya'
            ? 'shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]'
            : 'shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]'
        "
      >
        <button
          @click="store.activeUser = 'arya'"
          :class="
            store.activeUser === 'arya'
              ? 'bg-green-500/20 text-green-400 border-green-500/30 shadow-inner'
              : 'text-gray-400 hover:text-white border-transparent'
          "
          class="whitespace-nowrap px-4 py-2 md:px-8 md:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold border transition-all duration-300"
        >
          Arya Cahya F.
        </button>

        <button
          @click="store.activeUser = 'dwi'"
          :class="
            store.activeUser === 'dwi'
              ? 'bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-inner'
              : 'text-gray-400 hover:text-white border-transparent'
          "
          class="whitespace-nowrap px-4 py-2 md:px-8 md:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold border transition-all duration-300"
        >
          Dwi Ayu S. W.
        </button>
      </div>
    </div>

    <Analytics />
  </div>
</template>

<style scoped lang="postcss">
@reference "tailwindcss";

.glass-navbar {
  @apply bg-white/5 backdrop-blur-lg border-b shadow-sm;
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
