import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import type { Record } from "immutable";

import { getHotRecommend } from "@/store/discover/recommend/actions";
import { IHotRecommendList } from "@/store/discover/types";

import TopBar from "@/components/TopBar";
import AlbumCover from "@/components/AlbumCover";
import HotRecommendWrapper from "./style";

const HotRecommend = memo(() => {
  const dispatch = useDispatch();
  const { hotRecommendList } = useSelector(
    (state) => ({
      hotRecommendList: (state as Record<any>).getIn([
        "recommend",
        "hotRecommendList",
      ]),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!(hotRecommendList as any[]).length) {
      getHotRecommend()(dispatch);
    }
  }, [dispatch, hotRecommendList]);

  return (
    <HotRecommendWrapper>
      <TopBar
        title="热门推荐"
        navList={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/todo"
      ></TopBar>
      <div className="flex justify-between flex-wrap content mt-5">
        {(hotRecommendList as IHotRecommendList[]).map((item, index) => {
          return (
            <AlbumCover
              key={item.id}
              imgUrl={item.picUrl}
              lisNum={item.playCount}
              dec={item.name}
              style={{ marginBottom: "30px" }}
            ></AlbumCover>
          );
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
