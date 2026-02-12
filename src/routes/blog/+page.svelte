<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import { getAllPosts } from '$lib/data/posts';

	const posts = getAllPosts();
</script>

<svelte:head>
	<title>Blog - MyBlog</title>
	<meta name="description" content="Baca semua artikel blog kami" />
</svelte:head>

<div class="container">
	<h1>Blog</h1>
	<p class="subtitle">Artikel dan tutorial terkini</p>

	<div class="posts-list">
		{#each posts as post (post.slug)}
			<PostCard {post} />
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.subtitle {
		color: #666;
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}

	.posts-list {
		display: grid;
		gap: 2rem;
	}
</style>
