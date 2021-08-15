<script lang="ts">
  import { todos } from "../../store";

  import type { Todo } from "../../types";
  export let todo: Todo;
  let lineThrough = todo.status;
  const toggleStatus = () => {
    todos.toggleStatus(todo.id);
  };
</script>

<li>
  <div style="margin-right: 5px;">
    <input
      on:change={toggleStatus}
      type="checkbox"
      bind:checked={lineThrough}
    />
  </div>
  <div class="content-div">
    <div style="display:flex;width:100%;">
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
    <div class={lineThrough ? "line-through" : ""} />
  </div>
</li>

<style>
  .content-div {
    width: 100%;
    display: flex;
    position: relative;
  }

  .line-through {
    border-top: solid thin;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
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
