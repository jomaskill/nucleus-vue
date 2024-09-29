<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
const router = useRouter();
const auth = useAuthStore();

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

async function logout() {
  await auth.logout()

  await router.push({ name: 'login' });
}
</script>

<template>
  <div
    @click="logout"
    class="rounded-full h-8 w-8 bg-nucleus-light-green flex justify-center items-center text-white"
  >
    <img v-if="image" :src="image" alt="User Photo" />
    <span v-else>{{ initials }}</span>
  </div>
</template>

<style scoped></style>
