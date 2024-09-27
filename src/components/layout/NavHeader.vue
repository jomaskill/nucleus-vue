<script setup>
import VAvatar from '@/components/base/VAvatar.vue'
import { useRoute } from 'vue-router'

</script>

<template>
  <header
    class="px-4 h-16 text-header-text-color border-b border-border-color inline-flex items-center justify-between"
  >
    <div>{{ useRoute().name}}</div>
    <div>
      <v-avatar initials="JM"/>
    </div>
  </header>
</template>

<style scoped>
  header{
    width: calc(100% - 1px);
  }
</style>
