import axiosInstance from "../index";

export function getBannerList<T>() {
  return axiosInstance.get<T>("/banner");
}

export function getHotRecommendList<T>() {
  return axiosInstance.get<T>("/personalized", { params: { limit: 8 } });
}

export function getNewAlbumList<T>(params: INewAlbumQuery) {
  return axiosInstance.get<T>("/top/album", { params });
}

export interface INewAlbumQuery {
  limit?: number;
  offset?: number;
}
