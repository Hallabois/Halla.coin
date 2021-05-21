<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>

<style>
:global(body){
	background: black;
}
canvas {
	max-width: 90%;
	max-height: 90%;
}
</style>
