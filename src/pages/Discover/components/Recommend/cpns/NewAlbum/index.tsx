import React, { memo, useEffect, useRef } from "react";
import type { Record } from "immutable";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getNewAlbum } from "@/store/discover/recommend/actions";
import { INewAlbumList } from "@/store/discover/types";
import { Carousel } from "antd";
import TopBar from "@/components/TopBar";
import AlbumCover from "@/components/AlbumCover";
import type { CarouselRef } from "antd/lib/carousel";
import NewAlbumWrapper from "./style";

const NewAlbum = memo(() => {
  const dispatch = useDispatch();
  const { newAlbumList } = useSelector(
    (state) => ({
      newAlbumList: (state as Record<any>).getIn(["recommend", "newAlbumList"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!(newAlbumList as any[]).length) {
      dispatch<any>(getNewAlbum({ limit: 10, offset: 0 }));
    }
  }, [dispatch, newAlbumList]);

  const swiperRef = useRef<CarouselRef>(null);

  const prevAlbumList = () => {
    swiperRef.current?.prev();
  };
  const nextAlbumList = () => {
    swiperRef.current?.next();
  };

  return (
    <NewAlbumWrapper>
      <TopBar title="新碟上架" moreLink="/todo"></TopBar>
      <div className="album-content">
        <div className="album-wrap">
          <Carousel dots={false} ref={swiperRef}>
            {[0, 1].map((item) => {
              return (
                <ul className="swiper-album" key={item}>
                  {(newAlbumList as [])
                    .slice(item * 5, (item + 1) * 5)
                    .map((iten: INewAlbumList) => {
                      return (
                        <AlbumCover
                          key={iten.id}
                          imgUrl={iten.blurPicUrl}
                          tit={iten.company}
                          author={iten.name}
                        />
                      );
                    })}
                </ul>
              );
            })}
          </Carousel>
        </div>

        <div
          className="absolute btns-play-icon-sprite arrow arrow-left"
          onClick={() => prevAlbumList()}
        ></div>
        <div
          className="absolute  btns-play-icon-sprite  arrow arrow-right"
          onClick={() => nextAlbumList()}
        ></div>
      </div>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
