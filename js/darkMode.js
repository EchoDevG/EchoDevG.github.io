function darkModeSwitched() {
  var checkBox = document.getElementById("darkModeSwitch");
  var cookieConsent = localStorage.getItem("cookieconsent");
  if (cookieConsent == "true"){
  if (checkBox.checked == true){
      setCookie("darkmode", true);
  } else {
      setCookie("darkmode", false);
    }
  }
}
