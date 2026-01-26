<script lang="ts">
	import './layout.css';

	import NavLink from '$lib/components/NavLink.svelte';

	import favicon from '$lib/assets/img/icons/favicon.png';
	import nifle_logo from '$lib/assets/img/icons/logo_nifle_transparent.png';
	import bg0 from '$lib/assets/img/bg0.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Portfolio d'Elfin Pouget - - Pejoan</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-dvh flex-col">
	<div class="sticky top-4 z-50 flex justify-center px-4">
		<div
			class="navbar w-full max-w-(--page-width) rounded-xl bg-cover bg-bottom text-black shadow-md"
			style="background-image: url({bg0});"
		>
			<div class="navbar-start">
				<a class="px-4 text-xl" href="/">&lt;Portfolio/&gt;</a>
			</div>
			<div class="navbar-end">
				<ul class="menu menu-horizontal hidden px-1 lg:flex">
					<li><NavLink href="/" exact={true}>Accueil</NavLink></li>
					<li><NavLink href="/career">Parcours</NavLink></li>
					<li><NavLink href="/projects">Projets</NavLink></li>
					<li><NavLink href="/skills">Compétences</NavLink></li>
					<li><NavLink href="/cv">Mon CV</NavLink></li>
					<li><NavLink href="/contact">Contact</NavLink></li>
				</ul>
				<ul class="menu menu-horizontal px-1 lg:hidden">
					<li>
						<details>
							<summary>Menu</summary>
							<ul class="m-0 bg-base-200 text-base-content right-0">
								<li><NavLink href="/" exact={true}>Accueil</NavLink></li>
								<li><NavLink href="/career">Parcours</NavLink></li>
								<li><NavLink href="/projects">Projets</NavLink></li>
								<li><NavLink href="/skills">Compétences</NavLink></li>
								<li><NavLink href="/cv">Mon CV</NavLink></li>
								<li><NavLink href="/contact">Contact</NavLink></li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex grow justify-center px-4 py-10">
		<div class="w-full flex flex-col max-w-(--page-width)">
			{@render children()}
		</div>
	</div>

	<footer class="footer bg-neutral p-10 text-neutral-content sm:footer-horizontal">
		<aside>
			<img class="h-12 w-12" src={nifle_logo} alt="" />
			<p>
				&copy; 2026 Nifle CGE - Tout droits réservés
				<br />
				En vie depuis 2005
			</p>
		</aside>
		<nav>
			<h6 class="footer-title">Social</h6>
			<div class="grid grid-flow-col gap-4">
				<a
					href="https://github.com/Nifle-CGE"
					aria-label="Nifle CGE sur GitHub"
					title="Nifle CGE sur GitHub"
				>
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current">
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						></path>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/nifle"
					aria-label="Elfin Pouget - - Pejoan sur LinkedIn"
					title="Elfin Pouget - - Pejoan sur LinkedIn"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 fill-current"
					>
						<path
							d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
						/>
						<path
							d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
						/>
						<path
							d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
						/>
					</svg>
				</a>
			</div>
		</nav>
	</footer>
</div>
