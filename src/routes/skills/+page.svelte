<script>
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ to }) => {
		let hash = to?.url?.hash;
		if (hash) {
			const element = document.querySelector(hash);
			const first_details = document.getElementById('first-details');
			if (element) {
				if (first_details && first_details.open) {
					first_details.open = false;
				}
				const details = element.closest('details');
				if (details && !details.open) {
					details.open = true;
				}
			}
		}
	});
</script>

<div class="flex flex-col items-center gap-6 font-inter">
	<h2 class="font-grotesk text-3xl font-semibold">Mes Competences</h2>

	<div class="space-y-2">
		<details
			id="first-details"
			class="collapse-arrow collapse border border-base-300 bg-base-200"
			open
		>
			<summary id="realiser" class="collapse-title text-lg font-semibold text-primary-content">
				Réaliser
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div class="space-y-2">
						<div>
							<h4 class="text-sm text-discrete-content">Description</h4>
							<p>
								Développer - c'est-à-dire concevoir, coder, tester et intégrer - une solution
								informatique pour un client.
							</p>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Niveaux</h4>
							<ul class="steps steps-vertical">
								<li class="step step-secondary min-h-9">
									Développer des applications informatiques simples
								</li>
								<li class="step step-secondary min-h-9">
									Partir des exigences et aller jusqu'à une application complète
								</li>
								<li class="step step-secondary min-h-9">
									Adapter des applications sur un ensemble de supports (embarqué, web, mobile,
									IoT...)
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Situations professionnelles</h4>
							<ul class="list bg-base-100">
								<li class="list-row p-2">Élaborer une application informatique</li>
								<li class="list-row p-2">Faire évoluer une application informatique</li>
								<li class="list-row p-2">
									Maintenir en conditions opérationnelles une application informatique
								</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#rbs">
								RandomBroadcastingSelector
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-immo">
								App de gestion immobiliere
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#portfolio">
								Ce portfolio
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-sport">
								Gestion d'equipe de sport
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#loottracker">
								App mobile de trading
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#bombochat">
								Bombochat
							</a>
						</div>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="optimiser" class="collapse-title text-lg font-semibold text-primary-content">
				Optimiser
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div class="space-y-2">
						<div>
							<h4 class="text-sm text-discrete-content">Description</h4>
							<p>
								Proposer des applications informatiques optimisées en fonction de critères
								spécifiques : temps d'exécution, précision, consommation de ressources...
							</p>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Niveaux</h4>
							<ul class="steps steps-vertical">
								<li class="step step-secondary min-h-9">
									Appréhender et construire des algorithmes
								</li>
								<li class="step step-secondary min-h-9">
									Sélectionner les algorithmes adéquats pour répondre à un problème donné
								</li>
								<li class="step step-secondary min-h-9">Analyser et optimiser des applications</li>
							</ul>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Situations professionnelles</h4>
							<ul class="list bg-base-100">
								<li class="list-row p-2">
									Améliorer les performances des programmes dans des contextes contraints
								</li>
								<li class="list-row p-2">
									Limiter l'impact environnemental d'une application informatique
								</li>
								<li class="list-row p-2">
									Mettre en place des applications informatiques adaptées et efficaces
								</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#rbs">
								RandomBroadcastingSelector
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#algo-genetique">
								Algorithme genetique
							</a>
						</div>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="administrer" class="collapse-title text-lg font-semibold text-primary-content">
				Administrer
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div class="space-y-2">
						<div>
							<h4 class="text-sm text-discrete-content">Description</h4>
							<p>
								Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles
								des infrastructures, des services et des réseaux et optimiser le système
								informatique d'une organisation
							</p>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Niveaux</h4>
							<ul class="steps steps-vertical">
								<li class="step step-secondary min-h-9">
									Installer et configurer un poste de travail
								</li>
								<li class="step step-secondary min-h-9">
									Déployer des services dans une architecture réseau
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Situations professionnelles</h4>
							<ul class="list bg-base-100">
								<li class="list-row p-2">Déployer une nouvelle architecture technique</li>
								<li class="list-row p-2">Améliorer une infrastructure existante</li>
								<li class="list-row p-2">Sécuriser les applications et les services</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#bombochat">
								Bombochat
							</a>
						</div>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="gerer" class="collapse-title text-lg font-semibold text-primary-content">
				Gérer
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div class="space-y-2">
						<div>
							<h4 class="text-sm text-discrete-content">Description</h4>
							<p>
								Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à
								disposition toutes les informations pour un bon pilotage de l'entreprise
							</p>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Niveaux</h4>
							<ul class="steps steps-vertical">
								<li class="step step-secondary min-h-9">
									Concevoir et mettre en place une base de données à partir d'un cahier des charges
									client
								</li>
								<li class="step step-secondary min-h-9">
									Optimiser une base de données, interagir avec une application et mettre en œuvre
									la sécurité
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Situations professionnelles</h4>
							<ul class="list bg-base-100">
								<li class="list-row p-2">Lancer un nouveau projet</li>
								<li class="list-row p-2">Sécuriser des données</li>
								<li class="list-row p-2">Exploiter des données pour la prise de décisions</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#rbs">
								RandomBroadcastingSelector
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-immo">
								App de gestion immobiliere
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-sport">
								Gestion d'equipe de sport
							</a>
						</div>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="conduire" class="collapse-title text-lg font-semibold text-primary-content">
				Conduire
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div class="space-y-2">
						<div>
							<h4 class="text-sm text-discrete-content">Description</h4>
							<p>
								Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client,
								<br />
								organiser et piloter un projet informatique avec des méthodes classiques ou agiles
							</p>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Niveaux</h4>
							<ul class="steps steps-vertical">
								<li class="step step-secondary min-h-9">
									Identifier les besoins métiers des clients et des utilisateurs
								</li>
								<li class="step step-secondary min-h-9">
									Appliquer une démarche de suivi de projet en fonction
									<br />
									des besoins métiers des clients et des utilisateurs
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Situations professionnelles</h4>
							<ul class="list bg-base-100">
								<li class="list-row p-2">Lancer un nouveau projet</li>
								<li class="list-row p-2">
									Piloter le maintien d'un projet en condition opérationnelle
								</li>
								<li class="list-row p-2">Faire évoluer un système d'information</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-immo">
								App de gestion immobiliere
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#portfolio">
								Ce portfolio
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-sport">
								Gestion d'equipe de sport
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#loottracker">
								App mobile de trading
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#bombochat">
								Bombochat
							</a>
						</div>
					</div>
				</div>
			</div>
		</details>

		<details class="collapse-arrow collapse border border-base-300 bg-base-200">
			<summary id="collaborer" class="collapse-title text-lg font-semibold text-primary-content">
				Collaborer
			</summary>
			<div class="collapse-content space-y-3 border-t-2 border-base-content/10 pt-2">
				<div class="flex flex-col lg:flex-row">
					<div class="space-y-2">
						<div>
							<h4 class="text-sm text-discrete-content">Description</h4>
							<p>
								Acquérir, développer et exploiter les aptitudes nécessaires pour travailler
								<br />
								efficacement dans une équipe informatique
							</p>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Niveaux</h4>
							<ul class="steps steps-vertical">
								<li class="step step-secondary min-h-9">
									Identifier ses aptitudes pour travailler dans une équipe
								</li>
								<li class="step step-secondary min-h-9">
									Situer son rôle et ses missions au sein d'une équipe informatique
								</li>
								<li class="step step-secondary min-h-9">Manager une équipe informatique</li>
							</ul>
						</div>
						<div>
							<h4 class="text-sm text-discrete-content">Situations professionnelles</h4>
							<ul class="list bg-base-100">
								<li class="list-row p-2">Lancer un nouveau projet</li>
								<li class="list-row p-2">
									Organiser son travail en relation avec celui de son équipe
								</li>
								<li class="list-row p-2">Élaborer, gérer et transmettre de l'information</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-immo">
								App de gestion immobiliere
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#algo-genetique">
								Algorithme genetique
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#gestion-sport">
								Gestion d'equipe de sport
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#loottracker">
								App mobile de trading
							</a>
							<a class="badge link px-2 badge-lg badge-primary" href="/projects#bombochat">
								Bombochat
							</a>
						</div>
					</div>
				</div>
			</div>
		</details>
	</div>
</div>
