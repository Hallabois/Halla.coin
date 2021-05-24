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
	<p class="credit">Hallacoin 3D-model made by @Anatoli</p>
	<h1> Hallacoin </h1>
</main>

<style>
:global(body){
	background: #262626;
	color: #EEEEEE;
	text-align: center;
}
.credit{
	text-align: middle;
	font-size: .3em;
	color: #aaaaaa;
	margin-top: 0;
	margin-bottom: 15px;
}
h1{
	margin-top: 0;
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
