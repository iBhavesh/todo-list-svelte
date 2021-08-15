<script lang="ts">
  import { todos } from "../../store";
  import TodoItem from "./TodoItem.svelte";
</script>

{#if $todos.length > 0}
  <ul>
    {#each $todos as todo}
      <TodoItem {todo} />
    {/each}
  </ul>
{:else}
  <div style="text-align: center;">
    <h3>No Todos Added!</h3>
    <h4>Add Some</h4>
  </div>
{/if}

<style>
  ul {
    padding: 0;
  }
  h3 {
    margin-bottom: 0;
  }
  h4 {
    margin-top: 5px;
  }
</style>
