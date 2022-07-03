import axiosInstance from "../index";

export function getBannerList<T>() {
  return axiosInstance.get<T>("/banner");
}

export function getHotRecommendList<T>() {
  return axiosInstance.get<T>("/personalized", { params: { limit: 8 } });
}

// url: "/top/album",
