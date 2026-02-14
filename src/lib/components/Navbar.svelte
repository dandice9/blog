<script>
	import { onMount, onDestroy } from 'svelte';
	let open = false;
	let showFloating = false;
	const categories = [
		'Art market',
		'Museums',
		'Exhibitions',
		'Books',
		'Podcasts',
		'Columns',
		'Technology'
	];

	let handleScroll;

	onMount(() => {
		handleScroll = () => {
			const y = window.scrollY || 0;
			showFloating = y > 120;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
	});

	onDestroy(() => {
		if (handleScroll) window.removeEventListener('scroll', handleScroll);
	});
</script>

<!-- Single fixed navbar: uses compact mode when scrolled to avoid duplicate rendering -->
<nav class={"navbar bg-base-100 fixed top-0 left-0 right-0 z-30 transition-all duration-200 " + (showFloating ? 'shadow-sm py-2' : 'py-3') }>
	<div class="max-w-7xl mx-auto px-4 w-full">
		<div class="w-full flex items-center">
			<div class="navbar-start">
				<a href="/" class="text-lg font-bold">MyBlog</a>
			</div>

			<div class="navbar-center hidden lg:flex">
				<ul class="flex gap-6 text-sm text-neutral items-center whitespace-nowrap">
					{#each categories as c}
						<li>
							<a href={'/blog?cat=' + encodeURIComponent(c)} class="hover:text-primary px-2">{c}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="navbar-end ml-auto flex items-center">
				<form action="/blog" method="get" class="hidden sm:block ml-4">
					<input name="q" placeholder="Search" class="input input-sm input-bordered w-40 md:w-56" />
				</form>

				<button class="lg:hidden btn btn-ghost btn-square ml-2" on:click={() => (open = !open)} aria-label="menu">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>

		{#if open}
			<div class="lg:hidden mt-2 pb-3">
				<ul class="flex flex-col gap-1">
					{#each categories as c}
						<li>
							<a href={'/blog?cat=' + encodeURIComponent(c)} class="block py-2 px-2 border-b border-base-300">{c}</a>
						</li>
					{/each}
					<li class="pt-2 px-2">
						<form action="/blog" method="get">
							<input name="q" placeholder="Search" class="input input-sm input-bordered w-full" />
						</form>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</nav>

<!-- spacer to preserve document flow when navbar is fixed (prevents content jump) -->
<div class="h-14"></div>
