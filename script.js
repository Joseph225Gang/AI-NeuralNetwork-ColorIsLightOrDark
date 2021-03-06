
const example = document.querySelector("#example")
const button = document.querySelector("button")

button.addEventListener("click", (e) => {
  const rgbR = document.querySelector("#rgbR").value
  const rgbG = document.querySelector("#rgbG").value
  const rgbB = document.querySelector("#rgbB").value
  const network = new brain.NeuralNetwork()
  network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    { input: {r: 1, g: 0.99, b: 0}, output: { light: 1 } },
    { input: {r: 1, g: 0.42, b: 0.52}, output: { dark: 1 } },
  ])
  
  const result = network.run({r: rgbR, g: rgbG, b: rgbB})
  console.log(result);
  example.style.background = e.target.value
  example.style.color = result === "dark" ? "white" : "black"
})
