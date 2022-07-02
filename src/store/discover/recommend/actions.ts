import { getBannerList } from "@/services/discover";
import { CHANGE_BANNER_LIST } from "./constant";
import { IBannerList, IBannerData } from "../types";

export const changeBannerAction = (bannerList: IBannerList[]) => ({
  type: CHANGE_BANNER_LIST,
  bannerList,
});

export function getBanner() {
  return (dispatch: any) => {
    getBannerList<IBannerData>().then(({ data }) => {
      dispatch(changeBannerAction(data.banners));
    });
  };
}

export {};
