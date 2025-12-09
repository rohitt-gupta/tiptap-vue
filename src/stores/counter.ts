import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++; },
    incrementDouble() { this.count += 2; },
  },
  getters: {
    double: state => state.count += 2,
  }
});
