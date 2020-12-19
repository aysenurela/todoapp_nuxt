export default {
  addTodo(state, payload) {
    state.todos.push(payload)
  },
  checkTodo(state, payload) {
    const todo = state.todos.filter( e => e.id === payload)
    todo[0].isChecked = true
  }
}