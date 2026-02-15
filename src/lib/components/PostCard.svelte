<script>
	export let post;
	export let variant = 'default'; // "default" | "featured"

	const url = () => `/blog/${post?.slug ?? ''}`;

	function formatDate(d) {
		if (!d) return '';
		try {
			const dt = new Date(d);
			return dt.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
		} catch (e) {
			return d;
		}
	}
</script>

<a
	class="card {variant}"
	href={url()}
	aria-label={post?.title ? `Baca artikel: ${post.title}` : 'Baca artikel'}
>
	{#if post?.category}
		<div class="badge" aria-hidden="true">{post.category}</div>
	{/if}

	{#if variant === 'featured'}
		<div class="featured-inner">
			<div class="media">
				{#if post?.coverImage}
					<img src={post.coverImage} alt={post.title ?? 'Cover image'} loading="lazy" />
				{:else}
					<div class="placeholder" aria-hidden="true"></div>
				{/if}
			</div>

			<div class="content">
				<h3 class="title">{post?.title}</h3>
				<div class="meta">
					{formatDate(post?.date)}
					{post?.author ? ` • ${post.author}` : ''}
				</div>
				{#if post?.excerpt}
					<p class="excerpt">{post.excerpt}</p>
				{/if}
				<div class="readmore">Baca selengkapnya →</div>
			</div>
		</div>
	{:else}
		{#if post?.coverImage}
			<div class="media">
				<img src={post.coverImage} alt={post.title ?? 'Cover image'} loading="lazy" />
			</div>
		{:else}
			<div class="media placeholder" aria-hidden="true"></div>
		{/if}

		<div class="content">
			<h3 class="title">{post?.title}</h3>
			<div class="meta">
				{formatDate(post?.date)}
				{post?.author ? ` • ${post.author}` : ''}
			</div>
			{#if post?.excerpt}
				<p class="excerpt">{post.excerpt}</p>
			{/if}
			<div class="readmore">Baca selengkapnya →</div>
		</div>
	{/if}
</a>

<style>
	.card {
		display: block;
		position: relative;
		overflow: hidden;
		border: 1px solid #e8e8e8;
		border-radius: 16px;
		background: #fff;
		color: inherit;
		text-decoration: none;
		transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(18, 23, 26, 0.08);
		border-color: #e0e0e0;
	}

	.badge {
		position: absolute;
		left: 12px;
		top: 12px;
		background: rgba(0, 0, 0, 0.06);
		color: #222;
		padding: 6px 10px;
		border-radius: 999px;
		font-size: 0.8rem;
		z-index: 2;
		pointer-events: none;
	}

	.media {
		width: 100%;
		min-height: 160px;
		overflow: hidden;
		background: linear-gradient(135deg, #f3f4f6, #e9eef6);
	}

	.media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder {
		min-height: 160px;
		background: linear-gradient(135deg, #f2f5ff 0%, #eef7f4 50%, #f7f3ff 100%);
	}

	.content {
		padding: 1rem 1rem 1.25rem 1rem;
	}

	.title {
		margin: 0 0 0.4rem 0;
		font-size: 1.05rem;
		color: #111;
		line-height: 1.25;
	}

	.meta {
		font-size: 0.85rem;
		color: #666;
		margin-bottom: 0.6rem;
	}

	.excerpt {
		margin: 0 0 0.9rem 0;
		color: #333;
		font-size: 0.98rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		-webkit-line-clamp: 3;
	}

	.readmore {
		font-weight: 600;
		color: #0b66ff;
		font-size: 0.95rem;
	}

	/* Featured layout */
	.card.featured .featured-inner {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 720px) {
		.card.featured .featured-inner {
			flex-direction: row;
			align-items: stretch;
		}

		.card.featured .media {
			width: 40%;
			min-height: 220px;
			flex-shrink: 0;
		}

		.card.featured .content {
			padding: 1.25rem 1.5rem;
			width: 60%;
		}

		.card.featured .title {
			font-size: 1.35rem;
		}
	}
</style>
