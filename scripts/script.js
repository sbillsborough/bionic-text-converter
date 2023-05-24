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
    if (word.length >= 2) {
      let splitWord = word.split("");
      console.log(splitWord);
      for (let index = 0; index < splitWord.length / 2; index++) {
        console.log(splitWord[index]);
      }

      // word = `<span> ${word} </span>`;
      convertedWordsArray += word + " ";
      convertedText.innerHTML = convertedWordsArray;
    }
  });
}
