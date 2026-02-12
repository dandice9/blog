<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import { getAllPosts } from '$lib/data/posts';

	const posts = getAllPosts().slice(0, 3); // Tampilkan 3 post terbaru di homepage
</script>

<svelte:head>
	<title>Home - MyBlog</title>
	<meta name="description" content="Blog personal dengan artikel menarik tentang web development" />
</svelte:head>

<div class="container">
	<section class="hero">
		<h1>Welcome to MyBlog</h1>
		<p>Berbagi pengetahuan tentang web development, Svelte, dan teknologi modern lainnya</p>
		<a href="/blog" class="cta-button">Baca Semua Artikel →</a>
	</section>

	<section class="recent-posts">
		<h2>Post Terbaru</h2>
		{#each posts as post (post.slug)}
			<PostCard {post} />
		{/each}
	</section>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.hero {
		text-align: center;
		padding: 4rem 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 8px;
		color: white;
		margin-bottom: 4rem;
	}

	.hero h1 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
		font-weight: bold;
	}

	.hero p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.cta-button {
		display: inline-block;
		background-color: white;
		color: #667eea;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: bold;
		transition: all 0.3s ease;
	}

	.cta-button:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.recent-posts h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: #333;
	}
</style>
