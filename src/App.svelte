<script>
  import { onMount } from 'svelte';
  import Scene from "./scene.svelte";
  let tutorialURL = "https://hallabois.github.io/Hallacoin-ohjeet/";
  function go(){
  	window.location.href = tutorialURL;
  }
  let loaded = false;
  let loaded_percent = 0;
  $: progress_display = loaded?"none":"inherit";
</script>

<main>
	<Scene bind:loaded={loaded} bind:loaded_percent={loaded_percent} />
	<h1>Hallacoin</h1>
	<p class="laudatur">Since 1940 - Confido Autem In Halla - Inventum Est Ksyk</p>
    <div class="ohje ohje-pariton">
		<!-- <button on:click={go}> Lataa nyt </button> -->
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="downloadicon.png" alt="HallaDownload" width="80" height="80"></a>
		<h2>Asentaminen Windowsille (64-bit)</h2>
		<a class="ohjelinkki" href="https://hallabois.github.io/Hallacoin-ohjeet/asennus">Selvempi ohje nyt saatavilla! (https://hallabois.github.io/Hallacoin-ohjeet/asennus)</a><br><br><br>
		<ol>
		<li>Lataa ja asenna <a href="https://github.com/hallabois/hallacoin/releases" download>Hallacoin-x.xx.x-win64-setup.exe</a></li>
		<li>Lataa tiedosto <a href="https://raw.githubusercontent.com/hallabois/hallacoin/master/Hallacoin.conf" download="Hallacoin.conf">Hallacoin.conf</a> (Ctrl+S lataa tiedoston). Pidä huolta että tiedoston tiedostopääte on .conf eikä .txt.</li>
		<li>Siirrä tiedosto kansioon C:\Users\SUNNIMITÄHÄN\AppData\Roaming\Hallacoin.</li>
		<li>Olet valmis käyttämään Hallacoinia!</li>
		</ol>
	</div>
	<div class="ohje">
		<img src="kaivostoiminta.png" alt="Kaivostoiminta" width="80" height="80">
		<h2>Kaivostoiminta</h2>		
		<ol>
		<li>Lataa <a href="https://sourceforge.net/projects/cpuminer/files/latest/download">cpuminer</a></li>
		<li>Mene Hallacoinin asennuskansioon ja suorita seuraava komento: Hallacoin-qt.exe -server -addresstype=legacy</li>
		<li>Mene kansioon, johon latasit cpuminerin ja suorita seuraava komento: minerd -o http://localhost:9332/ --user darius --pass rucker --coinbase-addr=sun hallacoin-osoite (Hallacoin osoite löytyy vastaanota varoja-osiosta)</li>
	</div>
	<div class="ohje ohje-pariton">
		<img src="hallacoin50000.png" alt="HallaCoin" width="80" height="80">
		<h2>Mikä on Hallacoin?</h2>
		<p class="about">Hallacoin on <a href="https://discord.gg/4HFVy2BAbe">Hallabois</a>-palvelimen kehittämä ja ylläpitämä kryptovaluutta. Hallacoinilla voi mm. ostaa rankkeja palvelimelta. Hallacoinilla ei (vielä tässä vaiheessa) ole mitään oikeaa markkina-arvoa. Sitä voi kuitenkin käyttää kuten oikeaa valuuttaa, jos sellaiselle sattuu olemaan tarvetta.</p>
		<p>Projektin <a href="https://github.com/hallabois">Github</a></p>
	</div>
	<div class="credits">
		<h3>Credits:</h3>
		<p class="credit">Hallacoin 3D-model made by @Anatoli</p>
		<p class="credit">Hallacoin 2D-texture made by @Toivo, @Vizitys</p>
		<p class="credit">Website made by @E3R0, @Jonnelafin</p>
		<p class="credit">Hallacoin Core by The Litecoin developers, the Bitcoin developers, @Jonnelafin, @Vizitys, @VilkkuV</p>
	</div>
</main>

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
	margin: 0;
	color: #EEEEEE;
}
.ohje-pariton {
	background: #1e2f3e;
	padding-top: 0;
}
.laudatur {
	font-family: 'Mate SC', serif;
	margin-top: 15px;
	margin-bottom: 30px;
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
	color: #EEEEEE;
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
</style>
