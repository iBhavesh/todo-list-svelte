<script lang="ts">
  import { todos } from "../../store";

  import type { Todo } from "../../types";
  export let todo: Todo;
</script>

<li>
  <div><input type="checkbox" checked={todo.status} /></div>
  <div class="content-div">
    <div style="display:flex">
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
    </div>
    <div class="line-through" />
  </div>
</li>

<style>
  div,
  span {
    margin-right: 5px;
  }

  .content-div {
    display: flex;
  }

  .line-through {
    border-top: solid thin;
  }
  li {
    width: 40vw;
    padding: 0.5rem 1rem;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    margin: 0.5rem;
    display: flex;
  }
</style>
