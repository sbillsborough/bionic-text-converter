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
    if (word) {
      convertedWordsArray += word + " ";
      convertedText.innerHTML = convertedWordsArray;
      // Splits the words then logs them to the console
      let splitWord = word.split("");
      for (let index = 0; index < splitWord.length / 2; index++) {
        let boldLetters = [splitWord[index]];
        console.log(`<span>${boldLetters}</span>`);
      }
      let secondHalfOfWord = splitWord
        .slice(Math.ceil(splitWord.length / 2))
        .join("")
        .trim();
      // console.log(splitWord);
      console.log(secondHalfOfWord);
    }
  });
}
