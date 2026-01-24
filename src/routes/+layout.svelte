<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/img/icons/favicon.png';
	import bg0 from '$lib/assets/img/bg0.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Portfolio d'Elfin Pouget - - Pejoan</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="sticky top-4 z-50 flex justify-center px-4">
	<div
		class="navbar w-full max-w-[1100px] rounded-xl bg-cover bg-bottom shadow-md"
		style="background-image: url({bg0});"
	>
		<div class="navbar-start">
			<a class="px-4 text-xl" href="/">&lt;Portfolio/&gt;</a>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal hidden px-1 lg:flex">
				<li><a href="/" class="hover:backdrop-blur-sm">Accueil</a></li>
				<li><a href="/career" class="hover:backdrop-blur-sm">Parcours</a></li>
				<li><a href="/projects" class="hover:backdrop-blur-sm">Projets</a></li>
				<li><a href="/skills" class="hover:backdrop-blur-sm">Competences</a></li>
				<li><a href="/cv" class="hover:backdrop-blur-sm">Mon CV</a></li>
				<li><a href="/contact" class="hover:backdrop-blur-sm">Contact</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="flex justify-center px-4 pt-10">
	<div class="w-full max-w-[1100px]">
		{@render children()}
	</div>
</div>
