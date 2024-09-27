<script setup>
defineProps({
  menu: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link
    :to="{ name: menu.page }"
    class="text-decoration-none w-full py-2 px-4 inline-flex gap-2 transition-colors hover:bg-icon-hover-color relative"
  >
    <span
      class="absolute t-1 l-2 w-6 h-6 rounded-full bg-icon-color hidden"
      style="left: -1.25em"
    />
    <i :class="menu.icon"></i>
    <span>
      {{ menu.name }}
    </span>
    <span v-if="menu.children">
      <i class="bi bi-chevron-right"></i>
    </span>
  </router-link>
</template>

<style scoped>
.router-link-active i {
  @apply text-icon-color;
}

.router-link-active span {
  @apply block;
}
</style>
