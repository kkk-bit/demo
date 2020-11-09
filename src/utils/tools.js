export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(v) {
  return localStorage.setItem("token", v);
}
// 只需更改一次更改服务器地址
/* export const serverUrl = "http://192.168.11.207:3009"; */