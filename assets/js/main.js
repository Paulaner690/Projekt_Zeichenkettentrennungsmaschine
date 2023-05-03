// Varialblen Output
const ausgabeVorne = document.querySelector(".output-before");
const ausgabeHinten = document.querySelector(".output-after");

//FUNKTION ZEICHENTRENNUNG======================
const zeichentrennung = () => {
  // Variablen Input Zeichenkette und Trennungsposition
  let inputKette = document.querySelector("#zeichenkette").value;
  let inputPosition = document.querySelector("#trennungsposition").value;
  //   Variable um zu checken, ob Postion in Kette vorkommt
  let index = inputKette.indexOf(inputPosition);

  // Trennungsvariablen erst wird geprüft, ob der radiobtn geklickt wurde, bevor versucht wird, seinen Wert abzurufen.
  const trennenInput = document.querySelector(
    'input[name="woTrennen"]:checked'
  );
  const trennen = trennenInput ? trennenInput.value : null;

  if (index === -1) {
    // "error", weil das Wort nicht in der Zeichenkette vorkommt.
    ausgabeVorne.innerHTML = "Oooooops, das Wort gibt es wohl nicht.";
    ausgabeHinten.innerHTML = inputKette;
  } else {
    // Option 1: Radio-btn "davor trennen ausgewählt" vorne: bis index        anzeigen hinten: ab index anzeigen
    if (trennen === "davor") {
      ausgabeVorne.innerHTML = inputKette.slice(0, index);
      console.log(ausgabeVorne.innerHTML);
      ausgabeHinten.innerHTML = inputKette.slice(index);

      // Option 2: Radio-btn "danach trennen ausgewählt" vorne: bis einschließlich des Trennungsworts anzeigen hinten: nach dem Trennungswort anzeigen
    } else if (trennen === "danach") {
      ausgabeVorne.innerHTML = inputKette.slice(
        0,
        index + inputPosition.length
      );
      console.log("das ist ausgabe danach:", ausgabeVorne.innerHTML);
      ausgabeHinten.innerHTML = inputKette.slice(index + inputPosition.length);

      //   Wenn keine Checkbox ausgewählt ist
    } else {
      ausgabeVorne.innerHTML = "kein Button gewählt";
    }
  }
};
