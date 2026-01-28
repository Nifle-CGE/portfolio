<script lang="ts">
	let nom = '';
	let message = '';

	function handleSubmit() {
		const destinationEmail = 'elfin@elfin.fr';
		const subject = `Contact de ${nom}`;
		const body = message;

		const mailtoLink = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoLink;
	}
</script>

<div class="flex flex-col items-center gap-6">
	<h2 class="font-grotesk text-3xl font-semibold">Me Contacter</h2>

	<div class="flex flex-col gap-4 lg:flex-row">
		<div class="card bg-base-300">
			<dir class="card-body space-y-3">
				<h3 class="card-title text-xl">Coordonnees</h3>
				<div>
					<span class="text-discrete-content">Email</span>
					<br />
					<a class="link text-lg" href="mailto:elfin@elfin.fr">elfin@elfin.fr</a>
				</div>
				<div>
					<span class="text-discrete-content">Linkedin</span>
					<br />
					<a class="link text-lg" href="https://www.linkedin.com/in/nifle" target="_blank">
						@nifle
					</a>
				</div>
			</dir>
		</div>
		<div class="card w-xs bg-base-300 lg:w-md">
			<div class="card-body">
				<form on:submit|preventDefault={handleSubmit} class="space-y-4">
					<fieldset class="fieldset">
						<legend class="fieldset-legend">Nom</legend>
						<input
							bind:value={nom}
							type="text"
							class="input w-full"
							required
							placeholder="Votre nom"
						/>
					</fieldset>

					<fieldset class="fieldset">
						<legend class="fieldset-legend">Message</legend>
						<textarea
							class="textarea h-24 w-full"
							bind:value={message}
							required
							placeholder="Votre message"
						></textarea>
					</fieldset>

					<button type="submit" class="btn btn-primary"> Envoyer </button>
				</form>
			</div>
		</div>
	</div>
</div>
