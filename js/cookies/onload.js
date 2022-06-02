function checkDarkMode(){
  var darkmode = getCookie("darkmode");
if(darkmode!=""){
  if(darkmode == "true")
  {
    document.getElementById("darkModeSwitch").checked = true;
  }else {
    document.getElementById("darkModeSwitch").checked = false;
  }
}
};
