<svelte:head>
	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
	<!-- Material Typography -->
	<link rel="stylesheet" href="https://unpkg.com/@material/typography@11.0.0/dist/mdc.typography.css" />
	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<script>
	import NumberRandomizer from './NumberRandomizer.svelte';
	import LinesRandomizer from "./LinesRandomizer.svelte";

	export let name;
</script>

<main>
	<h1>{name}</h1>
	<NumberRandomizer/>
	<LinesRandomizer/>
</main>
