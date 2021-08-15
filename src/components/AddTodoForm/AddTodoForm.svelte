<script lang="ts">
  import { todos } from "../../store";
  let title = "";
  let inputRef: HTMLInputElement;
  const handleFormSubmit = (event: Event) => {
    todos.addTodo({
      id: Date.now() + Math.round(Math.random()),
      title,
      status: false,
      createdAt: new Date(),
    });
    inputRef.blur();
    title = "";
  };
</script>

<form on:submit|preventDefault={handleFormSubmit}>
  <input bind:this={inputRef} bind:value={title} type="text" />
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
