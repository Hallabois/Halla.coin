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
		<button on:click={go}> Lataa nyt </button>
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
	font-size: 10%;
	color: #aaaaaa;
	margin-top: 0;
	margin-bottom: 15px;
}
.ohjeet{
	margin-top: 50px;
	background: #1e2f3e;
	color: #EEEEEE
}
h1{
	margin-top: 0;
	margin-bottom: 0;
	font-size: 400%;
}
button{
	margin-top: 30px;
	margin-bottom: 50px;
	font-size: 150%;
	border-radius: .2em;
	transition: box-shadow .25s;
}
button:hover{
	box-shadow: .5em .5em 1em black;
	cursor: pointer;
}
</style>
