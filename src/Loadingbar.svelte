<script>
	import { writable } from 'svelte/store';
	export let loaded = false;
	export let loaded_percent = 0;
</script>

{#if !loaded}
<main>
	<p> Loading... </p>
	<h3> {Math.round(loaded_percent * 100) / 100}% </h3>
</main>
{/if}

<style>
	main{
		color: #dddddd;
	}
</style>
