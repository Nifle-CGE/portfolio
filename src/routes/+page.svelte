<script lang="ts">
	import avatar from '$lib/assets/img/avatar.png';
	import bg2 from '$lib/assets/img/bg/bg2.png';
	import bg4 from '$lib/assets/img/bg/bg4.png';
</script>

<div class="flex flex-col items-center gap-6">
	<h2 class="text-2xl">Bienvenue sur mon Portfolio</h2>

	<div class="rounded-3xl bg-cover bg-center" style="background-image: url({bg4});">
		<div
			class="card rounded-3xl border-primary shadow-xl backdrop-brightness-20 transition duration-500 card-border hover:backdrop-brightness-30"
		>
			<div class="card-body flex flex-col gap-9 text-primary-content lg:flex-row lg:px-10">
				<div class="hover-3d">
					<div class="hexagon avatar h-min w-min">
						<div class="h-64 w-64">
							<img src={avatar} alt="Elfin Pouget - - Pejoan" />
						</div>
					</div>
					<!-- 8 empty divs needed for the 3D effect -->
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div>
					<h1 class="card-title pb-10 font-grotesk text-5xl font-medium">
						Elfin Pouget - - Pejoan
					</h1>

					<div class="space-y-4 font-inter">
						<div class="flex">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-6 w-6"
							>
								<path
									d="M17 14.5001V11.4945C17 11.315 17 11.2253 16.9727 11.146C16.9485 11.076 16.9091 11.0122 16.8572 10.9592C16.7986 10.8993 16.7183 10.8592 16.5578 10.779L12 8.50006M4 9.50006V16.3067C4 16.6786 4 16.8645 4.05802 17.0274C4.10931 17.1713 4.1929 17.3016 4.30238 17.4082C4.42622 17.5287 4.59527 17.6062 4.93335 17.7612L11.3334 20.6945C11.5786 20.8069 11.7012 20.8631 11.8289 20.8853C11.9421 20.9049 12.0579 20.9049 12.1711 20.8853C12.2988 20.8631 12.4214 20.8069 12.6666 20.6945L19.0666 17.7612C19.4047 17.6062 19.5738 17.5287 19.6976 17.4082C19.8071 17.3016 19.8907 17.1713 19.942 17.0274C20 16.8645 20 16.6786 20 16.3067V9.50006M2 8.50006L11.6422 3.67895C11.7734 3.61336 11.839 3.58056 11.9078 3.56766C11.9687 3.55622 12.0313 3.55622 12.0922 3.56766C12.161 3.58056 12.2266 3.61336 12.3578 3.67895L22 8.50006L12.3578 13.3212C12.2266 13.3868 12.161 13.4196 12.0922 13.4325C12.0313 13.4439 11.9687 13.4439 11.9078 13.4325C11.839 13.4196 11.7734 13.3868 11.6422 13.3212L2 8.50006Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<p class="text-xl">
								Etudiant en <a
									class="link"
									href="https://iut.univ-tlse3.fr/bachelor-specialite-informatique"
									target="_blank"
								>
									BUT Informatique à l'IUT Paul Sabatier
								</a> à Toulouse
							</p>
						</div>

						<div class="flex">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-6 w-6"
							>
								<path
									d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<p class="text-xl">
								Alternant chez <a
									class="link"
									href="https://sogeclair.com/simulation/simulation-ferroviaire"
									target="_blank">Oktal</a
								>, filiale de
								<a class="link" href="https://sogeclair.com" target="_blank">Sogeclair</a>
							</p>
						</div>

						<div class="flex">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-6 w-6"
							>
								<path
									d="M6.5 13L7.28446 14.5689C7.54995 15.0999 7.68269 15.3654 7.86003 15.5954C8.01739 15.7996 8.20041 15.9826 8.40455 16.14C8.63462 16.3173 8.9001 16.4501 9.43108 16.7155L11 17.5L9.43108 18.2845C8.9001 18.5499 8.63462 18.6827 8.40455 18.86C8.20041 19.0174 8.01739 19.2004 7.86003 19.4046C7.68269 19.6346 7.54995 19.9001 7.28446 20.4311L6.5 22L5.71554 20.4311C5.45005 19.9001 5.31731 19.6346 5.13997 19.4046C4.98261 19.2004 4.79959 19.0174 4.59545 18.86C4.36538 18.6827 4.0999 18.5499 3.56892 18.2845L2 17.5L3.56892 16.7155C4.0999 16.4501 4.36538 16.3173 4.59545 16.14C4.79959 15.9826 4.98261 15.7996 5.13997 15.5954C5.31731 15.3654 5.45005 15.0999 5.71554 14.5689L6.5 13Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M15 2L16.1786 5.06442C16.4606 5.79765 16.6016 6.16426 16.8209 6.47264C17.0153 6.74595 17.254 6.98475 17.5274 7.17909C17.8357 7.39836 18.2024 7.53937 18.9356 7.82138L22 9L18.9356 10.1786C18.2024 10.4606 17.8357 10.6016 17.5274 10.8209C17.254 11.0153 17.0153 11.254 16.8209 11.5274C16.6016 11.8357 16.4606 12.2024 16.1786 12.9356L15 16L13.8214 12.9356C13.5394 12.2024 13.3984 11.8357 13.1791 11.5274C12.9847 11.254 12.746 11.0153 12.4726 10.8209C12.1643 10.6016 11.7976 10.4606 11.0644 10.1786L8 9L11.0644 7.82138C11.7976 7.53937 12.1643 7.39836 12.4726 7.17909C12.746 6.98475 12.9847 6.74595 13.1791 6.47264C13.3984 6.16426 13.5394 5.79765 13.8214 5.06442L15 2Z"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="text-xl">Passionné par le numérique, les jeux vidéos et l'impression 3D</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-6 text-secondary-content lg:flex-row">
		<div class="rounded-2xl bg-size-(--page-width) bg-left" style="background-image: url({bg2});">
			<div
				class="card h-full rounded-2xl border-secondary backdrop-brightness-25 transition duration-500 card-border hover:backdrop-brightness-35"
			>
				<div class="card-body">
					<svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11.5 5H11.9344C14.9816 5 16.5053 5 17.0836 5.54729C17.5836 6.02037 17.8051 6.71728 17.6702 7.39221C17.514 8.17302 16.2701 9.05285 13.7823 10.8125L9.71772 13.6875C7.2299 15.4471 5.98599 16.327 5.82984 17.1078C5.69486 17.7827 5.91642 18.4796 6.41636 18.9527C6.99474 19.5 8.51836 19.5 11.5656 19.5H12.5M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div class="card-title font-grotesk text-2xl">Parcours</div>
					<p class="font-inter text-lg">
						Une timeline de ma scolarité et de mes experiences professionelles vous attends derrière
						ce <a
							href="/career"
							class="btn border-secondary-content bg-transparent shadow-xs shadow-secondary-content transition hover:scale-105"
							>bouton</a
						>.
					</p>
				</div>
			</div>
		</div>
		<div class="rounded-2xl bg-size-(--page-width) bg-center" style="background-image: url({bg2});">
			<div
				class="card h-full rounded-2xl border-secondary backdrop-brightness-25 transition duration-500 card-border hover:backdrop-brightness-35"
			>
				<div class="card-body">
					<svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM14 16.5L16.5 14L14 11.5M10 11.5L7.5 14L10 16.5"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div class="card-title font-grotesk text-2xl">Projets</div>
					<p class="font-inter text-lg">
						Vous trouverez une liste non exhaustive des projets que j'ai réalisé ou auxquels j'ai
						participé en suivant ce <a class="link font-bold hover:animate-rainbow" href="/projects"
							>lien</a
						>.
					</p>
				</div>
			</div>
		</div>
		<div class="rounded-2xl bg-size-(--page-width) bg-right" style="background-image: url({bg2});">
			<div
				class="card h-full rounded-2xl border-secondary backdrop-brightness-25 transition duration-500 card-border hover:backdrop-brightness-35"
			>
				<div class="card-body">
					<a
						href="/skills"
						aria-label="Skills"
						title="Skills"
						class="h-min w-min transition duration-500 hover:scale-90 hover:rotate-180"
					>
						<svg
							class="h-10 w-10"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 2V4M15 2V4M9 20V22M15 20V22M20 9H22M20 14H22M2 9H4M2 14H4M8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V8.8C20 7.11984 20 6.27976 19.673 5.63803C19.3854 5.07354 18.9265 4.6146 18.362 4.32698C17.7202 4 16.8802 4 15.2 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20ZM10.6 15H13.4C13.9601 15 14.2401 15 14.454 14.891C14.6422 14.7951 14.7951 14.6422 14.891 14.454C15 14.2401 15 13.9601 15 13.4V10.6C15 10.0399 15 9.75992 14.891 9.54601C14.7951 9.35785 14.6422 9.20487 14.454 9.10899C14.2401 9 13.9601 9 13.4 9H10.6C10.0399 9 9.75992 9 9.54601 9.10899C9.35785 9.20487 9.20487 9.35785 9.10899 9.54601C9 9.75992 9 10.0399 9 10.6V13.4C9 13.9601 9 14.2401 9.10899 14.454C9.20487 14.6422 9.35785 14.7951 9.54601 14.891C9.75992 15 10.0399 15 10.6 15Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<div class="card-title font-grotesk text-2xl">Compétences</div>
					<p class="font-inter text-lg">
						En appuyant sur l'<bold class="font-bold">icône ci-dessus</bold>, vous serez redirigé
						vers mes compétences techniques et humaines.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
