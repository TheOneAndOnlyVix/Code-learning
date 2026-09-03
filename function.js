const input = document.getElementById("text_input");
// Finds the element by it's id and stores it
const output = document.getElementById("text_output");
// Same thing

input.addEventListener("input", () => {output.textContent = input.value;} );
//adds an event listener called input that sets output and input equal to one another
