<script>
	import { writable } from 'svelte/store';
	export let loaded = false;
	export let loaded_percent = 0;
	let progress = writable(0);
	$: progress.set(loaded_percent*100);
</script>

{#if !loaded}
<main>
	<p> Loading... </p>
	<progress max="100" value={$progress}></progress>
</main>
{/if}

<style>
	main{
		color: #dddddd;
	}
</style>
