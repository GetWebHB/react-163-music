import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getBanner } from "@/store/discover/recommend/actions";
import RecommendWrapper from "./style";

const Recommend = memo(() => {
  const dispatch = useDispatch();
  const recommend = useSelector(
    (state: any) => ({
      recommend: state.recommend,
    }),
    shallowEqual
  );

  useEffect(() => {
    getBanner()(dispatch);
  }, [dispatch]);

  return <RecommendWrapper>bannerList:</RecommendWrapper>;
});

export default Recommend;
