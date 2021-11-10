import classes from "./MastHead.module.css";

function MastHead() {
  return (
    <div
      className={
        classes.mastText +
        " " +
        classes.animated +
        " " +
        classes.animatedFadeInUp +
        " " +
        classes.fadeInUp
      }
    >
      <h1 className={classes.mastTitle}>Sathian</h1>
      <div className={classes.mastSubtitleContainer}>
        <h2 className={classes.mastSubtitle}>Photographer | Videographer</h2>
      </div>
    </div>
  );
}

export default MastHead;
