<script>
	import Navbar from "./Components/Navbar.svelte";
	import Upload from "./Components/Upload.svelte";
	import Banner from "./Components/Banner.svelte";
</script>

<main>
	<Navbar />
	<Banner />
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
