// Store the text area and results container to their associated variables
const textArea = document.getElementById("textArea");
const convertedText = document.querySelector(".result-container");

// button Query Selector and Event Listener

const button = document.querySelector(".button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  storeTextArea();
});

// Text area content empty string
let textAreaContent = "";

// Checks if there is text entered into the textArea, if not the convertedText div is populated with a message requesting text, if it is then it's populated with the converted text.
function storeTextArea() {
  if (!textArea.value) {
    convertedText.innerHTML = `Please enter some text...`;
  } else {
    textAreaContent = textArea.value;
    convertTextArea();
  }
}

function convertTextArea() {
  var joinedPhrase = "";

  // Regular expression to match any punctuation
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

  textAreaContent.split(" ").forEach((word) => {
    let wordParts = word.split(punctuationRegex); // Split word by punctuation
    let cleanedWord = wordParts.filter((part) => part.trim() !== ""); // Remove empty parts
    console.log(cleanedWord);

    if (cleanedWord.length > 0) {
      let splitWord = cleanedWord[0].split("");
      let midIndex = Math.ceil(splitWord.length / 2);

      let firstHalfOfWord = splitWord.slice(0, midIndex).join("").trim();
      let secondHalfOfWord = splitWord.slice(midIndex).join("").trim();
      let rejoinedWord = `<span>${firstHalfOfWord}</span>${secondHalfOfWord}`;

      // Reconstruct the word with punctuation if any
      if (wordParts.length > 1) {
        rejoinedWord += word.substring(cleanedWord[0].length);
      }
      joinedPhrase += rejoinedWord + " ";
    }
  });

  convertedText.innerHTML = `<h3>Your converted text is:</h3>${joinedPhrase}`;
}
