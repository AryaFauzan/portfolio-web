<script setup>
import { store } from '../toggle.js'
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
    <div class="mb-16 text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
        Mari Berkolaborasi
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto text-lg">
        {{
          store.activeUser === 'arya'
            ? 'Tertarik untuk mendiskusikan proyek web, pengembangan sistem kasir, atau peluang kerja sama di bidang rekayasa perangkat lunak? Jangan ragu untuk menyapa!'
            : 'Terbuka untuk diskusi mengenai riset kimia, analisis instrumen laboratorium, atau kolaborasi akademis. Silakan hubungi saya.'
        }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <a
          href="#"
          class="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300 border"
          :class="
            store.activeUser === 'arya'
              ? 'border-green-500/20 hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]'
              : 'border-blue-500/20 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]'
          "
        >
          <div
            class="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors"
          >
            <svg
              class="w-6 h-6 text-gray-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
            <p class="text-lg font-medium text-white">
              {{
                store.activeUser === 'arya'
                  ? 'aryafauzan191003@gmail.com'
                  : 'dwi.sekarwati@example.com'
              }}
            </p>
          </div>
        </a>

        <a
          href="#"
          class="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300 border"
          :class="
            store.activeUser === 'arya'
              ? 'border-green-500/20 hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]'
              : 'border-blue-500/20 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]'
          "
        >
          <div
            class="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors"
          >
            <svg
              class="w-6 h-6 text-gray-300 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
              LinkedIn
            </h4>
            <p class="text-lg font-medium text-white">
              {{ store.activeUser === 'arya' ? 'Arya Cahya Fauzan' : 'Dwi Ayu Sekar Wati' }}
            </p>
          </div>
        </a>

        <a
          :href="store.activeUser === 'arya' ? 'https://github.com/AryaFauzan' : '#'"
          target="_blank"
          class="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300 border"
          :class="
            store.activeUser === 'arya'
              ? 'border-green-500/20 hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]'
              : 'border-blue-500/20 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]'
          "
        >
          <div
            class="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors"
          >
            <svg
              v-if="store.activeUser === 'arya'"
              class="w-6 h-6 text-gray-300 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6 text-gray-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
              {{ store.activeUser === 'arya' ? 'GitHub' : 'Research & Publikasi' }}
            </h4>
            <p class="text-lg font-medium text-white">
              {{ store.activeUser === 'arya' ? 'AryaFauzan' : 'Jurnal Akademik' }}
            </p>
          </div>
        </a>
      </div>

      <div
        class="glass-card p-8 md:p-10 rounded-3xl border"
        :class="
          store.activeUser === 'arya'
            ? 'border-green-500/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.1)]'
            : 'border-blue-500/20 shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]'
        "
      >
        <form @submit.prevent="" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
              :class="
                store.activeUser === 'arya'
                  ? 'focus:ring-green-500/50 focus:border-green-500/50'
                  : 'focus:ring-blue-500/50 focus:border-blue-500/50'
              "
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="nama@email.com"
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
              :class="
                store.activeUser === 'arya'
                  ? 'focus:ring-green-500/50 focus:border-green-500/50'
                  : 'focus:ring-blue-500/50 focus:border-blue-500/50'
              "
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
            <textarea
              rows="4"
              placeholder="Tuliskan pesan atau tawaran kerja sama Anda di sini..."
              class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none"
              :class="
                store.activeUser === 'arya'
                  ? 'focus:ring-green-500/50 focus:border-green-500/50'
                  : 'focus:ring-blue-500/50 focus:border-blue-500/50'
              "
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex justify-center items-center gap-2"
            :class="
              store.activeUser === 'arya'
                ? 'bg-green-500 hover:bg-green-400 text-[#0e1a17] shadow-green-500/25'
                : 'bg-blue-500 hover:bg-blue-400 text-[#0f172a] shadow-blue-500/25'
            "
          >
            Kirim Pesan
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "tailwindcss";

.glass-card {
  @apply bg-white/5 backdrop-blur-xl;
}
</style>
