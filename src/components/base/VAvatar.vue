<script setup>
defineProps({
  image: {
    type: String,
    default: null
  },
  initials: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="rounded-full h-8 w-8 bg-nucleus-light-green flex justify-center items-center text-white"
  >
    <img v-if="image" :src="image" alt="User Photo" />
    <span v-else>{{ initials }}</span>
  </div>
</template>

<style scoped></style>
