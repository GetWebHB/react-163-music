import React, { memo } from "react";
import Banner from "./cpns/Banner";

import RecommendWrapper from "./style";

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <Banner></Banner>
    </RecommendWrapper>
  );
});

export default Recommend;
