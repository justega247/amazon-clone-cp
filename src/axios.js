import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-cp-15021.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-cp-15021/us-central1/api",
});

export default instance;
