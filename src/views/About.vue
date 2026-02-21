<script setup>
import { store } from '../toggle.js'
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
    <div class="mb-16 text-center lg:text-left">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
        Perjalanan & Keahlian
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto lg:mx-0 text-lg">
        {{
          store.activeUser === 'arya'
            ? 'Dedikasi dalam membangun arsitektur web yang solid dan antarmuka yang intuitif.'
            : 'Eksplorasi berkesinambungan dalam analisis kimia, formulasi, dan standar laboratorium.'
        }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-8">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <svg
            class="w-6 h-6"
            :class="store.activeUser === 'arya' ? 'text-green-400' : 'text-blue-400'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Riwayat & Pengalaman
        </h3>

        <div
          v-if="store.activeUser === 'arya'"
          class="relative border-l border-white/10 pl-6 md:pl-8 space-y-10 before:absolute before:inset-y-0 before:-left-px before:w-[2px] before:bg-gradient-to-b before:from-green-500 before:to-transparent"
        >
          <div class="relative">
            <span
              class="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-[#1a2e2a]"
            ></span>
            <span class="text-green-400 text-sm font-bold tracking-wider mb-1 block">SEKARANG</span>
            <h4 class="text-xl font-bold text-white">Web Developer</h4>
            <p class="text-gray-400 mt-2 text-sm leading-relaxed">
              Fokus pada pengembangan sistem manajemen data kompleks, seperti aplikasi Point of
              Sales (POS) dan sistem pemesanan interaktif menggunakan tumpukan teknologi Laravel dan
              Vue.js.
            </p>
          </div>

          <div class="relative">
            <span
              class="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-white/20 border-2 border-green-500 ring-4 ring-[#1a2e2a]"
            ></span>
            <span class="text-gray-400 text-sm font-bold tracking-wider mb-1 block">AKADEMIS</span>
            <h4 class="text-xl font-bold text-white">Universitas 17 Agustus 1945 Surabaya</h4>
            <p class="text-gray-400 mt-2 text-sm leading-relaxed">
              Menempuh pendidikan tinggi dengan minat kuat pada rekayasa perangkat lunak,
              penyelesaian masalah (problem solving), dan implementasi teknologi untuk efisiensi
              operasional.
            </p>
          </div>
        </div>

        <div
          v-else
          class="relative border-l border-white/10 pl-6 md:pl-8 space-y-10 before:absolute before:inset-y-0 before:-left-px before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-transparent"
        >
          <div class="relative">
            <span
              class="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#0f172a]"
            ></span>
            <span class="text-blue-400 text-sm font-bold tracking-wider mb-1 block"
              >PENGALAMAN LAB</span
            >
            <h4 class="text-xl font-bold text-white">Asisten Praktikum Kimia Dasar</h4>
            <p class="text-gray-400 mt-2 text-sm leading-relaxed">
              Bertanggung jawab membimbing praktik laboratorium, preparasi reagen standar, serta
              memastikan seluruh prosedur operasional dan Keselamatan & Kesehatan Kerja (K3)
              berjalan ketat.
            </p>
          </div>

          <div class="relative">
            <span
              class="absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 rounded-full bg-white/20 border-2 border-blue-500 ring-4 ring-[#0f172a]"
            ></span>
            <span class="text-gray-400 text-sm font-bold tracking-wider mb-1 block"
              >AKADEMIS & RISET</span
            >
            <h4 class="text-xl font-bold text-white">Mahasiswi Kimia</h4>
            <p class="text-gray-400 mt-2 text-sm leading-relaxed">
              Fokus studi pada kimia analitik dan organik. Aktif dalam riset deteksi logam berat
              menggunakan Spektrofotometri Serapan Atom (AAS) dan formulasi produk berbasis bahan
              alam.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div
          class="glass-card p-8 rounded-3xl sticky top-28 border"
          :class="
            store.activeUser === 'arya'
              ? 'border-green-500/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.1)]'
              : 'border-blue-500/20 shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]'
          "
        >
          <h3 class="text-xl font-bold text-white mb-6">
            {{ store.activeUser === 'arya' ? 'Tech Stack & Tools' : 'Instrumen & Kompetensi' }}
          </h3>

          <div v-if="store.activeUser === 'arya'" class="flex flex-wrap gap-2">
            <span class="skill-badge bg-green-500/10 text-green-300 border-green-500/20"
              >Vue.js 3</span
            >
            <span class="skill-badge bg-red-500/10 text-red-300 border-red-500/20">Laravel</span>
            <span class="skill-badge bg-sky-500/10 text-sky-300 border-sky-500/20"
              >Tailwind CSS</span
            >
            <span class="skill-badge bg-blue-500/10 text-blue-300 border-blue-500/20">MySQL</span>
            <span class="skill-badge bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
              >Python</span
            >
            <span class="skill-badge bg-orange-500/10 text-orange-300 border-orange-500/20"
              >Git</span
            >
            <span class="skill-badge bg-white/5 text-gray-300 border-white/10">REST API</span>
          </div>

          <div v-else class="flex flex-wrap gap-2">
            <span class="skill-badge bg-blue-500/10 text-blue-300 border-blue-500/20"
              >AAS (Serapan Atom)</span
            >
            <span class="skill-badge bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
              >UV-Vis Spectrophotometry</span
            >
            <span class="skill-badge bg-teal-500/10 text-teal-300 border-teal-500/20"
              >Destilasi</span
            >
            <span class="skill-badge bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
              >Titrasi Volumetri</span
            >
            <span class="skill-badge bg-rose-500/10 text-rose-300 border-rose-500/20"
              >K3 Laboratorium</span
            >
            <span class="skill-badge bg-white/5 text-gray-300 border-white/10">ChemDraw</span>
            <span class="skill-badge bg-white/5 text-gray-300 border-white/10"
              >Preparasi Sampel</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "tailwindcss";

.glass-card {
  @apply bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/10;
}

.skill-badge {
  @apply px-4 py-2 text-xs font-semibold rounded-xl border backdrop-blur-md transition-all hover:scale-105 cursor-default;
}
</style>
