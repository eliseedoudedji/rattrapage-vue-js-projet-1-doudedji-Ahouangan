import { defineStore } from 'pinia'
import bcrypt from 'bcryptjs'
import router from '@/router'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    canConnect: false,
    allUser: JSON.parse(localStorage.getItem('allUser'))
  }),
  getters: {},
  actions: {
    //get a user

    addUser(data) {
      this.users.push(data)
      localStorage.setItem('allUser', JSON.stringify(this.users))
      router.push('/login')
    },
    async toLogin(theUser) {
      // console.log(this.users)

      // localStorage.getItem('allUser', JSON.stringify(this.users))
      const l = this.allUser.length
      for (let pas = 0; pas < l; pas++) {
        // console.log(theUser.userPassWord)
        // console.log(this.allUser[pas]['userPassWord'])
        if (
          theUser.userMail == this.allUser[pas]['userMail'] &&
          bcrypt.compareSync(theUser.userPassWord, this.allUser[pas]['userPassWord'])
        ) {
          this.canConnect = true
          if (this.canConnect == true) {
            console.log(this.canConnect)
            localStorage.setItem('activeUser', JSON.stringify(this.allUser[pas]))
          }
        } else {
          this.canConnect = false
        }
      }
    }
  }
})

// const dataLocal = JSON.parse(localStorage.getItem('Elisée'))
// console.log(dataLocal)
