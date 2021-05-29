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
	<h4 class="development">In development</h4>
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
		<li>{$_('app.asennus_win_3')} <code>C:\Users\NAME\AppData\Roaming\Hallacoin.</code></li>
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
		<li>{$_('app.kaivaminen_win_2')} <br><code>Hallacoin-qt.exe -server -addresstype=legacy</code></li>
		<li>{$_('app.kaivaminen_win_3')} <br><code>minerd -o http://localhost:9332/ --user darius --pass rucker --coinbase-addr=sun hallacoin-osoite</code> Hallacoin osoite löytyy vastaanota varoja-osiosta</li>
		</ol>
		<br />
		<br />
		<a class="ohjelinkki" href="https://hallabois.github.io/Hallacoin-ohjeet/mining">{$_('app.kaivaminen_ohje_1')}</a>
	</div>
	<div class="ohje ohje-pariton">
		<img src="hallacoin50000.png" alt="HallaCoin" width="80" height="80">
		<h2>{$_('app.about_title')}</h2>
		<p class="about">{$_('app.about_body_a')} <a href="https://discord.gg/7x25Jxrkvr">Hallabois</a>{$_('app.about_body_b')}</p>
		<p>{$_('app.about_paytowin_a')}</p><p class="honors honorM"> Magna 1 000 HLA </p><br/><p class="honors honorE"> Eximia 10 000 HLA </p><br/><p class="honors honorL"> Laudatur 100 000 HLA </p><p>{$_('app.about_paytowin_b')}</p>	
	</div>
	<div class="halloffame">
		<h3>Special Honors</h3>
		<p class="honors honorE"> Eximia 10 000 HLA - @Nitramli </p><br/>
		<p class="honors honorE"> Eximia 10 000 HLA - @E3R0 </p>
		<p class="honors honorE"> Eximia 10 000 HLA - @LilBobber </p><br/>
		<p class="honors honorE"> Eximia 10 000 HLA - @Vizitys </p>
		<p class="honors honorE"> Eximia 10 000 HLA - @Jonnelafin </p>
		<p class="honors honorM"> Magna 1 000 HLA - @PussySlayer43</p>
		<p class="honors honorI"> Improbatur 2 000 HLA - @Erikoisjii </p>
	</div>
	<div class="credits">
		<h3>{$_('app.credits_title')}</h3>
		<p>{$_('app.about_github_a')} <a href="https://github.com/hallabois">Github</a> {$_('app.about_github_b')} </p>
		<p class="credit">Hallacoin Framework by The Litecoin developers, the Bitcoin developers</p>
		<p class="credit">Hallacoin core by @Jonnelafin, @Vizitys, @VilkkuV</p>
		<p class="credit">Website made by @Jonnelafin, @E3R0, @Vizitys, @Erikoisjii</p>
		<p class="credit">Hallacoin 2D-texture made by @LilBobber, @Vizitys</p>
		<p class="credit">Hallacoin 3D-model made by @Anatoli</p>
		<p class="credit">Translations by @E3R0</p>	
		<p class="credit">Also contributed @Rohkeli</p>
	</div>
</main>
<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
{/if}

<style>
:global(body){
	background: #1f2125;
	color: #EEEEEE;
	text-align: center;
	margin: 0;
	padding: 0;
}
.development{
	margin-bottom: .5em;
	margin: 0;
	padding-top: .1em;
	padding-right: .3em;
	padding-left: .3em;
	padding-bottom: .2em;
	background: #9c483a;
	position: relative;
	bottom: 2px;
}
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
	text-overflow: clip;
	overflow: clip;
}
.ohje-pariton {
	background: #1e2f3e;
	padding-top: 0;
}
code {
	word-wrap: anywhere;
	background: #535354;
	border-radius: 3px;
	padding: 0 0.5em;
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
.halloffame{
	background: #32353b;
	padding-bottom: 20px;
	padding-top: 2px;
	width: 30%;
	margin: auto;
	margin-top: 1em;
	margin-bottom: 1em;
	border-radius: 2em;
	padding-left: 2em;
	padding-right: 2em;
	text-overflow: clip;
	overflow: clip;
}
.honors{
	margin-bottom: .5em;
	margin-top: 0;
	display: inline-block;
 	text-align: center;
	border-radius: 3px;
	padding-top: .1em;
	padding-right: .2em;
	padding-left: .2em;
	padding-bottom: .2em;
}
.honorM{
	color: #f19731;
	background: #5b4e38;

}
.honorE{
	color: #37e5b0;
	background: #435748;

}
.honorL{
	color: #db23d2;
	background: #5a3d50;

}
.honorI{
	color: #ff0302;
	background: #493238;

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
	.halloffame {
		width: 70%;
	}
}
</style>
