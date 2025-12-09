<script setup lang="ts">
import { ref, markRaw, type Component } from 'vue'
import { Plus, List, User, X } from 'lucide-vue-next'
import Counter from '../components/Counter.vue'
import SearchList from '../components/SearchList.vue'
import UserForm from '../components/UserForm.vue'

interface WorkerCard {
  id: string
  name: string
  description: string
  component: Component
  icon: Component
}

const workers: WorkerCard[] = [
  {
    id: 'counter',
    name: 'Counter',
    description: 'A simple counter with Pinia store',
    component: markRaw(Counter),
    icon: markRaw(Plus),
  },
  {
    id: 'list',
    name: 'Search List',
    description: 'Filterable list with search functionality',
    component: markRaw(SearchList),
    icon: markRaw(List),
  },
  {
    id: 'form',
    name: 'User Form',
    description: 'Form with validation',
    component: markRaw(UserForm),
    icon: markRaw(User),
  },
]

const activeWorker = ref<WorkerCard | null>(null)

function selectWorker(worker: WorkerCard) {
  activeWorker.value = worker
}

function closeWorker() {
  activeWorker.value = null
}
</script>

<template>
  <div class="min-h-screen pt-20 px-6 pb-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-white/90 mb-2 text-center">Workers</h1>
      <p class="text-white/50 text-center mb-10">Select a component to view</p>

      <!-- Component Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <button
          v-for="worker in workers"
          :key="worker.id"
          @click="selectWorker(worker)"
          class="group p-6 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-600 transition-all text-left"
          :class="{ 'ring-2 ring-emerald-500 border-emerald-500': activeWorker?.id === worker.id }"
        >
          <div class="flex items-center gap-3 mb-2">
            <component :is="worker.icon" class="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <h3 class="text-lg font-semibold text-white/90 group-hover:text-emerald-400 transition-colors">
              {{ worker.name }}
            </h3>
          </div>
          <p class="text-sm text-white/50">{{ worker.description }}</p>
        </button>
      </div>

      <!-- Active Component Display -->
      <div
        v-if="activeWorker"
        class="rounded-xl border border-zinc-700 bg-zinc-800/30 overflow-hidden"
      >
        <div class="flex items-center justify-between px-5 py-3 border-b border-zinc-700 bg-zinc-800/50">
          <h2 class="font-medium text-white/90">{{ activeWorker.name }}</h2>
          <button
            @click="closeWorker"
            class="text-white/50 hover:text-white transition-colors p-1"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="p-6">
          <component :is="activeWorker.component" />
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="rounded-xl border border-dashed border-zinc-700 p-12 text-center"
      >
        <p class="text-white/40">Click a card above to view the component</p>
      </div>
    </div>
  </div>
</template>

