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
	import Button, { Label, Icon } from '@smui/button';
	import Tab from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import NumberRandomizer from './NumberRandomizer.svelte';
	import LinesRandomizer from "./LinesRandomizer.svelte";

	import { _ } from 'svelte-i18n';
	import { dictionary, locale } from 'svelte-i18n';

	export let name;

	const TABS = [
		{ id: 'number-randomizer', label: 'numberRandomizerTabName' },
		{ id: 'lines-randomizer', label: 'linesRandomizerTabName' }
	];

	let activeTab = TABS[0];

	dictionary.set({
		"en": {
			"title": "Yet Another Randomizer",
			"sourceCode": "Source Code",
			"numberRandomizerTabName": "Number Randomizer",
			"numberRandomizer": "Number Randomizer",
			"minMaxInterval": "Generates a random integer number from the [min, max] interval",
			"minValue": "Min Value",
			"maxValue": "Max Value",
			"pushYourLuckButton": "Push Your Luck!",
			"setResult": "Result:",
			"resetButton": "Reset",
			"emptyRandomNumber": "(?)",
			"linesRandomizerTabName": "Lines Randomizer",
			"linesRandomizer": "Lines Randomizer",
			"linesNames": "Returns a random line from the list of lines",
			"linesSpace": "New Line",
			"addLineButton": "Add Line",
			"newLines": "Lines",
			"cleanLinesButton": "Clean",
			"emptyRandomLine": "(?)",
			"developerName": "Created by Dmitry Belov",
			"localizerName": "Translated by Elena Petrova"
		},
		"ru": {
			"title": "Yet Another Randomizer",
			"sourceCode": "Source Code",
			"numberRandomizerTabName": "Рандомайзер чисел",
			"numberRandomizer": "Рандомайзер чисел",
			"minMaxInterval": "Случайное целое число из [min, max] интервала",
			"minValue": "Min значение",
			"maxValue": "Max значение",
			"pushYourLuckButton": "Испытай удачу!",
			"setResult": "Результат:",
			"resetButton": "Сбросить",
			"emptyRandomNumber": "(?)",
			"developerName": "Автор: Дмитрий Белов",
			"localizerName": "Перевод: Елена Петрова",
			"linesRandomizerTabName": "Рандомайзер строк",
			"linesRandomizer": "Рандомайзер строк",
			"linesNames": "Случайная строка из списка",
			"linesSpace": "Новая строка",
			"addLineButton": "Добавить строку",
			"newLines": "Строки",
			"cleanLinesButton": "Очистить",
			"emptyRandomLine": "(?)"
		},
		"de": {
			"title": "Yet Another Randomizer",
			"sourceCode": "Source Code",
			"numberRandomizerTabName": "Der Zahlenzufallsgenerator",
			"numberRandomizer": "Der Zahlenzufallsgenerator",
			"minMaxInterval": "Generiert eine zufällige ganzzahlige Zahl aus dem Intervall [min, max]",
			"minValue": "Min Wert",
			"maxValue": "Max Wert",
			"pushYourLuckButton": "Fordere Dein Glück heraus!",
			"setResult": "Das Ergebnis:",
			"resetButton": "Zurücksetzen",
			"emptyRandomNumber": "(?)",
			"developerName": "Erstellt von Dmitry Belov",
			"localizerName": "Übersetzt von Elena Petrova",
			"linesRandomizerTabName": "Der Linienzufallsgenerator",
			"linesRandomizer": "Der Linienzufallsgenerator",
			"linesNames": "Erzeugt eine zufällige Linie aus der Liste den Linien",
			"linesSpace": "Neue Linie",
			"addLineButton": "Linie hinzufügen",
			"newLines": "Linien",
			"cleanLinesButton": "Reinigen",
			"emptyRandomLine": "(?)"
		}
	});

	locale.set("ru");
</script>

<main>
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
