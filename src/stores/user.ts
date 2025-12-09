import { defineStore } from 'pinia'

export type UserRole = 'admin' | 'editor' | 'viewer'

export interface User {
  id: number
  name: string
  email: string
  phone: string
  address: string
  role: UserRole
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
  }),

  actions: {
    addUser(userData: Omit<User, 'id'>) {
      const newUser: User = {
        id: Date.now(),
        ...userData,
      }
      this.users.push(newUser)
    },

    removeUser(id: number) {
      const index = this.users.findIndex(user => user.id === id)
      if (index > -1) {
        this.users.splice(index, 1)
      }
    },
  },

  getters: {
    getUsersByRole: (state) => (role: UserRole) =>
      state.users.filter(user => user.role === role),

    totalUsers: (state) => state.users.length,
  },
})
