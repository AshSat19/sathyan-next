import classes from "./HomePage.module.css";
import MastHead from "./ui/MastHead/MastHead";

function HomePage() {
  return (
    <div className={classes.heroImage}>
      <MastHead></MastHead>
    </div>
  );
}

export default HomePage;
