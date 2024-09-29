<script setup>
import NavSideBar from '@/components/layout/NavSideBar.vue'
import NavHeader from '@/components/layout/NavHeader.vue'
</script>

<template>
  <div class="text-text-color h-full w-full inline-flex">
    <nav-side-bar />
    <div class="w-full ml-[300px]">
      <nav-header />
      <main class="bg-gray-200 w-full h-screen text-gray-800 p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
