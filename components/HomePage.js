import classes from "./HomePage.module.css";
import MastHead from "./ui/MastHead/MastHead";
import NavCard from "./ui/NavCard/NavCard";

function HomePage() {
  const links = [
    { label: "Photos", icon: "pi pi-images", link: "/image-gallery" },
    { label: "Videos", icon: "pi pi-video", link: "/video-gallery" },
    { label: "Reach Out", icon: "pi pi-phone", link: "/contact" },
  ];

  return (
    <div className={classes.heroImage}>
      <MastHead></MastHead>
      <div className={classes.links}>
        {links.map((l) => (
          <NavCard
            label={l.label}
            icon={l.icon}
            link={l.link}
            key={l.link}
          ></NavCard>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
