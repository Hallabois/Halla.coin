<script>
	import { dictionary, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import LangSwitcher from "./LangSwitcher.svelte";
	import Scene from "./scene.svelte";
	let tutorialURL = "https://hallabois.github.io/Hallacoin-ohjeet/";
	function go(){
		window.location.href = tutorialURL;
	}
	let loaded = false;
	let loaded_percent = 0;
	$: progress_display = loaded?"none":"inherit";
	import { setupI18n, isLocaleLoaded, _ } from './i18n.js';
	let lang = "fi";
	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: lang });
	}
	let lastLang = lang;
	$: if(lastLang != lang){
		setupI18n({ withLocale: lang });
		lastLang = lang;
	}
</script>

{#if $isLocaleLoaded}
<main>
	<LangSwitcher bind:lang={lang} />
	<Scene bind:loaded={loaded} bind:loaded_percent={loaded_percent} />
	<h1>Hallacoin</h1>
	<p class="laudatur">Since 1940 - Confido Autem In Halla - Inventum Est Ksyk</p>
    <div class="ohje ohje-pariton">
		<!-- <button on:click={go}> Lataa nyt </button> -->
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="downloadicon.png" alt="HallaDownload" width="80" height="80"></a>
		<h2>{$_('app.asennus_win_title')}</h2>
		<ol>
		<li>{$_('app.asennus_win_1')} <a href="https://github.com/hallabois/hallacoin/releases" download>Hallacoin-x.xx.x-win64-setup.exe</a></li>
		<li>{$_('app.asennus_win_2a')} <a href="https://raw.githubusercontent.com/hallabois/hallacoin/master/Hallacoin.conf" download="Hallacoin.conf">Hallacoin.conf</a> {$_('app.asennus_win_2b')}</li>
		<li>{$_('app.asennus_win_3')} C:\Users\NAME\AppData\Roaming\Hallacoin.</li>
		<li>{$_('app.asennus_win_4')}</li>
		</ol>
		<br>
		<br>
    	<a class="ohjelinkki" href="https://hallabois.github.io/Hallacoin-ohjeet/asennus">{$_('app.asennus_ohje_1')}</a>
	</div>
	<div class="ohje">
		<img src="kaivostoiminta.png" alt="Kaivostoiminta" width="80" height="80">
		<h2>{$_('app.kaivaminen_win_title')}</h2>		
		<ol>
		<li>{$_('app.kaivaminen_win_1')} <a href="https://sourceforge.net/projects/cpuminer/files/latest/download">cpuminer</a></li>
		<li>{$_('app.kaivaminen_win_2')} Hallacoin-qt.exe -server -addresstype=legacy</li>
		<li>{$_('app.kaivaminen_win_3')} minerd -o http://localhost:9332/ --user darius --pass rucker --coinbase-addr=sun hallacoin-osoite (Hallacoin osoite löytyy vastaanota varoja-osiosta)</li>
		</ol>
		<br />
		<br />
		<a class="ohjelinkki" href="https://hallabois.github.io/Hallacoin-ohjeet/mining">Yksityiskohtaisempi ohje kaivostoimintaan</a>
	</div>
	<div class="ohje ohje-pariton">
		<img src="hallacoin50000.png" alt="HallaCoin" width="80" height="80">
		<h2>{$_('app.about_title')}</h2>
		<p class="about">{$_('app.about_body_a')} <a href="https://discord.gg/7x25Jxrkvr">Hallabois</a>{$_('app.about_body_b')}</p>
		<p>{$_('app.about_github_a')} <a href="https://github.com/hallabois">Github</a>{$_('app.about_github_b')}</p>
	</div>
	<div class="credits">
		<h3>{$_('app.credits_title')}</h3>
		<p class="credit">Hallacoin 3D-model made by @Anatoli</p>
		<p class="credit">Hallacoin 2D-texture made by @Toivo, @Vizitys</p>
		<p class="credit">Website made by @E3R0, @Jonnelafin</p>
		<p class="credit">Hallacoin Core by The Litecoin developers, the Bitcoin developers, @Jonnelafin, @Vizitys, @VilkkuV</p>
		<p class="credit">Also contributed @Erikoisjii, @Rohkeli</p>
	</div>
</main>
{/if}

<style>
:global(body){
	background: #1f2125;
	color: #EEEEEE;
	text-align: center;
	margin: 0;
	padding: 0;
}

/* Helpompi muuttaa kaikkia asioita kerralla  */
.ohje {
	padding-bottom: 50px;
	color: #EEEEEE;
	width: 75%;
	margin: auto;
	margin-top: 1em;
	margin-bottom: 1em;
	border-radius: 2em;
	padding-left: 2em;
	padding-right: 2em;
	/*box-shadow: inset .210em .210em .420em #00000042;
	border: 1.5px solid #333333;*/
	background: #1a1d21;
}

.ohje-pariton {
	background: #1e2f3e;
	padding-top: 0;
}
.laudatur {
	font-family: 'Mate SC', serif;
	margin-top: 15px;
	margin-bottom: 30px;
	padding-left: 1.5em;
	padding-right: 1.5em;
}
.about{
	width: 50%;
	margin: auto;
	margin-bottom: 10px;
}
.credit{
	font-size: .75em;
}
.credits{
	margin-top: 20px;
	padding-bottom: 10px;
}
.ohjelinkki{
	text-align: center;
}
/*                                    */
h1{
	margin-top: 0;
	margin-bottom: 0;
	font-size: 450%;
	font-family: 'Fredoka One', cursive;
	letter-spacing: 2px;
	font-weight: 100;
}
h2{
	margin-top: 0;
	margin-bottom: 40px;
}
ol{
	width: 50%;
	margin: auto;
	text-align: left;
}
a{
	color: #34e1eb;
}

img{
	margin-top: 20px;
	margin-bottom: 12px;
}
button{
	margin-top: 30px;
	margin-bottom: 10px;
	font-size: 100%;
	border-radius: .2em;
	transition: box-shadow .25s;
}
button:hover{
	box-shadow: .5em .5em 1em black;
	cursor: pointer;
}


/* Puhelin etc */
@media only screen and (max-width: 1000px) {
	.ohje{
		width: calc(99% - 3em);
		padding-left: 1em;
		padding-right: 1em;
	}
	ol{
		width: 75%;
	}
	.about{
		width: 75%;
	}
}
</style>
