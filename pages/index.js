import { Fragment } from "react";
import HomePage from "../components/HomePage";
import SiteHead from "../components/SiteHead";
import TopNav from "../components/ui/TopNav/TopNav";

export default function Home() {
  return (
    <Fragment>
      <SiteHead />
      <TopNav></TopNav>
      <HomePage></HomePage>
    </Fragment>
  );
}
