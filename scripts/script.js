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
  let convertedWordsArray = [];
  textAreaContent.split(" ").forEach((word) => {
    if (word.length > 2) {
      word = `<span class="bold"> ${word} </span>`;
      convertedWordsArray += word + " ";
      convertedText.innerHTML = convertedWordsArray;
    }
  });
}
