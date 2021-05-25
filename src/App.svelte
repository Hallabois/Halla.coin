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
	<p class="credit">Hallacoin 3D-model made by @Anatoli</p>
	<h1> Hallacoin </h1>
	<p class="laudatur">Since 1940 - Confido Autem In Halla - Inventum Est Ksyk</p>
    <div class="ohjeet">
		<!-- <button on:click={go}> Lataa nyt </button> -->
		<h2>Asennus Windowsille (64-bit)</h2>
		<ol>
		<li>Lataa ja asenna <a href="https://github.com/hallabois/hallacoin/releases" download>Hallacoin-x.xx.x-win64-setup.exe</a></li>
		<li>Lataa tiedosto <a href="https://raw.githubusercontent.com/hallabois/hallacoin/master/Hallacoin.conf" download>Hallacoin.conf</a> (Ctrl+S lataa tiedoston). Pidä huolta että tiedoston tiedostopääte on .conf eikä .txt.</li>
		<li>Siirrä tiedosto kansioon C:\Users\SUNNIMITÄHÄN\AppData\Roaming\Hallacoin.</li>
		<li>Olet valmis käyttämään Hallacoinia!</li>
		</ol>
	</div>
	<div class="mining">
		<h2>Kaivostoiminta</h2>
		<ol>
		<li>Lataa <a href="https://sourceforge.net/projects/cpuminer/files/latest/download">cpuminer</a></li>
		<li>Mene Hallacoinin asennuskansioon ja suorita seuraava komento: Hallacoin-qt.exe -server -addresstype=legacy</li>
		<li>Mene kansioon, johon latasit cpuminerin ja suorita seuraava komento: minerd -o http://localhost:9332/ --user darius --pass rucker --coinbase-addr=sun Hallacoin-osoite (Hallacoin osoite lyötyy vastaanota rahoja-osiosta)</li>
	</div>
	<div class="abouthalla">
		
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
.credit{
	text-align: middle;
	font-size: .75em;
	color: #aaaaaa;
	margin-top: 0;
	margin-bottom: 15px;
}
.ohjeet{
	margin-top: 50px;
	padding-bottom: 50px;
	background: #1e2f3e;
	color: #EEEEEE;
}
.mining{
	margin-top: 50px;
	padding-bottom: 50px;
	background: #1f2125;
	color: #EEEEEE;
}
h1{
	margin-top: 0;
	margin-bottom: 0;
	font-size: 400%;
}
h2{
	padding-top: 30px;
	margin-bottom: 20px;
}
ol{
	width: 50%;
	margin: auto;
	text-align: left;
}
a{

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
