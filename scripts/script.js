const textArea = document.getElementById("textArea");
const convertedText = document.querySelector(".result-container");

let textAreaContent = "";
let firstHalfOfWord = "";
let secondHalfOfWord = "";

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
      // Splits the words
      let splitWord = word.split("");

      firstHalfOfWord = splitWord
        .slice(0, splitWord.length / 2)
        .join("")
        .trim();

      let spanAddedToFirstHalf = `<span>${firstHalfOfWord}</span>`;
      console.log(spanAddedToFirstHalf);

      let secondHalfOfWord = splitWord
        .slice(Math.ceil(splitWord.length / 2))
        .join("")
        .trim();

      console.log(secondHalfOfWord);
    }
    let rejoinedWord = `<span>${firstHalfOfWord}</span>${secondHalfOfWord}`;
    console.log(rejoinedWord);
    convertedText.innerHTML = rejoinedWord;
  });
}
