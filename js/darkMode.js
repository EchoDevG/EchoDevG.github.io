function darkModeSwitched() {
  var checkBox = document.getElementById("darkModeSwitch");
  if (checkBox.checked == true){
    if (localStorage.getItem('cookieconsent')==true)
    {
      setCookie("darkmode", true);
    }
  } else {
    if (localStorage.getItem('cookieconsent')==true)
    {
      setCookie("darkmode", false);
    }
  }
}
