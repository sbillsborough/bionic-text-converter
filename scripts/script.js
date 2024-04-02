// Store the text area and results container to their associated variables
const textArea = document.getElementById("textArea");
const convertedText = document.querySelector(".result-container");

// Text area content empty string
let textAreaContent = "";

//
function storeTextArea() {
  if (!textArea.value) {
    convertedText.innerHTML = `Please enter some text...`;
  } else {
    textAreaContent = textArea.value;
    convertTextArea();
  }
}

function convertTextArea() {
  let convertedWordsArray = [];
  var joinedPhrase = "";
  textAreaContent.split(" ").forEach((word) => {
    if (word) {
      convertedWordsArray += word + " ";

      // Splits the words
      let splitWord = word.split("");

      let firstHalfOfWord = "";

      if (splitWord.length % 2 === 1 && splitWord.length <= 3) {
        firstHalfOfWord = splitWord
          .slice(0, Math.floor(splitWord.length / 2))
          .join("")
          .trim();
      } else {
        firstHalfOfWord = splitWord
          .slice(0, Math.ceil(splitWord.length / 2))
          .join("")
          .trim();
      }

      let secondHalfOfWord = "";

      if (splitWord.length % 2 === 1 && splitWord.length <= 3) {
        secondHalfOfWord = splitWord
          .slice(Math.floor(splitWord.length / 2))
          .join("")
          .trim();
      } else {
        secondHalfOfWord = splitWord
          .slice(Math.ceil(splitWord.length / 2))
          .join("")
          .trim();
      }

      let rejoinedWord = `<span>${firstHalfOfWord}</span>${secondHalfOfWord}`;

      joinedPhrase += rejoinedWord + " ";
      convertedText.innerHTML = `<h3>Your converted text is:</h3>${joinedPhrase}`;
    }
  });
}
