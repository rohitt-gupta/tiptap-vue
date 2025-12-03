<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen bg-zinc-900 text-white/90 flex flex-col items-center justify-center p-8">
    <div class="max-w-3xl mx-auto text-center">
      <div class="flex items-center justify-center gap-4 mb-8">
        <a 
          href="https://vite.dev" 
          target="_blank"
          class="group"
        >
          <img 
            src="/vite.svg" 
            class="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#646cffaa]" 
            alt="Vite logo" 
          />
        </a>
        <a 
          href="https://vuejs.org/" 
          target="_blank"
          class="group"
        >
          <img 
            src="./assets/vue.svg" 
            class="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#42b883aa]" 
            alt="Vue logo" 
          />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue + nano" />
    </div>
  </div>
</template>
