function setCookie(cname, darkmode) {
  if(localStorage.getItem('cookieconsent'))
  {
  document.cookie = cname + '=' + darkmode + ' path=/;'
};
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// https://www.w3schools.com/js/js_cookies.asp  <= thank you very much w3schools