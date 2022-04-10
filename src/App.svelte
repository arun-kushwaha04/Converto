<script>
	import Navbar from "./Components/Navbar.svelte";
	import Upload from "./Components/Upload.svelte";
</script>

<main>
	<Navbar />
	<Upload />
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
