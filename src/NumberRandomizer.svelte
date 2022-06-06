<script>
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import { Label } from '@smui/common';

    const resultPlaceholder = "(?)";

    let minNumber = 0;
    let maxNumber = 100;

    let randomNumber = resultPlaceholder;

    function generateRandomNumber() {
        if (!Number.isInteger(minNumber) || !Number.isInteger(maxNumber)) {
            randomNumber = resultPlaceholder;
            return;
        }

        let min = Math.ceil(minNumber);
        let max = Math.floor(maxNumber);

        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function reset() {
        randomNumber = resultPlaceholder;
    }
</script>

<div>
    <Paper>
        <Title><h3>Number Randomizer</h3></Title>
        <Subtitle>Returns a random integer number from the [min, max] interval</Subtitle>
        <Content>
            <div>
                <Textfield bind:value={minNumber} label="Min value" type="number" variant="filled"/>
                <Textfield bind:value={maxNumber} label="Max value" type="number" variant="filled"/>
                <Button on:click={generateRandomNumber} variant="raised">
                    <Label>Push your luck!</Label>
                </Button>
            </div>
            <div>
                <h2>
                    <Label>Result:</Label>
                    <Button on:click={reset} variant="raised" color="secondary">
                        <Label>Reset</Label>
                    </Button>
                </h2>
            </div>
            <div>
                <h1><Label>{randomNumber}</Label></h1>
            </div>
        </Content>
    </Paper>
</div>
