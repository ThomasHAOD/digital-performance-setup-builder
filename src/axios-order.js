import axios from "axios";

const instance = axios.create({
  baseURL: "https://digital-dj-setup-builder-b-e.firebaseio.com/"
});

export default instance;
