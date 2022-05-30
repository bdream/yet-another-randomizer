import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Yet Another Randomizer'
	}
});

export default app;