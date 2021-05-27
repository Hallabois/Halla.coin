<script>
	let langs = [
		"fi",
		"en"
	];
	export let lang = "fi";
	let flags = {
		"fi" : "🇫🇮",
		"en" : "🇬🇧"
	};
	$: flag = flags[lang];
	$: console.log("Switched lang to \"" + lang + "\"");
</script>

<main>
	{flag}
	<select bind:value={lang}>
		{#each langs as i}
			<option>{i}</option>
		{/each}
	</select>
</main>

<style>
	main {
		width: 90%;
		text-align: right;
		margin: 0;
		font-size: 150%;
	}
	select, option{
		font-size: 1rem;
	}
</style>
