<script lang="ts">
	import gestion_immo_img from '$lib/assets/img/projects/gestion_immo.png';
	import gestion_sport_img from '$lib/assets/img/projects/hawkey.png';
</script>

<div class="flex flex-col items-center gap-6 font-inter">
	<h2 class="font-grotesk text-3xl font-semibold">Mes Projets</h2>

	<div class="space-y-2">
		<details class="collapse-arrow collapse border border-base-300 bg-base-200" open>
			<summary id="rbs" class="collapse-title text-lg font-semibold text-primary-content">
				RandomBroadcastingSelector
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Mon premier gros projet.
							<br />
							Une fois par jour, un des utilisateurs du site web est sélectionné de manière aléatoire.
							<br />
							Il peut afficher un message de son choix sur la page d'accueil.
						</p>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#realiser"
								>Realiser</a
							>
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#optimiser"
								>Optimiser</a
							>
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#gerer">Gerer</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">Python</span>
						<span class="badge px-2 badge-md badge-accent">Web</span>
						<span class="badge px-2 badge-md badge-accent">Flask</span>
						<span class="badge px-2 badge-md badge-accent">SQL</span>
						<span class="badge px-2 badge-md badge-accent">Docker</span>
					</div>
					<div>
						<a class="link" href="https://web-rbs.com/" target="_blank">Site web &nearrow;</a>
						<a
							class="link"
							href="https://github.com/Nifle-CGE/RandomBroadcastingSelector"
							target="_blank"
						>
							Sur GitHub &nearrow;
						</a>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="gestion-immo" class="collapse-title text-lg font-semibold text-primary-content">
				Application de gestion immobiliere
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Une application de gestion de biens immobiliers réalisée en groupe de 4 dans le cadre
							du BUT.
							<br />
							Cette application permet de gérer des des biens immobiliers, des locataires, des baux et
							des travaux associés
						</p>
						<button
							class="group flex h-25 w-30 cursor-pointer items-center justify-center rounded-md bg-cover bg-center"
							onclick={img_modal_1.showModal()}
							style="background-image: url({gestion_immo_img});"
							aria-label="Aperçu de l'application de gestion immobiliere"
							title="Aperçu de l'application de gestion immobiliere"
						>
							<svg
								class="h-16 w-16 text-transparent transition-colors group-hover:text-white"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
						<dialog id="img_modal_1" class="modal">
							<div class="modal-box w-auto max-w-5xl">
								<form method="dialog">
									<button class="btn absolute top-0 right-0 btn-circle btn-ghost btn-sm">✕</button>
								</form>
								<img src={gestion_immo_img} alt="Aperçu de l'application de gestion immobiliere" />
							</div>
							<form method="dialog" class="modal-backdrop">
								<button>close</button>
							</form>
						</dialog>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#realiser"
								>Realiser</a
							>
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#gerer">Gerer</a>
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#conduire"
								>Conduire</a
							>
							<a class="badge link px-2 badge-lg badge-secondary" href="/skills#collaborer">
								Collaborer
							</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">Java</span>
						<span class="badge px-2 badge-md badge-accent">MVC</span>
						<span class="badge px-2 badge-md badge-accent">SQLite</span>
						<span class="badge px-2 badge-md badge-accent">Swing</span>
						<span class="badge px-2 badge-md badge-accent">JUnit</span>
						<span class="badge px-2 badge-md badge-accent">GUI</span>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="portfolio" class="collapse-title text-lg font-semibold text-primary-content">
				Ce portfolio
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Decouverte de SvelteKit et TailwindCSS pour ce projet suite a la recommandation d'un <a
								class="link"
								href="https://portfolio-s6.paillaugue.fr/"
								target="_blank">ami</a
							>.
							<br />
							Utilisation de l'IA tres limitee, seulement pour me debloquer notamment sur l'utilisation
							de "flex" en CSS.
						</p>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#realiser">Realiser</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#conduire">Conduire</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">SvelteKit</span>
						<span class="badge px-2 badge-md badge-accent">Web</span>
						<span class="badge px-2 badge-md badge-accent">Responsive</span>
						<span class="badge px-2 badge-md badge-accent">TailwindCSS</span>
						<span class="badge px-2 badge-md badge-accent">daisyUI</span>
					</div>
					<div>
						<a class="link" href="https://elfin.fr/" target="_blank">Site web &nearrow;</a>
						<a class="link" href="https://github.com/Nifle-CGE/portfolio" target="_blank">
							Sur GitHub &nearrow;
						</a>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary
				id="algo-genetique"
				class="collapse-title text-lg font-semibold text-primary-content"
			>
				Algorithme genetique
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Un projet d'algorithme génétique réalisé en binôme dans le cadre du BUT.
							<br />
							Le problème à résoudre etait celui du
							<a
								class="link"
								href="https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_voyageur_de_commerce"
								target="_blank"
							>
								voyageur de commerce
							</a>.
							<br />
							Il fallait egalement analyser les performances des différentes configurations de l'algorithme.
						</p>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#optimiser">Optimiser</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#collaborer">
								Collaborer
							</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">Python</span>
						<span class="badge px-2 badge-md badge-accent">Numpy</span>
						<span class="badge px-2 badge-md badge-accent">Matplotlib</span>
						<span class="badge px-2 badge-md badge-accent">TUI</span>
					</div>
					<div>
						<a
							class="link"
							href="https://github.com/Nifle-CGE/R5.12-Algo-genetiques"
							target="_blank"
						>
							Sur GitHub &nearrow;
						</a>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="gestion_sport" class="collapse-title text-lg font-semibold text-primary-content">
				Site de gestion d'equipe de sport
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Une application web de gestion d'equipe de sport réalisée en binôme dans le cadre du
							BUT.
							<br />
							Ce site permet de gérer des joueurs, des matchs et des statistiques.
						</p>
						<button
							class="group flex h-25 w-30 cursor-pointer items-center justify-center rounded-md bg-cover bg-center"
							onclick={img_modal_2.showModal()}
							style="background-image: url({gestion_sport_img});"
							aria-label="Aperçu de l'application de gestion immobiliere"
							title="Aperçu de l'application de gestion immobiliere"
						>
							<svg
								class="h-16 w-16 text-transparent transition-colors group-hover:text-white"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
						<dialog id="img_modal_2" class="modal">
							<div class="modal-box w-auto max-w-5xl">
								<form method="dialog">
									<button class="btn absolute top-0 right-0 btn-circle btn-ghost btn-sm">✕</button>
								</form>
								<img src={gestion_sport_img} alt="Aperçu de l'application de gestion immobiliere" />
							</div>
							<form method="dialog" class="modal-backdrop">
								<button>close</button>
							</form>
						</dialog>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#realiser">Realiser</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#gerer">Gerer</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#conduire">Conduire</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#collaborer">
								Collaborer
							</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">PHP</span>
						<span class="badge px-2 badge-md badge-accent">Web</span>
						<span class="badge px-2 badge-md badge-accent">SQL</span>
						<span class="badge px-2 badge-md badge-accent">CI/CD</span>
						<span class="badge px-2 badge-md badge-accent">API REST</span>
						<span class="badge px-2 badge-md badge-accent">Authentification</span>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="loottracker" class="collapse-title text-lg font-semibold text-primary-content">
				Application mobile journal de trading
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Un journal de trading réalisée en binôme dans le cadre du BUT.
							<br />
							Elle permet aux traders de suivre leurs performances et d'analyser leurs résultats.
						</p>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#realiser">Realiser</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#conduire">Conduire</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#collaborer">
								Collaborer
							</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">Flutter</span>
						<span class="badge px-2 badge-md badge-accent">UX</span>
						<span class="badge px-2 badge-md badge-accent">Dart</span>
						<span class="badge px-2 badge-md badge-accent">Gradle</span>
						<span class="badge px-2 badge-md badge-accent">SQL</span>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="bombochat" class="collapse-title text-lg font-semibold text-primary-content">
				Bombochat
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div>
						<h4 class="text-sm text-discrete-content">Description</h4>
						<p>
							Un projet de chat en ligne réalisé en binôme dans le cadre du BUT.
							<br />
							Les utilisateurs peuvent choisir un pseudo et discuter en temps réel avec les autres utilisateurs
							connectés.
							<br />
							Nous vous invitons à y laisser un message pour les futurs visiteurs !
						</p>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Competences associees</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#realiser">Realiser</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#administrer"
								>Administrer</a
							>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#conduire">Conduire</a>
							<a class="badge link badge-lg badge-secondary px-2" href="/skills#collaborer">
								Collaborer
							</a>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">Web</span>
						<span class="badge px-2 badge-md badge-accent">Ajax</span>
						<span class="badge px-2 badge-md badge-accent">JQuery</span>
						<span class="badge px-2 badge-md badge-accent">MySQL</span>
						<span class="badge px-2 badge-md badge-accent">CI/CD</span>
					</div>
					<div>
						<a class="link" href="https://bombochat.infy.uk/" target="_blank">Site web &nearrow;</a>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="ze-zone" class="collapse-title text-lg font-semibold text-primary-content">
				Ze Zone
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div>
					<h4 class="text-sm text-discrete-content">Description</h4>
					<p>
						Pas du tout un site web ou une application, mais un jeu de societe cree entierement par
						moi.
						<br />
						Ze Zone est un jeu de plateau dans lequel les joueurs s'affrontent dans un milieu qui devient
						de plus en plus difficile a naviguer au fur et a mesure que la partie avance.
						<br />
						En vente en ligne sur le site ci-dessous ou en personne lors d'evenements.
					</p>
				</div>
				<div class="flex flex-row justify-between">
					<div>
						<span class="badge px-2 badge-md badge-accent">Onshape</span>
						<span class="badge px-2 badge-md badge-accent">Impression 3D</span>
						<span class="badge px-2 badge-md badge-accent">Vente en personne</span>
						<span class="badge px-2 badge-md badge-accent">Explication de regles</span>
					</div>
					<div>
						<a class="link" href="https://games.a-zuga.com/ze-zone" target="_blank">
							Site web &nearrow;
						</a>
					</div>
				</div>
			</div>
		</details>
	</div>
</div>
