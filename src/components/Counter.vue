<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ initial?: number }>();
const count = ref<number>(props.initial ?? 0);

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
