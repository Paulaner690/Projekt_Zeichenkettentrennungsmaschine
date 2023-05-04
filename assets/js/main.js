// Varialblen Output
const ausgabeVorne = document.querySelector(".output-before");
const ausgabeHinten = document.querySelector(".output-after");

//FUNKTION ZEICHENTRENNUNG======================
const zeichentrennung = () => {
  // Variablen Input Zeichenkette und Trennungsposition auslesen
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
    // Option 1: Radio-btn "davor trennen ausgewählt" vorne: bis index anzeigen, hinten: ab index anzeigen
    if (trennen === "davor") {
      ausgabeVorne.innerHTML = inputKette.slice(0, index);
      ausgabeHinten.innerHTML = inputKette.slice(index);

      // Option 2: Radio-btn "danach trennen ausgewählt" vorne: bis einschließlich des Trennungsworts anzeigen hinten: nach dem Trennungswort anzeigen
    } else if (trennen === "danach") {
      ausgabeVorne.innerHTML = inputKette.slice(
        0,
        index + inputPosition.length
      );
      ausgabeHinten.innerHTML = inputKette.slice(index + inputPosition.length);

      //   Wenn keine Checkbox ausgewählt ist (kann vermieden werden indem man im html eine checkbox mit checked markiert, damit immer eine ausgewählt ist)
    } else {
      ausgabeVorne.innerHTML = "kein Button gewählt";
    }
  }
};

// 1. Variablen Input auslesen und loggen
// 2. Radio-Buttons auslesen mit 'input[name="woTrennen"]:checked' durch name wird ausgelesen welche radio buttons zusammengehören, damit nur eins ausgewählt ist. mit checked: wird ausgelesen welcher ausgewählt ist
// 3. schauen ob das trennwort im Satz vorkommt. mit if/else: entweder wie oben mit indexOf (-1 nicht vorhanden) oder includes() true oder false ob wort vorkommt.
// 4. Output definieren. Wenn es funktioniert und error falls das Wort nicht vorkommt
// mit indexOf Stelle zum Umbruch finden und ggf. mit length die länge des Trennworts ermitteln
// 5. mit weiterem index ermitteln ob der Satz vor oder nach dem Trennwort getrennt werden soll
