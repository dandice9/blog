<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<div class="container">
		<div class="navbar-brand">
			<a href="/" class="logo">MyBlog</a>
		</div>
		<ul class="nav-links">
			<li>
				<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			</li>
			<li>
				<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		background-color: #333;
		padding: 1rem 0;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar-brand {
		display: flex;
		align-items: center;
	}

	.logo {
		color: white;
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
	}

	.logo:hover {
		color: #4a9eff;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 2rem;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		color: white;
		text-decoration: none;
		transition: color 0.3s;
		padding: 0.5rem 0;
		border-bottom: 2px solid transparent;
	}

	.nav-links a:hover {
		color: #4a9eff;
	}

	.nav-links a.active {
		color: #4a9eff;
		border-bottom-color: #4a9eff;
	}
</style>
