import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Record } from "immutable";

import { getBanner } from "@/store/discover/recommend/actions";
import RecommendWrapper from "./style";

const Recommend = memo(() => {
  //1.state
  //2.redux
  const dispatch = useDispatch();
  const { bannerList } = useSelector(
    (state: any) => ({
      bannerList: (state as Record<any>).getIn(["recommend", "bannerList"]),
    }),
    shallowEqual
  );

  //3.其他hooks
  useEffect(() => {
    getBanner()(dispatch);
  }, [dispatch]);

  //3.业务代码
  console.log(bannerList, `bannerList`);

  return <RecommendWrapper>bannerList:</RecommendWrapper>;
});

export default Recommend;
