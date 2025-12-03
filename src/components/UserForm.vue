<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
});

const errors = reactive<{ name?: string; email?: string }>({});

function validate() {
  errors.name = !form.name.trim() ? 'Name required' : undefined;
  errors.email = !/^\S+@\S+\.\S+$/.test(form.email) ? 'Invalid email' : undefined;
  return !errors.name && !errors.email;
}

function submit() {
  if (!validate()) return;
  console.log('submit', { ...form });
  form.name = '';
  form.email = '';
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <div>
      <input 
        v-model="form.name" 
        placeholder="Name" 
        class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      />
      <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
    </div>

    <div>
      <input 
        v-model="form.email" 
        placeholder="Email" 
        class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
    </div>

    <button 
      type="submit"
      class="w-full px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
    >
      Submit
    </button>
  </form>
</template>
