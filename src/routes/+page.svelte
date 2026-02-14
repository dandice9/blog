<script>
	import TopPromoBar from '$lib/components/TopPromoBar.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import FeaturedLayout from '$lib/components/FeaturedLayout.svelte';
</script>

<svelte:head>
	<title>Home - MyBlog</title>
	<meta name="description" content="Blog personal dengan artikel menarik tentang web development" />
</svelte:head>

<TopPromoBar />

<main class="bg-white">
	<!-- Use a consistent container for the header, then place the featured layout (which has its own container) below -->
	<div class="max-w-7xl mx-auto px-4 py-6">
		<SectionHeader title="Diary" link="/blog" />
	</div>

	<FeaturedLayout />

</main>

