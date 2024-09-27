<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import NonBlankPage from '@/layouts/NonBlankPage.vue'

// Access the current route
const route = useRoute();

const layout = computed(() => {
  return route.meta.layout || NonBlankPage;
});

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
