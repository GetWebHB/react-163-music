import { Redirect } from "react-router-dom";
import type { RouteConfig } from "react-router-config";

import Discover from "@/pages/Discover";
import Mine from "@/pages/Mine";
import Attention from "@/pages/Attention";
import Download from "@/pages/Download";

import Recommend from "@/pages/Discover/components/Recommend";
import TopList from "@/pages/Discover/components/Toplist";
import PlayList from "@/pages/Discover/components/Playlist";
import DjRadio from "@/pages/Discover/components/Djradio";
import ArtList from "@/pages/Discover/components/Artist";
import Album from "@/pages/Discover/components/Album";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: "/discover/recommend", component: Recommend },
      { path: "/discover/toplist", component: TopList },
      { path: "/discover/playlist", component: PlayList },
      { path: "/discover/djradio", component: DjRadio },
      { path: "/discover/artist", component: ArtList },
      { path: "/discover/album", component: Album },
    ],
  },
  { path: "/my", component: Mine },
  { path: "/attention", component: Attention },
  { path: "/download", component: Download },
];

export default routes;
