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
	var localLang = localStorage.getItem("lang");
	if(langs.includes(localLang)){
		lang = localLang;
	}
	$: flag = flags[lang];
	$: console.log("Switched lang to \"" + lang + "\"");
	$: localStorage.setItem("lang", lang);
</script>

<main>
	<div>
		<!--<span>{flag}</span>-->
		<select bind:value={lang}>
			{#each langs as i}
				<option value={i}>{i}-{flags[i]}</option>
			{/each}
		</select>
	</div>
</main>

<style>
	main {
		/*width: 90%;*/
		margin-right: 1em;
		text-align: right;
		font-size: 150%;
	}
	select, option{
		font-size: 1.25rem;
	    background: #1e2f3e;
	    border: none;
	    color: white;
	    border-radius: 5px;
	    margin-bottom: 0px;
	}
	div {
	    max-width: 4em;
    	margin-left: auto;
	    background: #1e2f3e;
	    border-radius: 5px;
	    padding: 0.2em;
	}
	span {
		margin-bottom: 0.5em;
	}
</style>
