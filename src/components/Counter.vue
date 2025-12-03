<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <p class="text-5xl font-bold text-white/90">{{ counterStore.count }}</p>
    <button 
      @click="counterStore.increment"
      class="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
    >
      Increment
    </button>
  </div>
</template>
