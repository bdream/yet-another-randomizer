<script>
	export let name;

	let min = 0;
	let max = 100;

	let randomValue = "Number";

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let newLine;
	$: lines = [];

	let randomLine = "Line";

	function addNewLine(text) {
		if (text) {
			const newLine = {
				text: text
			};

			lines = [...lines, newLine];
		}
	}

	function getRandomLine(lines) {
		let lineNumber = Math.floor(Math.random() * lines.length)
		randomLine = (lineNumber + 1) + ". " + lines[lineNumber].text;
	}

</script>

<main>
	<h1>{name}</h1>
	<div>
		<h2>Generate Random Number</h2>
		<input bind:value={min} placeholder="Enter min value">
		<input bind:value={max} placeholder="Enter max value">
		<button on:click={getRandomInt(min, max)}>
			Push your luck
		</button>
		<h2>{randomValue}</h2>
	</div>
	<div>
		<h2>Get Random Line from the List</h2>
		<input bind:value={newLine} placeholder="Enter your text">
		<button on:click={addNewLine(newLine)}>
			Add New Line
		</button>
		<div>
			<ul>
				{#each lines as { text }, i}
					<li>
						{i + 1}: {text}
					</li>
				{/each}
			</ul>
		</div>
		<button on:click={getRandomLine(lines)}>
			Push your luck
		</button>
		<h2>{randomLine}</h2>
	</div>
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