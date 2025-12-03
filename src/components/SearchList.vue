<script setup lang="ts">
import { ref, computed } from 'vue';

interface Item { id: number; name: string; }

const items = ref<Item[]>([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]);

const query = ref('');

const filtered = computed(() =>
  items.value.filter(i => i.name.toLowerCase().includes(query.value.toLowerCase()))
);

function add(name: string) {
  items.value.push({ id: Date.now(), name });
}
</script>

<template>
  <input v-model="query" placeholder="Search..." />
  <ul>
    <li v-for="it in filtered" :key="it.id">{{ it.name }}</li>
  </ul>
</template>
