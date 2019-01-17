export function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires='+d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

export function checkCookie() {
  let user = getCookie('token');
  if (user != '') {
    return user;
  } else {
    return null;
  }
}

export function deleteCookies() {
  console.log(getCookie('token'));
  let token = getCookie('token');

  document.cookie = token + '=; Max-Age=-99999999;';
  // document.cookie = getCookie('role') + '=; Max-Age=-99999999;';
  console.log(getCookie('token'));
}