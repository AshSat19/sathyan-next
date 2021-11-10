import { useState } from "react";
import Link from "next/link";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

import classes from "./TopNav.module.css";
import { useRouter } from "next/dist/client/router";

function TopNav() {
  const navItems = [
    {
      label: "Home",
      icon: "pi pi-home",
      route: "/",
    },
    {
      label: "Photos",
      icon: "pi pi-images",
      route: "/image-gallery",
    },
    {
      label: "Videos",
      icon: "pi pi-video",
      route: "/video-gallery",
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
      route: "/contact",
    },
  ];

  const router = useRouter();
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={
        "flex flex-row align-items-center justify-content-evenly " +
        classes.navContainer
      }
    >
      <Button
        icon="pi pi-bars"
        className="p-button-text p-button-lg"
        onClick={() => setShowNav(true)}
      />

      <Sidebar
        visible={showNav}
        fullScreen
        onHide={() => setShowNav(false)}
        className={classes.blackBG}
      >
        <div className="flex flex-column justify-content-between">
          {navItems.map((n) => (
            <Link href={n.route}>
              <Button
                icon={n.icon}
                label={n.label}
                className={
                  "p-button-text p-button-lg w-full" +
                  (router.pathname !== n.route ? " p-button-plain" : "")
                }
              />
            </Link>
          ))}
        </div>
      </Sidebar>
    </div>
  );
}
export default TopNav;
