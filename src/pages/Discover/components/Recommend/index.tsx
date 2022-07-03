import React, { memo } from "react";

import Banner from "./cpns/Banner";
import HotRecommend from "./cpns/HotRecommend";
import TopBar from "@/components/TopBar";

import { RecommendWrapper, RecommendContent } from "./style";
import NewAlbum from "./cpns/NewAlbum";

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <Banner />
      <RecommendContent className="flex justify-between wrap_980">
        <div className="content-left">
          <HotRecommend />
          <NewAlbum />
          <TopBar title="榜单" moreLink="/todo"></TopBar>
        </div>
        <div className="content-right">1</div>
      </RecommendContent>
    </RecommendWrapper>
  );
});

export default Recommend;
