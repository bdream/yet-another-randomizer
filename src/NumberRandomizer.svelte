<script>
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import { Label } from '@smui/common';

    import { _ } from 'svelte-i18n';

    const resultPlaceholder = "(?)";

    let minNumber = 0;
    let maxNumber = 100;

    let randomNumber = null;

    function generateRandomNumber() {
        if (!Number.isInteger(minNumber) || !Number.isInteger(maxNumber)) {
            randomNumber = null;
            return;
        }

        let min = Math.ceil(minNumber);
        let max = Math.floor(maxNumber);

        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function reset() {
        randomNumber = null;
    }
</script>

<div>
    <Paper>
        <Title><h3>{$_('numberRandomizer')}</h3></Title>
        <Subtitle>{$_('minMaxInterval')}</Subtitle>
        <Content>
            <div>
                <Textfield bind:value={minNumber} label="{$_('minValue')}" type="number" variant="filled"/>
                <Textfield bind:value={maxNumber} label="{$_('maxValue')}" type="number" variant="filled"/>
                <Button on:click={generateRandomNumber} variant="raised">
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
                        {#if Number.isInteger(randomNumber)}
                            {randomNumber}
                        {:else}
                            {$_('emptyRandomNumber')}
                        {/if}
                    </Label>
                </h1>
            </div>
        </Content>
    </Paper>
</div>
