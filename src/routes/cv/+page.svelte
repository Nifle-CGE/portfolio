<script lang="ts">
	import pdfCV from '$lib/assets/CV Elfin Pouget - - Pejoan.pdf';
</script>

<svelte:head>
	<title>Portfolio d'Elfin Pouget - - Pejoan - CV</title>
</svelte:head>

<div class="flex flex-col items-center gap-6 grow">
	<h2 class="font-grotesk text-3xl font-semibold">Mon CV</h2>

	<iframe class="rounded-xl size-full" src={pdfCV} title="CV Elfin Pouget - - Pejoan"></iframe>
</div>
