<script setup>
import NavSideBar from '@/components/NavSideBar.vue'
import { ref } from 'vue'

const menus = ref([
  {
    name: 'Dashboard',
    icon: 'bi bi-speedometer2',
    page: 'dashboard'
  },
  {
    name: 'CRM',
    icon: 'bi bi-person-gear',
    page: 'donors'
  },
])

</script>

<template>
  <div class="text-text-color h-full w-full inline-flex">
    <nav-side-bar :menus="menus"/>
    <div class="w-full">
      <header class="w-full fixed h-16 text-header-text-color border-b border-border-color">header</header>
      <main class="bg-gray-200 mt-16 w-full h-full">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
