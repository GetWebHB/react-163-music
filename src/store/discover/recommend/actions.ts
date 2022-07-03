import {
  getBannerList,
  getHotRecommendList,
  getNewAlbumList,
  INewAlbumQuery,
} from "@/services/discover";
import {
  CHANGE_BANNER_LIST,
  CHANGE_HOT_RECOMMEND_LIST,
  CHANGE_NEW_ALBUM_LIST,
} from "./constant";
import {
  IBannerList,
  IBannerData,
  IHotRecommendData,
  IHotRecommendList,
  INewAlbumData,
  INewAlbumList,
} from "../types";

export const changeBannerAction = (bannerList: IBannerList[]) => ({
  type: CHANGE_BANNER_LIST,
  bannerList,
});

export const changeHotRecommendAction = (
  hotRecommendList: IHotRecommendList[]
) => ({
  type: CHANGE_HOT_RECOMMEND_LIST,
  hotRecommendList,
});

export const changeNewAlbumAction = (newAlbumList: INewAlbumList[]) => ({
  type: CHANGE_NEW_ALBUM_LIST,
  newAlbumList,
});

export function getBanner() {
  return (dispatch: any) => {
    getBannerList<IBannerData>().then(({ data }) => {
      dispatch(changeBannerAction(data.banners));
    });
  };
}

export function getHotRecommend() {
  return (dispatch: any) => {
    getHotRecommendList<IHotRecommendData>().then(({ data }) => {
      dispatch(changeHotRecommendAction(data.result));
    });
  };
}

export function getNewAlbum(params: INewAlbumQuery) {
  return (dispatch: any) => {
    getNewAlbumList<INewAlbumData>(params).then(({ data }) => {
      dispatch(changeNewAlbumAction(data.albums));
    });
  };
}
