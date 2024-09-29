import { defineStore } from 'pinia'
import { ref } from 'vue'
import apiClient from '@/api.js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  async function login(email = 'admin@admin.com', password = 'password') {
    await apiClient.get('/sanctum/csrf-cookie')
    await apiClient.post('/login', {
      email: email,
      password: password
    })

    await fetchUser()
  }

  async function logout() {
    await apiClient.post('/logout')
  }

  async function fetchUser() {
    
    try {
      user.value = (await apiClient.get('/user'))
    } catch (e) { /* empty */ }

    isAuthenticated.value = !!user.value
  }

  return { login, logout, fetchUser, user, isAuthenticated }
})
