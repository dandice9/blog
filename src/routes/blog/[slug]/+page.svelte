<script>
	import { page } from '$app/stores';
	import { getPostBySlug } from '$lib/data/posts';

	$: post = getPostBySlug($page.params.slug);
</script>

<svelte:head>
		<title>{post.title} - MyBlog</title>
		<meta name="description" content={post.excerpt} />
	</svelte:head>

{#if post}
	

	<article class="container">
		<div class="post-header">
			<h1>{post.title}</h1>
			<div class="post-meta">
				<span class="date">{new Date(post.date).toLocaleDateString('id-ID', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</span>
				<span class="author">oleh {post.author}</span>
			</div>
		</div>

		<div class="post-content">
			{@html post.content}
		</div>

		<div class="post-footer">
			<a href="/blog" class="back-link">← Kembali ke Blog</a>
		</div>
	</article>
{:else}
	<div class="container error-message">
		<h1>Post Tidak Ditemukan</h1>
		<p>Maaf, post yang Anda cari tidak ada.</p>
		<a href="/blog" class="back-link">← Kembali ke Blog</a>
	</div>
{/if}

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 2px solid #e0e0e0;
		padding-bottom: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.post-meta {
		display: flex;
		gap: 1rem;
		color: #666;
		font-size: 0.95rem;
	}

	.post-content {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #444;
		margin-bottom: 3rem;
	}

	.post-content :global(h2) {
		font-size: 1.8rem;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.post-content :global(p) {
		margin-bottom: 1rem;
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		margin-bottom: 1rem;
		padding-left: 2rem;
	}

	.post-content :global(li) {
		margin-bottom: 0.5rem;
	}

	.post-footer {
		padding-top: 2rem;
		border-top: 2px solid #e0e0e0;
	}

	.back-link {
		color: #4a9eff;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s;
	}

	.back-link:hover {
		color: #2979ca;
	}

	.error-message {
		text-align: center;
		padding: 4rem 1rem;
	}

	.error-message h1 {
		color: #e74c3c;
		margin-bottom: 1rem;
	}

	.error-message p {
		color: #666;
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}
</style>
