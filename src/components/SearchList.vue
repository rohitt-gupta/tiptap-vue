<script setup lang="ts">
import { ref, computed } from 'vue'
import { useListStore } from '../stores/list'

const listStore = useListStore()
const query = ref('')
const newItemName = ref('')

const filteredItems = computed(() =>
  listStore.getFilteredItems(query.value)
)

function addItem() {
  listStore.addItem(newItemName.value)
  newItemName.value = ''
}

function removeItem(id: number) {
  listStore.removeItem(id)
}
</script>

<template>
  <div class="space-y-4">
    <!-- Search Input -->
    <input
      v-model="query"
      placeholder="Search..."
      class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    />

    <!-- Add New Item -->
    <div class="flex gap-2">
      <input
        v-model="newItemName"
        placeholder="Add new item..."
        @keyup.enter="addItem"
        class="flex-1 px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      />
      <button
        @click="addItem"
        class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
      >
        Add
      </button>
    </div>

    <!-- Items List -->
    <ul class="space-y-2">
      <li
        v-for="item in filteredItems"
        :key="item.id"
        class="flex items-center justify-between px-4 py-2 bg-zinc-700/50 rounded-lg text-white/80"
      >
        <span>{{ item.name }}</span>
        <button
          @click="removeItem(item.id)"
          class="text-red-400 hover:text-red-300 transition-colors"
        >
          ✕
        </button>
      </li>
      <li v-if="filteredItems.length === 0" class="px-4 py-2 text-white/40 text-center">
        {{ query ? 'No results found' : 'No items yet' }}
      </li>
    </ul>
  </div>
</template>
