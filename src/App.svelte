<script>
	export let name;

	let min = 0;
	let max = 100;

	let randomValue = "Random";

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
	}
</script>

<main>
	<h1>{name}</h1>
	<input bind:value={min} placeholder="Enter min value">
	<input bind:value={max} placeholder="Enter max value">
	<button on:click={getRandomInt(min, max)}>
		Push your luck
	</button>
	<h1>{randomValue}</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>