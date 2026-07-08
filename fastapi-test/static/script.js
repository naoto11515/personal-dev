const button = document.getElementById("calculateButton");
const input = document.getElementById("numberInput");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("number", input.value);

  const response = await fetch("/calculate", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  result.textContent = `${data.original} × 5 = ${data.result}`;
});