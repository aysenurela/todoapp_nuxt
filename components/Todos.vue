<template>
  <div class="todos">
    <ul>
      <li 
        v-for="(todo, index) in todos" 
        :key="index"
        @click="checkTodo(todo.id)"
        v-bind:class="{checked: todo.isChecked}"
      >
        {{todo.description}}
        <button @click.stop="deleteTodo(todo.id)" class="delete-btn">x</button>
      </li>
    </ul>
    <form>
      <input type="text" placeholder="New todo" v-model="todoDesc">
      <button @click.prevent="addTodo">Add todo</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoDesc: '',
    }
  },

  beforeMount: function() {
    this.$store.commit('initialiseStore')
  },
  
  // Since Vuex stores are reactive, the simplest way to "retrieve" state from it is simply returning some store state from within a computed property
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  
  methods: {
    addTodo() {
      if (this.todoDesc) {
        this.$store.commit('addTodo', {
          description: this.todoDesc,
          isChecked: false,
          id: +new Date()
        });
        this.todoDesc = ''
      }
    },
    checkTodo(id) {
      this.$store.commit('checkTodo', id)
    },
    deleteTodo(id) {
      this.$store.commit('deleteTodo', id)
    }
  }
}
</script>

<style>
li {
  cursor: pointer;
  text-align: left;
  list-style: circle;
  margin-bottom: .5rem;
}

li.checked {
  text-decoration: line-through;
}

.delete-btn {
  float: right;
}
</style>