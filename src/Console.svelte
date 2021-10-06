<style>
.console-overlay {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999999;
	background-color: rgba(0, 0, 0, 0.623);
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.console-body {
	width: 850px;
	background-color: #fff;
	padding: 15px 20px;
	border-radius: 10px;
}

.console-header {
	font-weight: bold;
	font-size: 1.2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 20px;
}

.divider {
	height: 3px;
	border-radius: 50px;
	background-color: #ccc;
	margin: 15px 0;
}

legend {
	font-size: 0.9em;
}

.input-value {
	width: 120px;
}
</style>

<script>
export let onClose;

let shortValue = localStorage.minShort || "0";
let longValue = localStorage.minLong || "0";

function handleShortChange(event) {
	localStorage.minShort = event.target.value;
}

function handleLongChange(event) {
	localStorage.minLong = event.target.value;
}
</script>

<div class="console-overlay">
	<div class="console-body">
		<div class="console-header">
			Настройки вашего гавна
			<button on:click="{onClose}" class="console-close-button">Закрыть</button>
		</div>

		<div class="console-content">
			<fieldset>
				<legend>Затирать гавно, если:</legend>
				S LONG меньше
				<input
					type="text"
					bind:value="{shortValue}"
					on:input="{handleShortChange}"
					class="input-value" />

				или S SHORT меньше
				<input
					type="text"
					bind:value="{longValue}"
					on:input="{handleLongChange}"
					class="input-value" />
			</fieldset>
			<div class="divider"></div>
			fuck2
		</div>
	</div>
</div>
