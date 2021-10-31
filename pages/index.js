import { Fragment } from "react";
import HomePage from "../components/HomePage";
import SiteHead from "../components/SiteHead";

export default function Home() {
  return (
    <Fragment>
      <SiteHead />
      <HomePage></HomePage>
    </Fragment>
  );
}
