import { defineStore } from 'pinia'

export interface Item {
  id: number
  name: string
}

export const useListStore = defineStore('list', {
  state: () => ({
    items: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ] as Item[],
  }),

  actions: {
    addItem(name: string) {
      if (!name.trim()) return
      const newItem: Item = {
        id: Date.now(),
        name: name.trim(),
      }
      this.items.push(newItem)
    },

    removeItem(id: number) {
      const index = this.items.findIndex(item => item.id === id)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    getFilteredItems(query: string) {
      if (!query) return this.items
      return this.items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    },
  },
})

