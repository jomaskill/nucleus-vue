<script setup>
  import SidebarButton from '@/components/base/SidebarButton.vue'

  defineProps({
    menus: {
      type: Array,
      required: true
    }
  })

import Nucleus from '@/components/icons/NucleusIcon.vue'
</script>

<template>
  <nav class="h-screen w-[300px] bg-sidebar-color shadow flex flex-col justify-between">
    <div class="pt-2">
      <div class="h-14 px-4 py-2">
        <nucleus/>
      </div>
      <div class="border-b-2 border-border-color"/>
      <template v-for="menu in menus" :key="menu">
        <sidebar-button :icon="menu.icon" :text="menu.name" :nav="menu.page"/>
      </template>
      <div class="border-b-2 border-border-color"/>
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
