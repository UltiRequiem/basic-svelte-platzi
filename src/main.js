import App from "./App.svelte";

// cors problems
// const xkdcData = (async () => {
//   const response = await fetch("https://xkcd.com/info.0.json", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// })();

export default new App({
  target: document.body,
  props: {
    title: "Language Development",
    src: "https://imgs.xkcd.com/comics/language_development.png",
    num: 2567,
  },
});
