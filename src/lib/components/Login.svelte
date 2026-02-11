<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let email = '';
  let password = '';
  let remember = false;
  let showPassword = false;
  let submitting = false;

  type Errors = { email?: string; password?: string };
  let errors: Errors = {};

  const validate = (): boolean => {
    errors = {};
    if (!email) errors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email';

    if (!password) errors.password = 'Password is required';

    return Object.keys(errors).length === 0;
  };

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!validate()) return;
    submitting = true;
    try {
      // Simulate an async request. Replace this with real auth logic.
      await new Promise((r) => setTimeout(r, 600));
      dispatch('login', { email, password, remember });
    } finally {
      submitting = false;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Sign in to your account</h2>

  <div class="mb-4">
    <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" for="email">Email</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
      aria-invalid={errors.email ? 'true' : 'false'}
      aria-describedby={errors.email ? 'email-error' : undefined}
    />
    {#if errors.email}
      <p id="email-error" class="text-xs text-red-500 mt-1">{errors.email}</p>
    {/if}
  </div>

  <div class="mb-4">
    <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" for="password">Password</label>
    <div class="relative">
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        bind:value={password}
        class="w-full px-3 py-2 pr-20 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        aria-invalid={errors.password ? 'true' : 'false'}
        aria-describedby={errors.password ? 'password-error' : undefined}
      />
      <button
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800"
        on:click={() => (showPassword = !showPassword)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
    {#if errors.password}
      <p id="password-error" class="text-xs text-red-500 mt-1">{errors.password}</p>
    {/if}
  </div>

  <div class="flex items-center justify-between mb-6">
    <label class="flex items-center text-sm text-gray-700 dark:text-gray-300">
      <input type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded" bind:checked={remember} />
      <span class="ml-2">Remember me</span>
    </label>
    <a href="#" class="text-sm text-indigo-600 hover:underline">Forgot?</a>
  </div>

  <button
    class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-60 flex items-center justify-center"
    type="submit"
    disabled={submitting}
  >
    {#if submitting}
      <svg class="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      Signing in...
    {:else}
      Sign in
    {/if}
  </button>
</form>
