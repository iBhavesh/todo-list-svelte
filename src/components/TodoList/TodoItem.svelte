<script lang="ts">
  import { todos } from "../../store";

  import type { Todo } from "../../types";
  export let todo: Todo;
</script>

<li>
  <div><input type="checkbox" checked={todo.status} /></div>
  <span>{todo.title}</span>
  <div style="flex-grow: 2;" />
  <span
    >{todo.createdAt.toLocaleString([], {
      month: "long",
      year: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })}</span
  >
</li>

<style>
  div,
  span {
    margin-right: 5px;
  }
  li {
    width: 60vw;
    padding: 0.5rem 1rem;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    margin: 0.5rem;
    display: flex;
  }
</style>
