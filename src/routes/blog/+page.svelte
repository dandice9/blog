<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import { getAllPosts } from '$lib/data/posts';

	const posts = getAllPosts();

	// ===== UI State =====
	let q = '';
	let category = 'All';
	let sort = 'newest';

	// Ambil semua kategori unik dari posts
	$: categories = ['All', ...new Set(posts.map((p) => p.category).filter(Boolean))];

	// Sorting helper (sesuaikan field date kamu ya)
	function sortPosts(list) {
		const toTime = (d) => (d ? new Date(d).getTime() : 0);

		if (sort === 'newest') return [...list].sort((a, b) => toTime(b.date) - toTime(a.date));
		if (sort === 'oldest') return [...list].sort((a, b) => toTime(a.date) - toTime(b.date));
		if (sort === 'title') return [...list].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
		return list;
	}

	// Filter + search
	$: filtered = posts.filter((p) => {
		const text = `${p.title ?? ''} ${p.excerpt ?? ''} ${p.category ?? ''}`.toLowerCase();
		const matchQuery = text.includes(q.toLowerCase());
		const matchCat = category === 'All' ? true : p.category === category;
		return matchQuery && matchCat;
	});

	$: ordered = sortPosts(filtered);

	// Featured (post pertama setelah sort/filter)
	$: featured = ordered[0];
	$: rest = ordered.slice(1);
</script>

<svelte:head>
	<title>Blog - MyBlog</title>
	<meta name="description" content="Baca semua artikel blog kami" />
</svelte:head>

<div class="container">
	<header class="header">
		<div>
			<h1>Blog</h1>
			<p class="subtitle">Artikel dan tutorial terkini</p>
		</div>

		<!-- Toolbar -->
		<div class="toolbar">
			<div class="search">
				<input
					type="search"
					placeholder="Cari artikel..."
					bind:value={q}
					aria-label="Cari artikel"
				/>
			</div>

			<div class="controls">
				<select bind:value={category} aria-label="Filter kategori">
					{#each categories as c}
						<option value={c}>{c}</option>
					{/each}
				</select>

				<select bind:value={sort} aria-label="Urutkan">
					<option value="newest">Terbaru</option>
					<option value="oldest">Terlama</option>
					<option value="title">Judul A–Z</option>
				</select>
			</div>
		</div>
	</header>

	{#if featured}
		<section class="featured">
			<h2 class="section-title">Terbaru</h2>
			<!-- Untuk tampil beda, PostCard bisa kamu kasih prop "variant" -->
			<PostCard post={featured} variant="featured" />
		</section>
	{/if}

	<section class="list">
		<h2 class="section-title">Semua artikel</h2>

		{#if rest.length === 0}
			<div class="empty">
				<p>Tidak ada artikel yang cocok.</p>
			</div>
		{:else}
			<div class="grid">
				{#each rest as post (post.slug)}
					<PostCard {post} />
				{/each}
			</div>
		{/if}
	</section>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2.5rem 1rem 4rem;
	}

	.header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.25rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	h1 {
		font-size: 2.4rem;
		margin: 0 0 0.35rem 0;
		color: #222;
		letter-spacing: -0.02em;
	}

	.subtitle {
		color: #666;
		font-size: 1.05rem;
		margin: 0;
	}

	/* Toolbar */
	.toolbar {
		display: grid;
		gap: 0.75rem;
		min-width: min(520px, 100%);
	}

	.search input {
		width: 100%;
		padding: 0.8rem 0.9rem;
		border: 1px solid #e5e5e5;
		border-radius: 12px;
		outline: none;
		background: #fff;
	}

	.search input:focus {
		border-color: #c9c9c9;
		box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.04);
	}

	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	select {
		width: 100%;
		padding: 0.7rem 0.8rem;
		border: 1px solid #e5e5e5;
		border-radius: 12px;
		background: #fff;
	}

	/* Sections */
	.section-title {
		font-size: 1rem;
		color: #777;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin: 0 0 1rem 0;
	}

	.featured {
		margin-bottom: 2.5rem;
	}

	/* Grid list */
	.grid {
		display: grid;
		gap: 1.25rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 720px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.empty {
		border: 1px dashed #e0e0e0;
		border-radius: 16px;
		padding: 1.25rem;
		color: #666;
	}
</style>