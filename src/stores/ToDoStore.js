import { defineStore } from 'pinia'

export const useToDoStore = defineStore('todos', {
  state: () => ({
    todos: [],
    canConnect: false,
    toDoList: JSON.parse(localStorage.getItem('allToDo'))
  }),
  getters: {},
  actions: {
    //get a user

    addToDo(data) {
      this.todos.push(this.toDoList)
      this.todos.push(data)
      localStorage.setItem('allToDo', JSON.stringify(this.todos))
    },

    getAllList() {}
  }
})

// const dataLocal = JSON.parse(localStorage.getItem('Elisée'))
// console.log(dataLocal)
