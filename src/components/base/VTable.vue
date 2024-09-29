<script setup>
  defineProps({
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  });
</script>


<template>
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg bg-white">
    <div class="px-6 py-2 inline-flex justify-between w-full">
      Email Campaign 9470
      <i class="bi bi-gear"></i>
    </div>
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="">
        <tr>
          <th
            v-for="column in columns"
            :key="column"
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="item in data" :key="item.id">
          <td
            v-for="column in columns"
            :key="column"
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {{ item[column.value] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
