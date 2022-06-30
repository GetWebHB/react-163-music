import { getBannerList } from "@/services/discover";
import { BANNER_LIST } from "./constant";
import { IBannerList } from "../types";

export const changeBannerAction = (bannerList: IBannerList[]) => ({
  type: BANNER_LIST,
  bannerList,
});

export function getBanner() {
  return (dispatch: any) => {
    getBannerList().then((res: any) => {
      dispatch(changeBannerAction(res?.banners));
    });
  };
}

export {};
