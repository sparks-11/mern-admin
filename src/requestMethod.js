import axios from "axios";

const fetchToken = () => {
  if (JSON.parse(localStorage.getItem("persist:root"))) {
    return((JSON.parse((JSON.parse(localStorage.getItem("persist:root"))).user).currentUser).token)
  } else {
    return ("")
  }
}
const BASE_URL = "https://e-com-server-side.herokuapp.com/api";

const TOKEN = fetchToken()



console.log(TOKEN)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

