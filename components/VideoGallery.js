import { ScrollTop } from "primereact/scrolltop";
import YouTube from "react-youtube";

import classes from "./VideoGallery.module.css";

function VideoGallery() {
  const videos1 = ["hTx_a9PC8p8", "LGBhDjwXDcI", "ubE7Ln5383c"];
  const videos2 = ["MJPrdfsH7r4", "-i47SQdoAoU", "V1FDls3YBm4"];
  const videos3 = ["jdqWu6lii0U", "IdHCdFU6XNA", "UodCT3FATww"];
  const videos4 = ["01Al1M41oQc", "gLcrdIDdgVk"];

  const opts = {};

  return (
    <div className={classes.galleryRow}>
      <div className={classes.galleryColumn}>
        {videos1.map((v) => (
          <YouTube
            videoId={v}
            key={v}
            className="w-full"
            containerClassName="w-full"
            opts={opts}
            onReady={_onReady}
          />
        ))}
      </div>
      <div className={classes.galleryColumn}>
        {videos2.map((v) => (
          <YouTube
            videoId={v}
            key={v}
            className="w-full"
            containerClassName="w-full"
            opts={opts}
            onReady={_onReady}
          />
        ))}
      </div>
      <div className={classes.galleryColumn}>
        {videos3.map((v) => (
          <YouTube
            videoId={v}
            key={v}
            className="w-full"
            containerClassName="w-full"
            opts={opts}
            onReady={_onReady}
          />
        ))}
      </div>
      <div className={classes.galleryColumn}>
        {videos4.map((v) => (
          <YouTube
            videoId={v}
            key={v}
            className="w-full"
            containerClassName="w-full"
            opts={opts}
            onReady={_onReady}
          />
        ))}
      </div>
      <ScrollTop threshold={100} />
    </div>
  );
}

function _onReady(event) {
  event.target.pauseVideo();
}

export default VideoGallery;
