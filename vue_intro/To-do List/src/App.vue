<template>
  <h1>Vue 3 Todo App</h1>
  <section class="searchBar">
    <form @submit.prevent="addNewTodo">
      <label>New Todo: </label>
      <input v-model="newTodo" name="newTodo" placeholder="Enter new task...">
      <button>Add New Todo</button>
    </form>
    <button @click="markAllDone">Mark All Done</button>
  </section>

  <ul>
    <li class="todoTasks" v-for="(todo,index) in todos" :key="todo.id" @click="toggleDone(todo)">
      <TodoList @test-click="removeTodo(index)" :title="todo.content" :done="todo.done" />
    </li>
  </ul>

</template>

<script>
import { ref } from 'vue';
import TodoList from './components/todoList.vue';

export default {
  setup() {
    const newTodo = ref("");
    const todos = ref([]);
    let tempID = 0;

    function addNewTodo() {
      if (newTodo.value.length) {
        todos.value.push({
          id: tempID++,
          done: false,
          content: newTodo.value + " "
        });
      }
      newTodo.value = "";
    }
    function toggleDone(todo) {
      todo.done = !todo.done;
    }
    function removeTodo(index) {
      todos.value.splice(index, 1);
    }
    function markAllDone() {
      if (todos.value.every((todo) => todo.done == true)) {
        todos.value.forEach((todo) => todo.done = false);
      }
      else {
        todos.value.forEach((todo) => todo.done = true);
      }
    }
    return {
      addNewTodo,
      toggleDone,
      removeTodo,
      markAllDone,
      newTodo,
      todos,
      tempID,
    };
  },
  components: { TodoList }
}
</script>

<style>
.searchBar {
  display: flex;
}

.todoTasks {
  cursor: pointer;
}
</style>