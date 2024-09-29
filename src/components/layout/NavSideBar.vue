<script setup>
import SidebarButton from '@/components/base/SidebarButton.vue'
import NucleusIcon from '@/components/icons/NucleusIcon.vue'
import { usePagesStore } from '@/stores/pages.js'
</script>

<template>
  <nav class="h-screen w-[300px] bg-sidebar-color shadow flex flex-col justify-between fixed">
    <div class="pt-2">
      <div class="h-14 px-4 py-2">
        <nucleus-icon />
      </div>
      <div class="border-b-2 border-border-color" />
      <template v-for="menu in usePagesStore().menus" :key="menu">
        <sidebar-button :menu="menu" />
      </template>
      <div class="border-b-2 border-border-color" />
    </div>
    <div class="bg-sidebar-dark-color w-full">
      <button type="button" class="inline-flex gap-2 items-center justify-center h-20 px-4">
        <i class="bi bi-house-heart"></i>
        Campaign Nucleus
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </nav>
</template>
