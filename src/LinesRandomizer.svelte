<script>
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import { Label } from '@smui/common';
    import List, { Item, Separator, Text } from '@smui/list';

    let newLine = "";
    $: lines = [];

    let randomLine = "(?)";

    function addNewLine() {
        if (newLine) {
            lines = [...lines, newLine];
            newLine = "";
        }
    }

    function getRandomLine() {
        let randomLinesArrayIndex = Math.floor(Math.random() * lines.length)
        let lineNumber = (randomLinesArrayIndex + 1);
        randomLine = lineNumber + ". " + lines[randomLinesArrayIndex];
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
                <h2><Label>Lines:</Label></h2>
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
                <h2><Label>Result:</Label></h2>
            </div>
            <div>
                <Label>{randomLine}</Label>
            </div>
        </Content>
    </Paper>
</div>
