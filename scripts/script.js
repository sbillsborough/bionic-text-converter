const textArea = document.getElementById("textArea");
const convertedText = document.querySelector(".result-container");

let textAreaContent = "";

function storeTextArea() {
  if (!textArea.value) {
    console.log("Nothing present");
  } else {
    textAreaContent = textArea.value;
    convertTextArea();
  }
}

function convertTextArea() {
  console.log(textAreaContent);
  // convertedText.innerText = textAreaContent;
  let splitTextAreaContent = textAreaContent.split(" ");
  console.log(splitTextAreaContent);
}
