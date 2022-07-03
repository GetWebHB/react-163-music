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

export interface INewAlbumData {
  albums: INewAlbumList[];
}
export interface INewAlbumList {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  companyId: number;
  blurPicUrl: string;
  alias: any[];
  artists: IArtist[];
  copyrightId: number;
  picId: number;
  artist: IArtist2;
  picUrl: string;
  commentThreadId: string;
  publishTime: number;
  company: string;
  briefDesc: string;
  pic: number;
  tags: string;
  description: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}
export interface IArtist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  picId: number;
  picUrl: string;
  img1v1Url: string;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}
export interface IArtist2 {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  picId: number;
  picUrl: string;
  img1v1Url: string;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}
