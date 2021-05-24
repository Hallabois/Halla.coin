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
	<button on:click={go}> Lataa nyt </button>
</main>

<style>
:global(body){
	background: #262626;
	color: #EEEEEE;
	text-align: center;
}
.credit{
	text-align: middle;
	font-size: 1;
	color: #aaaaaa;
	margin-top: 0;
	margin-bottom: 15px;
}
.ohjeet{
	text-align: left;
	margin-top: 50px;
	margin-left: 50px;
}
h1{
	margin-top: 0;
	font-size: 300%;
}
button{
	font-size: 150%;
	border-radius: .2em;
	transition: box-shadow .25s;
}
button:hover{
	box-shadow: .5em .5em 1em black;
	cursor: pointer;
}
</style>
