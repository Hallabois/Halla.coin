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
	<h1> Hallacoin. </h1>
</main>

<style>
:global(body){
	background: #262626;
	text-align: center;
}
canvas {
	max-width: 90%;
	max-height: 20%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>
