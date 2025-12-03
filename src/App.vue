<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-zinc-900 text-white/90">
    <nav class="fixed top-0 left-0 right-0 flex justify-center gap-6 p-4 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 z-50">
      <RouterLink 
        to="/" 
        class="text-white/70 hover:text-white transition-colors"
      >
        Home
      </RouterLink>
      <RouterLink 
        to="/about" 
        class="text-white/70 hover:text-white transition-colors"
      >
        About
      </RouterLink>
      <RouterLink 
        to="/workers" 
        class="text-white/70 hover:text-white transition-colors"
      >
        Workers
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
