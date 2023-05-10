const textArea = document.getElementById("textArea");

let textAreaContent = "";

console.log(textAreaContent);

function converterFunction() {
  if (!textArea.value) {
    console.log("Nothing present");
  } else {
    textAreaContent = textArea.value;
    console.log(textAreaContent);
  }
  logTextArea();
}

function logTextArea() {
  console.log(textAreaContent);
}
