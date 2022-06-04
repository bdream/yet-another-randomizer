<script>
    let newLine;
    $: lines = [];

    let randomLine = "Result";

    function addNewLine() {
        if (newLine) {
            lines = [...lines, newLine];
        }
    }

    function getRandomLine() {
        let randomLinesArrayIndex = Math.floor(Math.random() * lines.length)
        let lineNumber = (randomLinesArrayIndex + 1);
        randomLine = lineNumber + ". " + lines[randomLinesArrayIndex];
    }
</script>

<h2>Lines Randomizer</h2>
<input bind:value={newLine} placeholder="Enter your text">
<button on:click={addNewLine}>
    Add New Line
</button>
<div>
    <ul>
        {#each lines as line, i}
            <li>
                {i + 1}: {line}
            </li>
        {/each}
    </ul>
</div>
<button on:click={getRandomLine}>
    Push your luck
</button>
<h2>{randomLine}</h2>