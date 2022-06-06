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
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import NumberRandomizer from './NumberRandomizer.svelte';
	import LinesRandomizer from "./LinesRandomizer.svelte";

	export let name;

	const TABS = [
		{ id: 'number-randomizer', label: 'Number Randomizer' },
		{ id: 'lines-randomizer', label: 'Lines Randomizer' }
	];

	let activeTab = TABS[0];
</script>

<main>
	<h1>{name}</h1>

	<div>
		<TabBar tabs={TABS} let:tab minWidth bind:active={activeTab}>
			<Tab {tab}>
				<Label>{tab.label}</Label>
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


</main>
