import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePagesStore = defineStore('pages', () => {
  const menus = ref([
    {
      name: 'Dashboard',
      icon: 'bi bi-speedometer2',
      page: 'dashboard'
    },
    {
      name: 'Donors',
      icon: 'bi bi-person-gear',
      page: 'donors'
    }
  ])

  return { menus }
})
