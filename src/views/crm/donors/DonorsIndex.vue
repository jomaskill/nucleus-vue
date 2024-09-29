<script setup>
import { onMounted, ref } from 'vue'
import VTable from '@/components/base/VTable.vue'
import apiClient from '@/api.js'

let donors = ref([])
let biggerDonation = ref(100)
let totalDonations = ref(23)
let lastDonation = ref(2330)
const columns = [
  {label: 'First Name', value: 'first_name'},
  {label: 'Last Name', value: 'last_name'},
  {label: 'Email', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Donations', value: 'donations_count'},
  {label: 'Donations Total Value', value: 'donations_sum_amount'},
];

async function fetchDonors() {
  donors.value = (await apiClient.get('/donors')).data.data
}

onMounted(async () => {
  await fetchDonors()
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="inline-flex">
      <div>search bar</div>
      <div>a date filter</div>
    </div>
    <div class="inline-flex w-full justify-between">
      <div>${{ biggerDonation }}</div>
      <div>${{ totalDonations }}</div>
      <div>${{ lastDonation }}</div>
      <div></div>
    </div>
    <div class="p-4">
      <v-table :columns="columns" :data="donors"/>
    </div>
  </div>
</template>

<style></style>
