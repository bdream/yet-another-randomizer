<svelte:head>
	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
	<!-- Material Typography -->
	<link rel="stylesheet" href="https://unpkg.com/@material/typography@11.0.0/dist/mdc.typography.css" />
	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<script>
	import Button, { Group, Label, Icon } from '@smui/button';
	import Tab from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import NumberRandomizer from './NumberRandomizer.svelte';
	import LinesRandomizer from "./LinesRandomizer.svelte";

	import { _, setupI18n } from './i18n';

	setupI18n({ withLocale: 'en' });

	const TABS = [
		{ id: 'number-randomizer', label: 'numberRandomizerTabName' },
		{ id: 'lines-randomizer', label: 'linesRandomizerTabName' }
	];

	let activeTab = TABS[0];

	function switchLocale(locale) {
		setupI18n({withLocale: locale});
	}
</script>

<main>
	<Group variant="outlined">
		<Button on:click={() =>switchLocale('en')} variant="outlined">
			<Label>EN</Label>
		</Button>
		<Button on:click={() => switchLocale('ru')} variant="outlined">
			<Label>RU</Label>
		</Button>
		<Button on:click={() => switchLocale('de')} variant="outlined">
			<Label>DE</Label>
		</Button>
	</Group>

	<h1>
		{$_('title')}
		<Button href="https://github.com/bdream/yet-another-randomizer" target="_blank">
			<Label>{$_('sourceCode')}</Label>
		</Button>
	</h1>

	<div>
		<TabBar tabs={TABS} let:tab minWidth bind:active={activeTab}>
			<Tab {tab}>
				<Label>{$_(tab.label)}</Label>
			</Tab>
		</TabBar>

		{#if activeTab && activeTab.id === 'number-randomizer'}
			<NumberRandomizer/>
		{:else if activeTab && activeTab.id === 'lines-randomizer'}
			<LinesRandomizer/>
		{:else}
			<h1 class="error">Error - Please Report</h1>
		{/if}
	</div>

	<div>
		<Button href="https://github.com/bdream" target="_blank">
			<Label>{$_('developerName')}</Label>
		</Button>
		<Button href="https://vk.com/elena_petrova15" target="_blank">
			<Label>{$_('localizerName')}</Label>
		</Button>
	</div>

</main>
