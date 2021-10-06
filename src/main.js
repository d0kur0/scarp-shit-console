import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {},
});

function handleValue({ parentElement, element, assertValue }) {
	const associations = { M: 1000000, K: 1000 };
	const elementValue = element.textContent;
	const unit = elementValue.charAt(elementValue.length - 1);
	const realValue = elementValue.replace(/[^\d.-]/g, "") * (associations[unit] || 1);

	if (isNaN(realValue)) return;

	if (realValue < assertValue) {
		parentElement.style.setProperty("color", "#000");
		parentElement.style.setProperty("background-color", "#000");
	} else {
		parentElement.style.removeProperty("color");
		parentElement.style.removeProperty("background-color");
	}
}

setInterval(() => {
	const rows = document.querySelectorAll("#tables > div:nth-child(1) tbody tr");

	rows.forEach(row => {
		const [, longTd, , shortTd] = row.querySelectorAll("td");

		const [longElement, shortElement] = [
			longTd.querySelector("span"),
			shortTd.querySelector("span"),
		];

		handleValue({
			parentElement: longTd,
			element: longElement,
			assertValue: localStorage.minLong,
		});

		handleValue({
			parentElement: shortTd,
			element: shortElement,
			assertValue: localStorage.minShort,
		});
	});
}, 3000);

export default app;
