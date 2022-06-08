<script>
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import { Label } from '@smui/common';
    import List, { Item, Separator, Text } from '@smui/list';

    import { _ } from './i18n';

    let newLine = '';
    $: lines = [];

    let randomLine = '';

    function addNewLine() {
        if (newLine) {
            lines = [...lines, newLine];
            newLine = '';
        }
    }

    function getRandomLine() {
        if (lines.length == 0) {
            randomLine = '';
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
        randomLine = '';
    }
</script>

<div>
    <Paper>
        <Title><h3>{$_('linesRandomizer')}</h3></Title>
        <Subtitle>{$_('linesNames')}</Subtitle>
        <Content>
            <div>
                <Textfield bind:value={newLine} label="{$_('linesSpace')}" variant="filled"/>
                <Button on:click={addNewLine} variant="outlined">
                    <Label>{$_('addLineButton')}</Label>
                </Button>
            </div>
            <div>
                <h2>
                    <Label>{$_('newLines')}</Label>
                    <Button on:click={cleanLines} variant="raised" color="secondary">
                        <Label>{$_('cleanLinesButton')}</Label>
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
                    <Label>{$_('pushYourLuckButton')}</Label>
                </Button>
            </div>
            <div>
                <h2>
                    <Label>{$_('setResult')}</Label>
                    <Button on:click={reset} variant="raised" color="secondary">
                        <Label>{$_('resetButton')}</Label>
                    </Button>
                </h2>
            </div>
            <div>
                <h1>
                    <Label>
                        {#if randomLine === ''}
                            {$_('emptyRandomLine')}
                        {:else}
                            {randomLine}
                        {/if}
                    </Label>
                </h1>
            </div>
        </Content>
    </Paper>
</div>
