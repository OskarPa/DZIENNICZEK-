function pokazPodsumowanie() {
    var formularze = document.getElementsByClassName("form");
    for (var i = 0; i < formularze.length; i++) {
      formularze[i].style.display = "none";
    }
  
    var wyniki = document.getElementById("wyniki");
    wyniki.innerHTML = "";
    var polaFormularza = document.getElementsByTagName("input");
    for (var i = 0; i < polaFormularza.length; i++) {
      var pole = polaFormularza[i];
      if (pole.type !== "submit" && pole.type !== "reset") {
        wyniki.innerHTML += "<p>" + pole.name + pole.value + "</p>";
      }
    }
  
    var podsumowanie = document.getElementById("podsumowanie");
    podsumowanie.style.display = "block";
  }
  