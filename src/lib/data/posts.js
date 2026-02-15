export const posts = [
	{
		slug: 'hello-world',
		title: 'Hello World!',
		author: 'Admin',
		date: '2026-01-15',
		excerpt: 'Selamat datang di blog saya. Ini adalah post pertama saya di SvelteKit.',
		coverImage: 'https://picsum.photos/seed/hello-world/1200/800',
		content: `
			<h2>Pengenalan</h2>
			<p>Selamat datang di blog saya! Saya sangat senang bisa berbagi pengetahuan dan pengalaman melalui blog ini.</p>
			
			<h2>Tentang Blog Ini</h2>
			<p>Blog ini dibangun menggunakan SvelteKit, framework modern untuk membangun aplikasi web. Saya akan memposting berbagai topik menarik di sini.</p>
			
			<h2>Apa yang Akan Datang</h2>
			<p>Tunggu post-post menarik seputar web development, tutorial, dan tips & tricks!</p>
		`
	},
	{
		slug: 'belajar-svelte',
		title: 'Memulai Belajar Svelte',
		author: 'Admin',
		date: '2026-01-20',
		excerpt: 'Tutorial dasar memulai dengan Svelte - reactive framework yang powerful dan mudah dipelajari.',
		coverImage: 'https://picsum.photos/seed/belajar-svelte/1200/800',
		content: `
			<h2>Apa itu Svelte?</h2>
			<p>Svelte adalah framework JavaScript yang mengambil pendekatan unik - compiler instead of runtime.</p>
			
			<h2>Keuntungan Svelte</h2>
			<ul>
				<li>Bundle size lebih kecil</li>
				<li>Performance yang excellent</li>
				<li>Sintaks yang intuitif</li>
				<li>Reactive secara default</li>
			</ul>
			
			<h2>Getting Started</h2>
			<p>Untuk memulai, ikuti dokumentasi resmi di svelte.dev dan jangan takut untuk eksperimen!</p>
		`
	},
	{
		slug: 'sveltekit-routing',
		title: 'File-Based Routing di SvelteKit',
		author: 'Admin',
		date: '2026-02-01',
		excerpt: 'Pahami sistem routing di SvelteKit yang menggunakan file-based approach untuk kemudahan development.',
		coverImage: 'https://picsum.photos/seed/sveltekit-routing/1200/800',
		content: `
			<h2>File-Based Routing</h2>
			<p>SvelteKit menggunakan file-based routing, mirip dengan Next.js, yang membuat struktur project lebih terorganisir.</p>
			
			<h2>Struktur Folder</h2>
			<p>Setiap file +page.svelte di dalam src/routes akan menjadi route yang accessible.</p>
			
			<h2>Dynamic Routes</h2>
			<p>Untuk membuat dynamic routes, gunakan [param] di nama folder, seperti [slug] untuk blog post.</p>
		`
	},
    {
		slug: 'sveltekit-routing-2',
		title: 'File-Based Routing di SvelteKit - Bagian 2',
		author: 'Admin',
		date: '2026-02-01',
		excerpt: 'Pahami sistem routing di SvelteKit yang menggunakan file-based approach untuk kemudahan development.',
		coverImage: 'https://picsum.photos/seed/sveltekit-routing-2/1200/800',
		content: `
			<h2>File-Based Routing Tes</h2>
			<p>SvelteKit menggunakan file-based routing, mirip dengan Next.js, yang membuat struktur project lebih terorganisir.</p>
			
			<h2>Struktur Folder</h2>
			<p>Setiap file +page.svelte di dalam src/routes akan menjadi route yang accessible.</p>
			
			<h2>Dynamic Routes</h2>
			<p>Untuk membuat dynamic routes, gunakan [param] di nama folder, seperti [slug] untuk blog post.</p>
		`
	}
];

export function getPostBySlug(slug) {
	return posts.find(post => post.slug === slug);
}

export function getAllPosts() {
	return posts;
}
