<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { mobileOpen } from '$lib/stores/mobileOpen';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Navbar stays fixed and does NOT shift with the drawer -->
<Navbar />

<!-- Only this wrapper (main + footer) shifts when drawer is open. lg+ stays at translateX(0). -->
<div class={`app-shell transform transition-transform duration-300 lg:translate-x-0`} style={`--drawer-w: min(80vw, 320px); transform: ${$mobileOpen ? 'translateX(calc(-1 * var(--drawer-w)))' : 'translateX(0)'} `}>
	<main class="pt-14">
		{@render children()}
	</main>
	<Footer />
</div>
