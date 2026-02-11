<script lang="ts">
    import Login from '$lib/components/Login.svelte';
  import { onMount } from 'svelte';

  let count = 0;

  function increment() {
    count += 1;
    alert(`Button clicked ${count} times!`);
  }

  onMount(() => {
    console.log('Users page mounted');
  });
</script>

<div>users page</div>

<!-- <Login on:login={(e) => console.log('Login event:', e.detail)} /> -->

<button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onclick={increment}>
  Click me
</button>

<button class="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onclick={increment}>
  Another Button
</button>