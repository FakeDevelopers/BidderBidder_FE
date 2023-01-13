function saveAuthTokenToCookie(value) {
  document.cookie = `auth=${value}`;
}

function getAuthTokenFromCookie() {
  // return document.cookie.replace(/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/, '$1');
}

export {
  saveAuthTokenToCookie,
  getAuthTokenFromCookie,
}
