<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<main>
	<canvas bind:this={el}></canvas>
	<p class="credit">Hallacoin 3D-model made by @Anatoli (Sano mitä haluut tähä)</p>
	<h1> Hallacoin. </h1>
</main>

<style>
:global(body){
	background: #262626;
	color: #EEEEEE;
	text-align: center;
}
canvas {
/*	max-width: 90%;
	max-height: 20%;*/
	width: 70% !important;
	height: auto !important;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>
