<script>
	export let name;
	import Navbar from "./components/Navbar.svelte";
	import Upload from "./Components/Upload.svelte";
	
</script>

<Navbar />
<main>
	<h1>We are Team {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>

<Upload />

</main>

<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
