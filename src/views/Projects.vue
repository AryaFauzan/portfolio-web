<script setup>
import { store } from '../toggle.js'
import { ref } from 'vue'

// Data proyek yang sudah disesuaikan dengan detail teknis
const arya_projects = ref([
  {
    id: 1,
    title: 'Aplikasi Kasir (POS)',
    description:
      'Sistem point-of-sale terintegrasi menggunakan model Transaction dan TransactionDetail. Mendukung manajemen multi-stok per produk (tabel stocks) dengan harga beli/jual bervariasi, serta fitur proses checkout yang efisien.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    gradient: 'from-teal-800 to-emerald-950',
  },
  {
    id: 2,
    title: 'Sistem Pemesanan Sales',
    description:
      'Aplikasi web pemesanan khusus untuk karyawan sales, menampilkan antarmuka interaktif bergaya Excel untuk mempercepat proses input data pemesanan secara massal.',
    tech: ['Laravel', 'Database'],
    gradient: 'from-slate-800 to-gray-900',
  },
  {
    id: 3,
    title: 'Manajemen Jurnal & Abstrak',
    description:
      'Aplikasi web komprehensif untuk memfasilitasi administrasi konferensi, memungkinkan pengumpulan, pengelolaan, dan peninjauan koleksi jurnal serta abstrak akademik.',
    tech: ['Web Development'],
    gradient: 'from-blue-900 to-indigo-950',
  },
  {
    id: 4,
    title: 'Katalog Buket Bunga',
    description:
      'Website etalase digital yang elegan dan responsif untuk membantu digitalisasi, promosi, dan manajemen pemesanan bisnis buket bunga.',
    tech: ['Vue 3', 'Tailwind CSS'],
    gradient: 'from-rose-900 to-pink-950',
  },
  {
    id: 5,
    title: 'Cold Brew Calculator',
    description:
      'Aplikasi utilitas manajemen resep dan kalkulator rasio presisi untuk kalibrasi seduhan kopi cold brew (mendukung profil beans seperti Robusta Bali Kintamani).',
    tech: ['Vue 3', 'Tailwind CSS'],
    gradient: 'from-amber-900 to-orange-950',
  },
])

const dwi_projects = ref([
  {
    id: 1,
    title: 'Analisis Kandungan Logam Berat pada Air Sungai',
    description:
      'Melakukan pengambilan sampel dan pengujian laboratorium untuk mendeteksi kadar timbal (Pb) menggunakan metode Spektrofotometri Serapan Atom (AAS).',
    tech: ['AAS', 'Kimia Analitik', 'Sampling Lingkungan'],
    gradient: 'from-blue-800 to-indigo-950',
  },
  {
    id: 2,
    title: 'Formulasi Sabun Padat Antibakteri',
    description:
      'Merancang eksperimen saponifikasi dan menguji efektivitas ekstrak bahan alam (daun sirih) sebagai agen antibakteri aktif pada produk kosmetik dasar.',
    tech: ['Kimia Organik', 'Uji Fitokimia', 'Formulasi'],
    gradient: 'from-cyan-800 to-blue-950',
  },
  {
    id: 3,
    title: 'Asisten Praktikum Kimia Dasar',
    description:
      'Membimbing mahasiswa baru dalam teknik dasar laboratorium, preparasi larutan reagen, dan memastikan standar Keselamatan dan Kesehatan Kerja (K3) berjalan dengan baik.',
    tech: ['K3 Laboratorium', 'Titrasi', 'Preparasi Sampel'],
    gradient: 'from-sky-800 to-cyan-950',
  },
  {
    id: 4,
    title: 'Ekstraksi Minyak Atsiri via Destilasi',
    description:
      'Proyek akhir yang berfokus pada optimasi suhu dan waktu destilasi untuk mendapatkan rendemen minyak atsiri tertinggi dari bahan baku lokal.',
    tech: ['Destilasi', 'ChemDraw', 'Analisis Data'],
    gradient: 'from-indigo-800 to-slate-900',
  },
])
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
    <div class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Karya & Eksplorasi
        </h2>
        <p class="text-gray-400 max-w-xl text-lg">
          <span v-if="store.activeUser === 'arya'"
            >Kumpulan proyek web development yang berfokus pada efisiensi operasional, manajemen
            data kompleks, dan antarmuka pengguna yang interaktif.</span
          >
          <span v-else
            >Kumpulan proyek penelitian dan eksperimen kimia yang berfokus pada akurasi analisis
            laboratorium, pengolahan data instrumen yang presisi, serta inovasi formulasi
            bahan.</span
          >
        </p>
      </div>
    </div>

    <div
      v-if="store.activeUser === 'arya'"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
    >
      <div 
        v-for="project in arya_projects" 
        :key="project.id" 
        class="group relative flex flex-col h-full rounded-3xl overflow-hidden z-10
               bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg 
               transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
      >
        <div class="relative h-48 sm:h-56 w-full overflow-hidden border-b border-white/5">
          <div
            :class="`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`"
          ></div>
        </div>

        <div class="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-transparent">
          <h3
            class="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300"
          >
            {{ project.title }}
          </h3>

          <p class="text-gray-400 mb-8 flex-grow leading-relaxed text-sm">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-lg border border-white/10 backdrop-blur-md"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="store.activeUser === 'dwi'"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
    >
      <div 
        v-for="project in dwi_projects" 
        :key="project.id" 
        class="group relative flex flex-col h-full rounded-3xl overflow-hidden z-10
               bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg 
               transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
      >
        <div class="relative h-48 sm:h-56 w-full overflow-hidden border-b border-white/5">
          <div
            :class="`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`"
          ></div>
        </div>

        <div class="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-transparent">
          <h3
            class="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
          >
            {{ project.title }}
          </h3>

          <p class="text-gray-400 mb-8 flex-grow leading-relaxed text-sm">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-lg border border-white/10 backdrop-blur-md"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>