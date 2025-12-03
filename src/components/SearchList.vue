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
</script>

<template>
  <div class="space-y-4">
    <input 
      v-model="query" 
      placeholder="Search..." 
      class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    />
    <ul class="space-y-2">
      <li 
        v-for="it in filtered" 
        :key="it.id"
        class="px-4 py-2 bg-zinc-700/50 rounded-lg text-white/80"
      >
        {{ it.name }}
      </li>
      <li v-if="filtered.length === 0" class="px-4 py-2 text-white/40 text-center">
        No results found
      </li>
    </ul>
  </div>
</template>
