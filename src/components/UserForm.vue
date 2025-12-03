<script setup lang="ts">
import { ref, reactive } from 'vue';

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
  // pretend submit: console log
  console.log('submit', { ...form });
  form.name = '';
  form.email = '';
}
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <input v-model="form.name" placeholder="Name" />
      <div v-if="errors.name">{{ errors.name }}</div>
    </div>

    <div>
      <input v-model="form.email" placeholder="Email" />
      <div v-if="errors.email">{{ errors.email }}</div>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>
