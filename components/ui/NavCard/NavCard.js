import Link from "next/link";

import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import classes from "./NavCard.module.css";

function NavCard(props) {
  return (
    <Link href={props.link}>
      <div className={classes.navCard}>
        <div className={classes.navButton}>
          <Button
            type="button"
            icon={props.icon}
            className="p-button-rounded p-button-outlined p-button-lg"
          ></Button>
        </div>
        <Avatar
          icon={props.icon}
          className={classes.navLabel}
          size="xlarge"
          style={{ backgroundColor: "transparent" }}
        />
        <h1 className={classes.navLabel}>{props.label}</h1>
      </div>
    </Link>
  );
}

export default NavCard;
