import { getBannerList, getHotRecommendList } from "@/services/discover";
import { CHANGE_BANNER_LIST, CHANGE_HOT_RECOMMEND_LIST } from "./constant";
import {
  IBannerList,
  IBannerData,
  IHotRecommendData,
  IHotRecommendList,
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
