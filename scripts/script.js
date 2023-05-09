function converterFunction() {
  const textArea = document.getElementById("textArea");
  if (!textArea) {
    console.log("Nothing present");
  } else {
    console.log(textArea.value);
  }
}
