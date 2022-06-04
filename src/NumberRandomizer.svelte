<script>
    let minNumber = 0;
    let maxNumber = 100;

    let randomNumber = "Result";

    function generateRandomNumber() {
        let min = Math.ceil(minNumber);
        let max = Math.floor(maxNumber);
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
</script>

<h2>Number Randomizer</h2>
<div>
    <input bind:value={minNumber} placeholder="Enter min value">
    <input bind:value={maxNumber} placeholder="Enter max value">
    <button on:click={generateRandomNumber}>
        Push your luck
    </button>
</div>
<h2>{randomNumber}</h2>