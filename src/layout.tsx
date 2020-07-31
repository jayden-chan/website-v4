import Home from "./pages/Home";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import About from "./pages/About";
import Cheat from "./pages/Cheat";
import Valorant from "./pages/Valorant";
import { Page } from "./generator";

export const SITE_LAYOUT: Page = {
  relativePath: "/",
  title: "Jayden Chan",
  template: "landing",
  component: Home,
  subpages: [
    {
      relativePath: "resume/",
      title: "Resume - Jayden Chan",
      template: "resume",
      component: Resume,
      subpages: [],
    },
    {
      relativePath: "coverletter/",
      title: "Cover Letter",
      template: "resume",
      component: CoverLetter,
      subpages: [],
    },
    {
      relativePath: "about/",
      title: "About - Jayden Chan",
      template: "about",
      component: About,
      subpages: [],
    },
    {
      relativePath: "cheat/",
      title: "Cheatsheet",
      template: "cheat",
      component: Cheat,
      subpages: [],
    },
    {
      relativePath: "valorant/",
      title: "Valorant Logs",
      template: "valorant",
      component: Valorant,
      subpages: [],
    },
  ],
};
