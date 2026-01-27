<script>
    import { afterNavigate } from '$app/navigation';

    afterNavigate(({ to }) => {
		console.log(to);
		let hash = to?.url?.hash;
        if (hash) {
            const element = document.querySelector(hash);
			const first_details = document.getElementById("first-details");
			console.log(element);
            if (element) {
				if (first_details && first_details.open) {
					first_details.open = false;
				}
				const details = element.closest("details");
				if (details && !details.open) {
					details.open = true;
				}
				console.log("Scrolling to element");
				
				window.scrollBy(0, 200);
            }
        }
    });
</script>

<div class="flex flex-col items-center gap-6 font-inter">
	<h2 class="font-grotesk text-3xl font-semibold">Mes Competences</h2>

	<div class="space-y-2">
		<details id="first-details" class="collapse-arrow collapse border border-base-300 bg-base-200" open>
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
								<li class="step step-secondary min-h-10">
									Développer des applications informatiques simples
								</li>
								<li class="step step-secondary min-h-10">
									Partir des exigences et aller jusqu'à une application complète
								</li>
								<li class="step step-secondary min-h-10">
									Adapter des applications sur un ensemble de supports (embarqué, web, mobile,
									IoT...)
								</li>
							</ul>
						</div>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div>
						<h4 class="pb-2 text-sm text-discrete-content">Projets associes</h4>
						<div class="flex flex-col gap-2">
							<a class="badge link badge-lg badge-primary px-2" href="/projects#rbs">RandomBroadcastingSelector</a>
							<a class="badge link badge-lg badge-primary px-2" href="/projects#gestion-immo">App de gestion immobiliere</a>
							<a class="badge link badge-lg badge-primary px-2" href="/projects#portfolio">Ce portfolio</a>
						</div>
					</div>
				</div>
			</div>
		</details>
	</div>

	<h3 id="optimiser" class="text-lg">Optimiser</h3>
	<ul class="steps steps-vertical">
		<li class="step step-secondary">Niveau 1 : Appréhender et construire des algorithmes</li>
		<li class="step step-secondary">
			Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné
		</li>
		<li class="step step-secondary">Niveau 3 : Analyser et optimiser des applications</li>
	</ul>

	<h3 id="administrer" class="text-lg">Administrer</h3>
	<ul class="steps steps-vertical">
		<li class="step step-secondary">Niveau 1 : Installer et configurer un poste de travail</li>
		<li class="step step-secondary">
			Niveau 2 : Déployer des services dans une architecture réseau
		</li>
	</ul>

	<h3 id="gerer" class="text-lg">Gérer</h3>
	<ul class="steps steps-vertical">
		<li class="step step-secondary">
			Niveau 1 : Concevoir et mettre en place une base de données à partir d'un cahier des charges
			client
		</li>
		<li class="step step-secondary">
			Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la
			sécurité
		</li>
	</ul>

	<h3 id="conduire" class="text-lg">Conduire</h3>
	<ul class="steps steps-vertical">
		<li class="step step-secondary">
			Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs
		</li>
		<li class="step step-secondary">
			Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des
			clients et des utilisateurs
		</li>
	</ul>

	<h3 id="collaborer" class="text-lg">Collaborer</h3>
	<ul class="steps steps-vertical">
		<li class="step step-secondary">
			Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe
		</li>
		<li class="step step-secondary">
			Niveau 2 : Situer son rôle et ses missions au sein d'une équipe informatique
		</li>
		<li class="step step-secondary">Manager une équipe informatique</li>
	</ul>
</div>
