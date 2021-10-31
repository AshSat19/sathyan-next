import { Image } from "primereact/image";
import { ScrollTop } from "primereact/scrolltop";

import classes from "./ImageGallery.module.css";

function ImageGallery() {
  const set1 = [
    "../../../assets/images/Faces/01.jpg",
    "../../../assets/images/Faces/02.jpg",
    "../../../assets/images/Faces/03.jpg",
    "../../../assets/images/Interiors/01.jpg",
    "../../../assets/images/Faces/04.jpg",
    "../../../assets/images/Faces/05.jpg",
  ];
  const set2 = [
    "../../../assets/images/Food/01.jpg",
    "../../../assets/images/Food/02.jpg",
    "../../../assets/images/Food/03.jpg",
    "../../../assets/images/Interiors/04.jpg",
    "../../../assets/images/Food/04.jpg",
    "../../../assets/images/Food/05.jpg",
  ];
  const set3 = [
    "../../../assets/images/Interiors/02.jpg",
    "../../../assets/images/Interiors/03.jpg",
    "../../../assets/images/Interiors/05.jpg",
    "../../../assets/images/Interiors/06.jpg",
    "../../../assets/images/Interiors/07.jpg",
    "../../../assets/images/Interiors/08.jpg",
  ];
  const set4 = [
    "../../../assets/images/Landscape/01.jpg",
    "../../../assets/images/Landscape/02.jpg",
    "../../../assets/images/Landscape/03.jpg",
    "../../../assets/images/Landscape/04.jpg",
    "../../../assets/images/Landscape/05.jpg",
    "../../../assets/images/Landscape/06.jpg",
  ];

  return (
    <div className={classes.galleryRow}>
      <div className={classes.galleryColumn}>
        {set1.map((i) => (
          <Image width="100%" src={i} key={i} preview="true" />
        ))}
      </div>
      <div className={classes.galleryColumn}>
        {set2.map((i) => (
          <Image width="100%" src={i} key={i} preview="true" />
        ))}
      </div>
      <div className={classes.galleryColumn}>
        {set3.map((i) => (
          <Image width="100%" src={i} key={i} preview="true" />
        ))}
      </div>
      <div className={classes.galleryColumn}>
        {set4.map((i) => (
          <Image width="100%" src={i} key="{i}" preview="true" />
        ))}
      </div>
      <ScrollTop threshold={100} />
    </div>
  );
}

export default ImageGallery;
