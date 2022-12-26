<script>
	import '../app.css';
	import './styles.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" /><link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin
	/><link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<main class="bg-primary2">
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		flex-wrap: nowrap;
	}

	main {
		flex: 1;
	}
</style>
