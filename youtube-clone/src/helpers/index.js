import axios from "axios";
import { options } from "../constants";

axios.defaults.baseURL = "https://youtube138.p.rapidapi.com";

// parametee olarak url alıp
// istek atar
// verileri fonksiyonun çağrıldığı yere yönlendirir
export const getData = async (url) => {
  try {
    const res = await axios.get(url, options);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};