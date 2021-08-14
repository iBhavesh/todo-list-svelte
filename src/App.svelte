<script lang="ts">
  import AddTodoForm from "./components/AddTodoForm/AddTodoForm.svelte";
  import TodoList from "./components/TodoList/TodoList.svelte";
</script>

<main>
  <TodoList />
  <AddTodoForm />
</main>

<style>
  main {
    display: grid;
    justify-items: center;
  }
</style>
