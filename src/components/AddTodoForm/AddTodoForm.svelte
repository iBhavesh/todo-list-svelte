<script lang="ts">
  import { todos } from "../../store";
  let title = "";
  const handleFormSubmit = (event: Event) => {
    todos.addTodo({ title, createdAt: new Date(), status: false });
    console.dir(event.target!);
    title = "";
  };
</script>

<form on:submit|preventDefault={handleFormSubmit}>
  <input bind:value={title} type="text" />
  <button type="submit" disabled={title.length < 0}>Add</button>
</form>

<style>
  form {
    display: flex;
    width: calc(40vw + 3rem);
  }

  input {
    flex-grow: 2;
  }
</style>
