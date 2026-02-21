import { reactive } from 'vue'

// reactive() membuat data ini selalu reaktif/update secara real-time di semua komponen
export const store = reactive({
  activeUser: 'arya', // Nilai awalnya adalah 'arya'. Bisa diubah menjadi 'rekan'
})