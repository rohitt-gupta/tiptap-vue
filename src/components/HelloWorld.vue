<script setup lang="ts">
import { ref } from 'vue'

const { msg } = defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1 class="text-5xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#646cff] to-[#42b883] bg-clip-text text-transparent">
    {{ msg }}
  </h1>

  <div class="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
    <button 
      type="button" 
      @click="count++"
      class="px-6 py-3 rounded-xl bg-zinc-800 text-white font-medium 
             border border-transparent hover:border-[#646cff] 
             transition-all duration-200 cursor-pointer
             hover:shadow-lg hover:shadow-[#646cff]/20
             active:scale-95"
    >
      count is {{ count }}
    </button>
    <p class="mt-4 text-zinc-400">
      Edit
      <code class="px-2 py-1 rounded bg-zinc-800 text-[#42b883] font-mono text-sm">
        components/HelloWorld.vue
      </code> 
      to test HMR
    </p>`
  </div>

  <p class="mb-3">
    Check out
    <a 
      href="https://vuejs.org/guide/quick-start.html#local" 
      target="_blank"
      class="text-[#646cff] font-medium hover:text-[#535bf2] transition-colors underline underline-offset-4"
    >create-vue</a>, the official Vue + Vite starter
  </p>
  
  <p class="mb-3">
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      class="text-[#646cff] font-medium hover:text-[#535bf2] transition-colors underline underline-offset-4"
    >Vue Docs Scaling up Guide</a>.
  </p>
  
  <p class="text-zinc-500 mt-6">
    Click on the Vite and Vue logos to learn more
  </p>
</template>
