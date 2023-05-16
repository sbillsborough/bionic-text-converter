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
  newWord = [];
  textAreaContent.split(" ").forEach((word) => {
    if (word.length > 2) {
      word = "<span>" + word + "</span>";
      newWord += word + " ";
      convertedText.innerHTML = newWord;
    }
  });
}
