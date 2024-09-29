import { defineStore } from 'pinia'
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

  async function fetchUser() {
    console.log('fetching user')
    user.value = (await apiClient.get('/user')).data
    isAuthenticated.value = !!user.value
  }

  return { login, fetchUser, user, isAuthenticated }
})
