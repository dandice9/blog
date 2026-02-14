<script lang="ts">
	import { mobileOpen } from '$lib/stores/mobileOpen';
	import { browser } from '$app/environment';

	const categories = [
		'Art market',
		'Museums',
		'Exhibitions',
		'Books',
		'Podcasts',
		'Columns',
		'Technology'
	];

	const open = () => mobileOpen.set(true);
	const close = () => mobileOpen.set(false);

	// Lock scroll when drawer open and restore on close/cleanup
	$effect(() => {
		if (!browser) return;
		if ($mobileOpen) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';

		return () => {
			document.body.style.overflow = '';
		};
	});

	// ESC to close
	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Escape' && $mobileOpen) mobileOpen.set(false);
	}

	$effect(() => {
		if (!browser) return;
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});
</script>

<header class="sticky top-0 z-30 bg-base-100/95 backdrop-blur border-b border-base-300" style="--drawer-w: min(80vw, 320px);">
	<div class="max-w-7xl mx-auto px-4">
		<!-- relative supaya center bisa absolute -->
		<div class="relative flex items-center h-14">
			<!-- LEFT: Logo -->
			<div class="flex items-center min-w-[120px]">
				<a href="/" class="text-lg font-bold leading-none">MyBlog</a>
			</div>

			<!-- CENTER: Menu (absolute center) -->
			<nav class="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center">
				<ul class="menu menu-horizontal gap-5 px-1 text-sm whitespace-nowrap !flex !flex-row !items-center [&>li]:!inline-flex [&>li]:!items-center [&>li]:!w-auto [&>li>a]:!inline-flex [&>li>a]:!items-center [&>li>a]:!whitespace-nowrap [&>li>a]:!px-1">
					{#each categories as c}
						<li>
							<a class="h-14 flex items-center px-1" href={'/blog?cat=' + encodeURIComponent(c)}>
								{c}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- RIGHT: Search + Mobile Menu -->
			<div class="ml-auto flex items-center gap-2 min-w-[220px] justify-end">
				<!-- Desktop search -->
				<form action="/blog" method="get" class="hidden lg:flex items-center">
					<input
						name="q"
						placeholder="Search"
						class="input input-bordered input-sm h-9 w-44 md:w-56"
					/>
				</form>

				<!-- Mobile hamburger (opens push drawer) -->
				<button
					class="btn btn-ghost btn-sm lg:hidden"
					class:hidden={$mobileOpen}
					aria-label="menu"
					aria-expanded={$mobileOpen}
					on:click={open}
				>
					☰
				</button>
			</div>
		</div>
	</div>
			<style>
				/* Force navbar menu to be horizontal and inline despite any external overrides.
					 Scoped to .navbar to avoid touching other menus. Uses !important to beat global rules. */
				:global(.navbar .menu.menu-horizontal) {
					display: flex !important;
					flex-direction: row !important;
					align-items: center !important;
					gap: 1.25rem !important; /* match gap-5 */
				}

				:global(.navbar .menu.menu-horizontal > li) {
					display: inline-flex !important;
				}

				:global(.navbar .menu.menu-horizontal > li > a) {
					white-space: nowrap !important;
					display: inline-flex !important;
					align-items: center !important;
					height: 56px !important; /* h-14 */
					padding-left: 0.25rem !important;
					padding-right: 0.25rem !important;
				}

	</style>

				<!-- Mobile overlay (full screen, below drawer) -->
				{#if $mobileOpen}
					<button
						class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
						aria-label="Close menu overlay"
						on:click={() => mobileOpen.set(false)}
					></button>
				{/if}

				<!-- Drawer panel (mobile) - starts below navbar -->
				<aside class={`fixed right-0 top-14 bg-base-100 shadow-xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${$mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} style="width: var(--drawer-w); height: calc(100vh - 56px);" aria-hidden={!$mobileOpen}>
					<div class="flex items-center justify-between p-4 border-b border-base-300">
						<div class="font-bold">Menu</div>
						<button class="btn btn-ghost btn-sm" aria-label="Close menu" on:click={close}>✕</button>
					</div>

					<nav class="p-4 overflow-auto">
						<ul class="menu menu-vertical gap-1">
							{#each categories as c}
								<li><a href={'/blog?cat=' + encodeURIComponent(c)} on:click={close}>{c}</a></li>
							{/each}
						</ul>

						<div class="pt-4">
							<form action="/blog" method="get">
								<input name="q" placeholder="Search" class="input input-bordered w-full" />
							</form>
						</div>
					</nav>
				</aside>
</header>
