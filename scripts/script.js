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
  var joinedPhrase = "";
  textAreaContent.split(" ").forEach((word) => {
    if (word) {
      convertedWordsArray += word + " ";
      // convertedText.innerHTML = convertedWordsArray;
      // Splits the words
      let splitWord = word.split("");

      let firstHalfOfWord = splitWord
        .slice(0, splitWord.length / 2)
        .join("")
        .trim();

      let secondHalfOfWord = splitWord
        .slice(splitWord.length / 2)
        .join("")
        .trim();

      console.log(firstHalfOfWord);
      console.log(secondHalfOfWord);

      let rejoinedWord = `<span>${firstHalfOfWord}</span>${secondHalfOfWord}`;

      console.log(`rejoined word = ${rejoinedWord}`);
      joinedPhrase += rejoinedWord + " ";
      convertedText.innerHTML = joinedPhrase;
    }
  });
}
