import type { RouteConfig } from "react-router-config";

import Home from "@/pages/Home";
import Mine from "@/pages/Mine";
import Attention from "@/pages/Attention";
import Download from "@/pages/Download";

const routes: RouteConfig[] = [
  { component: Home, path: "/", exact: true },
  { component: Mine, path: "/my" },
  { component: Attention, path: "/attention" },
  { component: Download, path: "/download" },
];

export default routes;
