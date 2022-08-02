import { defineStore } from 'pinia'
export const userStore = defineStore("user", {
  state: () => {
    return {
      token: ""
    }
  },
  actions: {
    setToken(jwtToken) {
      this.token = jwtToken;
      localStorage.setItem('token', this.token);
    }
  },
  getters: {},
  persist: true,
})
