import React, { memo, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";
import { getBanner } from "@/store/discover/recommend/actions";

import type { CarouselRef } from "antd/lib/carousel";
import type { Record } from "immutable";
import type { IBannerList } from "@/store/discover/types";

import BannerWrapper from "./style";

const Banner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const { bannerList }: any = useSelector(
    (state: any) => ({
      bannerList: (state as Record<any>).getIn(["recommend", "bannerList"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!(bannerList as []).length) {
      getBanner()(dispatch);
    }
  }, [dispatch, bannerList]);
  const bannerRef = useRef<CarouselRef>(null);

  const nextSwitch = () => {
    bannerRef.current?.next();
  };
  const prevSwitch = () => {
    bannerRef.current?.prev();
  };

  const currentBgImage =
    bannerList[currentIndex] &&
    bannerList[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={currentBgImage}>
      <div className="flex justify-between wrap_980">
        <div className="swiper">
          <Carousel
            autoplay
            ref={bannerRef}
            beforeChange={(from, to) => {
              setCurrentIndex(to);
            }}
          >
            {(bannerList as []).map((item: IBannerList, index) => {
              return (
                <div className="swiper-item" key={item.imageUrl}>
                  <a className="block w-full h-full" href="#todo">
                    <img src={item.imageUrl} alt="swiper" />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="relative download-sprite download">
          <a className="block download-sprite" href="/download">
            下载客户端
          </a>
          <div className="absolute w-full download-tit bottom-0">
            <p className="text-center">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
        </div>
        <div
          className="arrows arrow-left banner-arrows-sprite"
          onClick={() => prevSwitch()}
        ></div>
        <div
          className="arrows arrow-right banner-arrows-sprite"
          onClick={() => nextSwitch()}
        ></div>
      </div>
    </BannerWrapper>
  );
});

export default Banner;
