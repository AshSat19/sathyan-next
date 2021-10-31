import { Fragment } from "react";
import ImageGallery from "../components/ImageGallery";
import SiteHead from "../components/SiteHead";
import TopNav from "../components/ui/TopNav/TopNav";

function ImageGalleryPage() {
  return (
    <Fragment>
      <SiteHead title="Photos" />
      <TopNav></TopNav>
      <ImageGallery></ImageGallery>
    </Fragment>
  );
}

export default ImageGalleryPage;
