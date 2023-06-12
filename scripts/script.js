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
  var boldLetters = [];
  textAreaContent.split(" ").forEach((word) => {
    if (word) {
      convertedWordsArray += word + " ";
      convertedText.innerHTML = convertedWordsArray;
      // Splits the words
      let splitWord = word.split("");

      let firstHalfOfWord = splitWord
        .slice(0, splitWord.length / 2)
        .join("")
        .trim();

      let spanAddedToFirstHalf = `<span>${firstHalfOfWord}</span>`;
      console.log(spanAddedToFirstHalf);

      // for loop over result of split that adds an opening and closing span tag to the first half of the word
      // for (let index = 0; index < splitWord.length / 2; index++) {
      //   boldLetters += [splitWord[index]];
      // }
      // let spanAddedToBoldLetters = `<span>${boldLetters}</span>`;
      // console.log(spanAddedToBoldLetters);

      // slices the split word and returns the second half of the word

      let secondHalfOfWord = splitWord
        .slice(Math.ceil(splitWord.length / 2))
        .join("")
        .trim();

      console.log(secondHalfOfWord);
    }
  });
}
