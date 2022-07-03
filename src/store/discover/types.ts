export interface IBannerData {
  banners: IBannerList[];
}

export interface IBannerList {
  imageUrl: string;
  targetId: number;
  adid?: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: any;
  exclusive: boolean;
  monitorImpress?: any;
  monitorClick?: any;
  monitorType?: any;
  monitorImpressList?: any;
  monitorClickList?: any;
  monitorBlackList?: any;
  extMonitor?: any;
  extMonitorInfo?: any;
  adSource?: any;
  adLocation?: any;
  adDispatchJson?: any;
  encodeId: string;
  program?: any;
  event?: any;
  video?: any;
  song?: any;
  scm: string;
}

export interface IHotRecommendData {
  result: IHotRecommendList[];
}
export interface IHotRecommendList {
  id: number;
  type: number;
  name: string;
  copywriter?: any;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}
