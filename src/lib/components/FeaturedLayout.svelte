<script>
    import { posts } from '$lib/data/posts';

    const featured = posts[0];
    const mid = posts.slice(1, 3);
    const side = posts.slice(3, 8);

    function imgUrl(slug, w = 1200, h = 700) {
        return `https://picsum.photos/seed/${encodeURIComponent(slug)}/${w}/${h}`;
    }
</script>

<section class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7">
            {#if featured}
                <a href={'/blog/' + featured.slug} class="block group">
                    <div class="overflow-hidden rounded">
                        <img src={imgUrl(featured.slug, 1200, 675)} alt={featured.title} class="w-full aspect-[16/9] object-cover rounded" />
                    </div>

                    <h3 class="mt-4 text-2xl md:text-3xl lg:text-4xl font-serif group-hover:text-primary">{featured.title}</h3>
                    <div class="text-sm text-neutral mt-2">{new Date(featured.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })} · {featured.author}</div>
                    <p class="mt-3 text-base text-neutral-700">{featured.excerpt}</p>
                </a>
            {/if}
        </div>

        <div class="lg:col-span-3 flex flex-col gap-6">
            {#each mid as p}
                <a href={'/blog/' + p.slug} class="block group">
                    <div class="flex gap-4">
                        <img src={imgUrl(p.slug, 320, 180)} class="w-28 h-20 object-cover rounded" alt={p.title} />
                        <div>
                            <h4 class="font-semibold group-hover:text-primary">{p.title}</h4>
                            <p class="text-sm text-neutral-600 mt-1 line-clamp-3">{p.excerpt}</p>
                        </div>
                    </div>
                </a>
            {/each}
        </div>

        <aside class="lg:col-span-2">
            <div class="border-l border-base-300 pl-6 py-2">
                <div class="flex flex-col gap-3">
                    {#each side as s}
                        <a href={'/blog/' + s.slug} class="block py-3 text-sm border-b border-base-200 last:border-b-0">
                            <div class="text-xs text-neutral-500">{new Date(s.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</div>
                            <div class="text-sm font-medium">{s.title}</div>
                        </a>
                    {/each}
                </div>
            </div>
        </aside>
    </div>
</section>
