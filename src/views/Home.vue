<script setup>
import { store } from '../toggle.js'
</script>

<template>
  <div class="min-h-[85vh] flex items-center px-6 py-12 md:py-20 relative overflow-hidden">
    <div class="max-w-6xl w-full mx-auto relative z-10">
      <div
        v-if="store.activeUser === 'arya'"
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in"
      >
        <div class="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <div
            class="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6 w-max mx-auto lg:mx-0 backdrop-blur-md"
          >
            👋 Selamat Datang
          </div>
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Halo, Saya <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-200"
              >Arya Cahya Fauzan</span
            >
          </h1>
          <p class="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Web Developer yang berfokus menciptakan pengalaman digital yang imersif dan fungsional.
            Spesialisasi dalam membangun aplikasi web modern, sistem kasir terintegrasi, dan
            antarmuka dengan performa tinggi.
          </p>

          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <router-link
              to="/projects"
              class="glass-button px-8 py-3.5 rounded-xl text-white font-medium hover:bg-white/20 transition hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] border border-white/20 flex items-center gap-2"
            >
              Lihat Karya Saya
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </router-link>

            <a
              href="https://github.com/AryaFauzan"
              target="_blank"
              class="glass-button px-5 py-3.5 rounded-xl text-gray-300 hover:text-white transition border border-white/10 hover:border-white/30 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div class="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full"></div>

          <div
            class="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] glass-card border border-white/20 p-2 overflow-hidden group shadow-2xl"
          >
            <img
              src="/img/arya-photo.png"
              alt="Arya Cahya Fauzan"
              class="w-full h-full object-cover object-top rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700 relative z-10"
            />

            <div
              class="absolute -bottom-1 -left-1 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl shadow-xl text-white font-bold flex items-center gap-3 z-20"
            >
              <span class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              Vue.js & Laravel
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in"
      >
        <div class="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <div
            class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 w-max mx-auto lg:mx-0 backdrop-blur-md"
          >
            🔬 Chemistry Student
          </div>
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Halo, Saya <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200"
              >Dwi Ayu Sekar Wati</span
            >
          </h1>
          <p class="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Mahasiswi Kimia yang bersemangat dalam penelitian material, analisis instrumen, dan
            formulasi bahan. Berdedikasi untuk menerapkan prinsip sains yang presisi dalam
            memecahkan tantangan di laboratorium maupun dunia industri.
          </p>

          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <router-link
              to="/projects"
              class="glass-button px-8 py-3.5 rounded-xl text-white font-medium hover:bg-white/20 transition hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] border border-blue-500/30 flex items-center gap-2"
            >
              Lihat Eksperimen
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </router-link>

            <a
              href="https://www.linkedin.com/in/dwi-ayu-sekar-wati-702584250/"
              class="glass-button px-5 py-3.5 rounded-xl text-gray-300 hover:text-white transition border border-white/10 hover:border-white/30 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Linkedin
            </a>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div class="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>

          <div
            class="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] glass-card border border-blue-500/30 p-2 overflow-hidden group shadow-[0_8px_32px_0_rgba(30,58,138,0.3)]"
          >
            <div
              class="w-full h-full bg-gradient-to-br from-indigo-900 to-blue-950 rounded-[1.5rem] flex items-center justify-center overflow-hidden relative"
            >
              <span class="text-white/30 font-medium tracking-widest absolute">FOTO DWI AYU</span>
            </div>

            <div
              class="absolute -bottom-0 -left-1 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl shadow-xl text-white font-bold flex items-center gap-3"
            >
              <span class="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
              Analytical Chemistry
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "tailwindcss";

.glass-card {
  @apply bg-white/5 backdrop-blur-xl;
}
.glass-button {
  @apply bg-white/10 backdrop-blur-md;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
