<script lang="ts">
  import { todos } from "../../store";
  let title = "";
  const handleFormSubmit = () => {
    todos.addTodo({ title, createdAt: new Date(), status: false });
  };
</script>

<form on:submit|preventDefault={handleFormSubmit}>
  <input bind:value={title} type="text" />
  <button type="submit" disabled={title.length < 0}>Add</button>
</form>
