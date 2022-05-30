<script>
	export let name;

	let randomValue = "Random";

	function getRandomInt() {
		randomValue = Math.floor(Math.random() * 100);
	}
</script>

<main>
	<h1>{name}</h1>
	<button on:click={getRandomInt}>
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