export default {
  addTodo(state, payload) {
    state.todos.push(payload)
  },
  checkTodo(state, payload) {
    const todo = state.todos.filter( e => e.id === payload)
    todo[0].isChecked = true
  },
  deleteTodo(state, payload) {
    const todoInd = state.todos.findIndex( e => e.id === payload)
    state.todos.splice(todoInd, 1)
  }
}