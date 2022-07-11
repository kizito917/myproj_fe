import { defineStore } from 'pinia';
import { loginService, registerService } from '@/services/auth.service';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    clientId: null,
    isSuccess: false,
    isError: false
  }),
  getters: {

  },
  actions: {
    processRegister(regPayload) {
      registerService(regPayload)
      .then((response) => {
        console.log(response.date)
      })
      .catch((err)=> {
        console.log(err)
      })
    },
    processLogin(email, password) {
      var payload = {
        email, password
      }
      console.log(payload);
      loginService(payload)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
})