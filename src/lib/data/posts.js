export const posts = [
	{
		slug: 'hello-world',
		title: 'Hello World!',
		author: 'Admin',
		category: 'Art market',
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
		category: 'Museums',
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
		category: 'Exhibitions',
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
		category: 'Books',
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
	,
	{
		slug: 'dummy-post-1',
		title: 'Posting Dummy 1',
		author: 'Admin',
		category: 'Podcasts',
		date: '2026-02-02',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-1/1200/800',
		content: `
			<h2>Dummy 1</h2>
			<p>Ini adalah konten dummy ke-1 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-2',
		title: 'Posting Dummy 2',
		author: 'Admin',
		category: 'Columns',
		date: '2026-02-03',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-2/1200/800',
		content: `
			<h2>Dummy 2</h2>
			<p>Ini adalah konten dummy ke-2 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-3',
		title: 'Posting Dummy 3',
		author: 'Admin',
		category: 'Technology',
		date: '2026-02-04',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-3/1200/800',
		content: `
			<h2>Dummy 3</h2>
			<p>Ini adalah konten dummy ke-3 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-4',
		title: 'Posting Dummy 4',
		author: 'Admin',
		category: 'Art market',
		date: '2026-02-05',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-4/1200/800',
		content: `
			<h2>Dummy 4</h2>
			<p>Ini adalah konten dummy ke-4 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-5',
		title: 'Posting Dummy 5',
		author: 'Admin',
		category: 'Museums',
		date: '2026-02-06',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-5/1200/800',
		content: `
			<h2>Dummy 5</h2>
			<p>Ini adalah konten dummy ke-5 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-6',
		title: 'Posting Dummy 6',
		author: 'Admin',
		category: 'Exhibitions',
		date: '2026-02-07',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-6/1200/800',
		content: `
			<h2>Dummy 6</h2>
			<p>Ini adalah konten dummy ke-6 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-7',
		title: 'Posting Dummy 7',
		author: 'Admin',
		category: 'Books',
		date: '2026-02-08',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-7/1200/800',
		content: `
			<h2>Dummy 7</h2>
			<p>Ini adalah konten dummy ke-7 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-8',
		title: 'Posting Dummy 8',
		author: 'Admin',
		category: 'Podcasts',
		date: '2026-02-09',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-8/1200/800',
		content: `
			<h2>Dummy 8</h2>
			<p>Ini adalah konten dummy ke-8 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-9',
		title: 'Posting Dummy 9',
		author: 'Admin',
		category: 'Columns',
		date: '2026-02-10',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-9/1200/800',
		content: `
			<h2>Dummy 9</h2>
			<p>Ini adalah konten dummy ke-9 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-10',
		title: 'Posting Dummy 10',
		author: 'Admin',
		category: 'Technology',
		date: '2026-02-11',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-10/1200/800',
		content: `
			<h2>Dummy 10</h2>
			<p>Ini adalah konten dummy ke-10 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-11',
		title: 'Posting Dummy 11',
		author: 'Admin',
		category: 'Art market',
		date: '2026-02-12',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-11/1200/800',
		content: `
			<h2>Dummy 11</h2>
			<p>Ini adalah konten dummy ke-11 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-12',
		title: 'Posting Dummy 12',
		author: 'Admin',
		category: 'Museums',
		date: '2026-02-13',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-12/1200/800',
		content: `
			<h2>Dummy 12</h2>
			<p>Ini adalah konten dummy ke-12 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-13',
		title: 'Posting Dummy 13',
		author: 'Admin',
		category: 'Exhibitions',
		date: '2026-02-14',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-13/1200/800',
		content: `
			<h2>Dummy 13</h2>
			<p>Ini adalah konten dummy ke-13 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-14',
		title: 'Posting Dummy 14',
		author: 'Admin',
		category: 'Books',
		date: '2026-02-15',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-14/1200/800',
		content: `
			<h2>Dummy 14</h2>
			<p>Ini adalah konten dummy ke-14 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-15',
		title: 'Posting Dummy 15',
		author: 'Admin',
		category: 'Podcasts',
		date: '2026-02-16',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-15/1200/800',
		content: `
			<h2>Dummy 15</h2>
			<p>Ini adalah konten dummy ke-15 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-16',
		title: 'Posting Dummy 16',
		author: 'Admin',
		category: 'Columns',
		date: '2026-02-17',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-16/1200/800',
		content: `
			<h2>Dummy 16</h2>
			<p>Ini adalah konten dummy ke-16 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-17',
		title: 'Posting Dummy 17',
		author: 'Admin',
		category: 'Technology',
		date: '2026-02-18',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-17/1200/800',
		content: `
			<h2>Dummy 17</h2>
			<p>Ini adalah konten dummy ke-17 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-18',
		title: 'Posting Dummy 18',
		author: 'Admin',
		category: 'Art market',
		date: '2026-02-19',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-18/1200/800',
		content: `
			<h2>Dummy 18</h2>
			<p>Ini adalah konten dummy ke-18 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-19',
		title: 'Posting Dummy 19',
		author: 'Admin',
		category: 'Museums',
		date: '2026-02-20',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-19/1200/800',
		content: `
			<h2>Dummy 19</h2>
			<p>Ini adalah konten dummy ke-19 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-20',
		title: 'Posting Dummy 20',
		author: 'Admin',
		category: 'Exhibitions',
		date: '2026-02-21',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-20/1200/800',
		content: `
			<h2>Dummy 20</h2>
			<p>Ini adalah konten dummy ke-20 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-21',
		title: 'Posting Dummy 21',
		author: 'Admin',
		category: 'Books',
		date: '2026-02-22',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-21/1200/800',
		content: `
			<h2>Dummy 21</h2>
			<p>Ini adalah konten dummy ke-21 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-22',
		title: 'Posting Dummy 22',
		author: 'Admin',
		category: 'Podcasts',
		date: '2026-02-23',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-22/1200/800',
		content: `
			<h2>Dummy 22</h2>
			<p>Ini adalah konten dummy ke-22 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-23',
		title: 'Posting Dummy 23',
		author: 'Admin',
		category: 'Columns',
		date: '2026-02-24',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-23/1200/800',
		content: `
			<h2>Dummy 23</h2>
			<p>Ini adalah konten dummy ke-23 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-24',
		title: 'Posting Dummy 24',
		author: 'Admin',
		category: 'Technology',
		date: '2026-02-25',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-24/1200/800',
		content: `
			<h2>Dummy 24</h2>
			<p>Ini adalah konten dummy ke-24 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-25',
		title: 'Posting Dummy 25',
		author: 'Admin',
		category: 'Art market',
		date: '2026-02-26',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-25/1200/800',
		content: `
			<h2>Dummy 25</h2>
			<p>Ini adalah konten dummy ke-25 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-26',
		title: 'Posting Dummy 26',
		author: 'Admin',
		category: 'Museums',
		date: '2026-02-27',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-26/1200/800',
		content: `
			<h2>Dummy 26</h2>
			<p>Ini adalah konten dummy ke-26 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-27',
		title: 'Posting Dummy 27',
		author: 'Admin',
		category: 'Exhibitions',
		date: '2026-02-28',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-27/1200/800',
		content: `
			<h2>Dummy 27</h2>
			<p>Ini adalah konten dummy ke-27 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-28',
		title: 'Posting Dummy 28',
		author: 'Admin',
		category: 'Books',
		date: '2026-03-01',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-28/1200/800',
		content: `
			<h2>Dummy 28</h2>
			<p>Ini adalah konten dummy ke-28 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-29',
		title: 'Posting Dummy 29',
		author: 'Admin',
		category: 'Podcasts',
		date: '2026-03-02',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-29/1200/800',
		content: `
			<h2>Dummy 29</h2>
			<p>Ini adalah konten dummy ke-29 untuk mengisi data blog.</p>
		`
	},
	{
		slug: 'dummy-post-30',
		title: 'Posting Dummy 30',
		author: 'Admin',
		category: 'Columns',
		date: '2026-03-03',
		excerpt: 'Contoh posting dummy untuk pengujian fitur.',
		coverImage: 'https://picsum.photos/seed/dummy-post-30/1200/800',
		content: `
			<h2>Dummy 30</h2>
			<p>Ini adalah konten dummy ke-30 untuk mengisi data blog.</p>
		`
	}
];

export function getPostBySlug(slug) {
	return posts.find(post => post.slug === slug);
}

export function getAllPosts() {
	return posts;
}
