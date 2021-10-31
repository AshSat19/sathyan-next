import { Fragment } from "react";
import SiteHead from "../components/SiteHead";
import TopNav from "../components/ui/TopNav/TopNav";
import VideoGallery from "../components/VideoGallery";

function VideoGalleryPage() {
  return (
    <Fragment>
      <SiteHead title="Videos" />
      <TopNav></TopNav>
      <VideoGallery></VideoGallery>
    </Fragment>
  );
}

export default VideoGalleryPage;
