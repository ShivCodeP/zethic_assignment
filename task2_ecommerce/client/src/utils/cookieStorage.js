import Cookies from "js-cookie"

const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const savetoken = (token) => {
    Cookies.set("token",token)
}

const getToken = () => {
    return Cookies.get("token");
}

const removeToken = () => {
    Cookies.remove("token");
}

export { loadData, saveData,savetoken,getToken,removeToken };
