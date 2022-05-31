function checkDarkMode(){
  var darkmode = getCookie("darkmode");
if(darkmode!=""){
  if(darkmode==true)
  {
    //dark Mode
    console.log("dark mode");
  }else {
    //light mode
    console.log("light mode");
  }
}


};
