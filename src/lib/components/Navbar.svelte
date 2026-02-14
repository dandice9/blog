<script>
	const categories = [
		'Art market',
		'Museums',
		'Exhibitions',
		'Books',
		'Podcasts',
		'Columns',
		'Technology'
	];
</script>

<header class="sticky top-0 z-50 bg-base-100/95 backdrop-blur border-b border-base-300">
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

				<!-- Mobile hamburger dropdown -->
				<details class="dropdown dropdown-end lg:hidden">
					<summary class="btn btn-ghost btn-sm" aria-label="menu">☰</summary>
					<ul class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						{#each categories as c}
							<li><a href={'/blog?cat=' + encodeURIComponent(c)}>{c}</a></li>
						{/each}
						<li class="pt-2">
							<form action="/blog" method="get" class="px-2">
								<input name="q" placeholder="Search" class="input input-sm input-bordered w-full" />
							</form>
						</li>
					</ul>
				</details>
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
</header>
