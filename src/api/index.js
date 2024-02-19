import Axios from "axios";

const BaseURL = Axios.create({
  baseURL: "https://mproduction.nomadictribe.com",
});
BaseURL.interceptors.request.use(async function (config) {
  // const token = localStorage.getItem("token");
  config.headers["Content-Type"] = "application/json";
  // if (token) {
  //   config.headers["Authorization"] = token;
  // }
  return config;
});

export const fetchHomeData = async () => {
  return BaseURL.get(`/fetchHomePageData`);
};

export const fetchExplorePageData = async () => {
  return BaseURL.get(`/fetchExplorePageData`);
};

export const fetchProgramDetails = async (id) => {
  return BaseURL.get(`/fetchProgramDetails?programId=${id}`);
};