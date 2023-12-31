import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
