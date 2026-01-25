<script lang="ts">
	import { page } from '$app/state';
	let { children, href, exact = false } = $props();

	const p = $derived(page.url.pathname);
	const active = $derived(exact ? p === href : p.startsWith(href));
</script>

<a {href} class="hover:backdrop-blur-sm" class:menu-active={active}>
	{@render children()}
</a>
