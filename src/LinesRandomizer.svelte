<script>
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import { Label } from '@smui/common';
    import List, { Item, Separator, Text } from '@smui/list';

    const resultPlaceholder = "(?)";

    let newLine = "";
    $: lines = [];

    let randomLine = resultPlaceholder;

    function addNewLine() {
        if (newLine) {
            lines = [...lines, newLine];
            newLine = "";
        }
    }

    function getRandomLine() {
        if (lines.length == 0) {
            randomLine = resultPlaceholder;
            return;
        }

        let randomLinesArrayIndex = Math.floor(Math.random() * lines.length)
        let lineNumber = (randomLinesArrayIndex + 1);
        randomLine = lineNumber + ". " + lines[randomLinesArrayIndex];
    }

    function cleanLines() {
        lines = [];
        reset();
    }

    function reset() {
        randomLine = resultPlaceholder;
    }
</script>

<div>
    <Paper>
        <Title><h3>Lines Randomizer</h3></Title>
        <Subtitle>Returns a random line from the list of lines.</Subtitle>
        <Content>
            <div>
                <Textfield bind:value={newLine} label="New line" variant="filled"/>
                <Button on:click={addNewLine} variant="outlined">
                    <Label>Add Line</Label>
                </Button>
            </div>
            <div>
                <h2>
                    <Label>Lines:</Label>
                    <Button on:click={cleanLines} variant="raised" color="secondary">
                        <Label>Clean</Label>
                    </Button>
                </h2>
                <List>
                    {#each lines as line, i}
                        <Item>
                            <Text>{i + 1}: {line}</Text>
                        </Item>
                    {/each}
                </List>
            </div>
            <div>
                <Button on:click={getRandomLine} variant="raised">
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
                <h1><Label>{randomLine}</Label></h1>
            </div>
        </Content>
    </Paper>
</div>
