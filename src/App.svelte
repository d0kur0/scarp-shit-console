<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.extension {
	font-family: "Press Start 2P", cursive;
}

.open-button {
	z-index: 9999;
	transition: 0.3s;
	position: absolute;
	bottom: 15px;
	right: 15px;
	font-weight: bold;
	font-size: 0.8em;
	border: none;
	background-color: rgb(224, 224, 224);
	border-radius: 8px;
	padding: 5px 15px;
	box-shadow: 1px 2px 1px 1px #747474;
}

.open-button:hover {
	background-color: #cdcdcd;
	box-shadow: 1px 2px 1px 1px rgb(87, 87, 87);
}
</style>

<script>
import Console from "./Console.svelte";

let isOpen = false;

function handleOpen() {
	isOpen = true;
}
</script>

<main class="extension">
	{#if isOpen}
		<Console onClose="{() => (isOpen = false)}" />
	{:else}
		<button on:click="{handleOpen}" class="open-button">Open settings</button>
	{/if}
</main>
