<script setup>
import { onMounted, ref } from 'vue'
 import VTable from '@/components/base/VTable.vue'
 import apiClient from '@/api.js'
import { useAuthStore } from '@/stores/auth.js'

 let donors = ref([])
 let biggerDonation = ref(100)
 let totalDonations = ref(23)
 let lastDonation = ref(2330)

 async function fetchDonors() {
   donors.value = await apiClient.get('/donors');
 }

 onMounted(async () => {
   donors.value = (await fetchDonors()).data.data;
 })

</script>

<template>
 <div class="flex flex-col gap-8 bg-blue-500">
   <div class="inline-flex">
     <div>
       search bar
     </div>
     <div>
       a date filter
     </div>
   </div>
   <div class="inline-flex w-full justify-between">
     <div>${{ biggerDonation }}</div>
     <div>${{ totalDonations }}</div>
     <div>${{ lastDonation }}</div>
     <div></div>
   </div>
   <div class="p-4">
     <v-table/>
   </div>
 </div>
</template>

<style>
</style>

