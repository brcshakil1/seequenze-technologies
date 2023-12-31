import axios from "axios";

const instance = axios.create({
  baseURL: "https://seequenze-server-sigma.vercel.app/api/v1",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
