import App from "./App.svelte";

const data = {};

fetch("/data.json")
  .then((response) => response.json())
  .then(console.log);

console.log(data);

export default new App({
  target: document.body,
  props: {
    ...data,
  },
});
