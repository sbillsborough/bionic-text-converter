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

function boldString(word, subword) {
  var strRegExp = new RegExp(subword, "g");
  return word.replace(strRegExp, "<span>" + subword + "</span>");
}

function convertTextArea() {
  let convertedWordsArray = [];
  textAreaContent.split(" ").forEach((word) => {
    if (word) {
      convertedWordsArray += word + " ";
      convertedText.innerHTML = convertedWordsArray;
      //Splits the words then logs them to the console
      // let splitWord = word.split("");
      // console.log(splitWord);
      // for (let index = 0; index < splitWord.length / 2; index++) {
      //   let boldLetters = [splitWord[index]];
      //   console.log(`<span>${boldLetters}</span>`);
      // }

      // word = `<span> ${word} </span>`;
    }
  });
}
