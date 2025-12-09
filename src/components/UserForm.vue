<script setup lang="ts">
import { reactive } from 'vue';
import { Mail, Phone, MapPin, X } from 'lucide-vue-next';
import { useUserStore, type UserRole } from '../stores/user';

const userStore = useUserStore();

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  role: 'viewer' as UserRole,
});

const errors = reactive<{
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: string;
}>({});

function validate() {
  errors.name = !form.name.trim() ? 'Name required' : undefined;
  errors.email = !/^\S+@\S+\.\S+$/.test(form.email) ? 'Invalid email' : undefined;
  errors.phone = !form.phone.trim() ? 'Phone required' : undefined;
  errors.address = !form.address.trim() ? 'Address required' : undefined;

  return !errors.name && !errors.email && !errors.phone && !errors.address;
}

function submit() {
  if (!validate()) return;

  userStore.addUser({
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    address: form.address.trim(),
    role: form.role,
  });

  // Reset form
  form.name = '';
  form.email = '';
  form.phone = '';
  form.address = '';
  form.role = 'viewer';
}

function removeUser(id: number) {
  userStore.removeUser(id);
}

function getRoleColor(role: UserRole): string {
  switch (role) {
    case 'admin':
      return 'bg-red-600';
    case 'editor':
      return 'bg-blue-600';
    case 'viewer':
      return 'bg-gray-600';
    default:
      return 'bg-gray-600';
  }
}

function getRoleText(role: UserRole): string {
  return role.charAt(0).toUpperCase() + role.slice(1);
}
</script>

<template>
  <div class="space-y-6">
    <!-- User Form -->
    <form @submit.prevent="submit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Name -->
        <div>
          <input
            v-model="form.name"
            placeholder="Name"
            class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
        </div>

        <!-- Email -->
        <div>
          <input
            v-model="form.email"
            placeholder="Email"
            type="email"
            class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
        </div>

        <!-- Phone -->
        <div>
          <input
            v-model="form.phone"
            placeholder="Phone"
            class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <p v-if="errors.phone" class="mt-1 text-sm text-red-400">{{ errors.phone }}</p>
        </div>

        <!-- Role -->
        <div>
          <select
            v-model="form.role"
            class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="viewer" class="bg-zinc-700">Viewer</option>
            <option value="editor" class="bg-zinc-700">Editor</option>
            <option value="admin" class="bg-zinc-700">Admin</option>
          </select>
        </div>
      </div>

      <!-- Address -->
      <div>
        <textarea
          v-model="form.address"
          placeholder="Address"
          rows="3"
          class="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
        ></textarea>
        <p v-if="errors.address" class="mt-1 text-sm text-red-400">{{ errors.address }}</p>
      </div>

      <button
        type="submit"
        class="w-full px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
      >
        Add User
      </button>
    </form>

    <!-- User Statistics -->
    <div v-if="userStore.totalUsers > 0" class="flex items-center gap-4 text-sm text-white/60">
      <span>Total Users: {{ userStore.totalUsers }}</span>
      <span>•</span>
      <span>Admins: {{ userStore.getUsersByRole('admin').length }}</span>
      <span>•</span>
      <span>Editors: {{ userStore.getUsersByRole('editor').length }}</span>
      <span>•</span>
      <span>Viewers: {{ userStore.getUsersByRole('viewer').length }}</span>
    </div>

    <!-- User Cards -->
    <div v-if="userStore.users.length > 0" class="space-y-3">
      <h3 class="text-lg font-semibold text-white/90">Users</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="user in userStore.users"
          :key="user.id"
          class="bg-zinc-700/50 rounded-lg p-4 border border-zinc-600"
        >
          <div class="flex items-start justify-between mb-3">
            <h4 class="font-medium text-white/90">{{ user.name }}</h4>
            <div class="flex items-center gap-2">
              <span
                :class="['px-2 py-1 text-xs rounded-full text-white', getRoleColor(user.role)]"
              >
                {{ getRoleText(user.role) }}
              </span>
              <button
                @click="removeUser(user.id)"
                class="text-red-400 hover:text-red-300 transition-colors p-1"
              >
                <X class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div class="space-y-1 text-sm text-white/60">
            <div class="flex items-center gap-2">
              <Mail class="w-4 h-4" />
              <span>{{ user.email }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone class="w-4 h-4" />
              <span>{{ user.phone }}</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4" />
              <span>{{ user.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-8">
      <p class="text-white/40">No users added yet. Fill out the form above to get started!</p>
    </div>
  </div>
</template>
