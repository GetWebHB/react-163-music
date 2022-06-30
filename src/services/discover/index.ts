import axiosInstance from "../index";

export function getBannerList() {
  return axiosInstance.get("/banner");
}
