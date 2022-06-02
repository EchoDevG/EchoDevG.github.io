function checkDarkMode(){
  console.log("ran");
  var darkmode = getCookie("darkmode");
  console.log(darkmode);
if(darkmode!=""){
  if(darkmode==true)
  {
    document.getElementById("darkModeSwitch").checked = true;
    console.log("dark mode");
  }else {
    document.getElementById("darkModeSwitch").checked = false;
    console.log("light mode");
  }
}
};
