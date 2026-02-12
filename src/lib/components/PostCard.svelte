<script>
	export let post;
</script>

<article class="post-card">
	<div class="post-header">
		<h2>
			<a href="/blog/{post.slug}">{post.title}</a>
		</h2>
		<div class="post-meta">
			<span class="date">{new Date(post.date).toLocaleDateString('id-ID')}</span>
			<span class="author">oleh {post.author}</span>
		</div>
	</div>
	<p class="excerpt">{post.excerpt}</p>
	<a href="/blog/{post.slug}" class="read-more">Baca selengkapnya →</a>
</article>

<style>
	.post-card {
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 2rem;
		transition: all 0.3s ease;
	}

	.post-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.post-header {
		margin-bottom: 1rem;
	}

	h2 {
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
	}

	h2 a {
		color: #333;
		text-decoration: none;
		transition: color 0.3s;
	}

	h2 a:hover {
		color: #4a9eff;
	}

	.post-meta {
		display: flex;
		gap: 1rem;
		font-size: 0.9rem;
		color: #666;
	}

	.excerpt {
		color: #555;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.read-more {
		color: #4a9eff;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s;
	}

	.read-more:hover {
		color: #2979ca;
	}
</style>
