import axiosInstance from "../index";

export function getBannerList<T>() {
  return axiosInstance.get<T>("/banner");
}
