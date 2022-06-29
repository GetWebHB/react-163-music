import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./router";

import Footer from "./components/Footer";
import Header from "./components/Header";

const App = memo(function () {
  return (
    <div className="App">
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </div>
  );
});

export default App;
