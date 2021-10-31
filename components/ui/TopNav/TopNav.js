import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { Button } from "primereact/button";

function TopNav() {
  const router = useRouter();

  return (
    <div className="flex flex-row align-items-center justify-content-evenly">
      <Link href="/">
        <Button
          icon="pi pi-home"
          className={
            (router.pathname == "/" ? "p-button-secondary" : "") +
            "p-button-text p-button-lg w-full"
          }
        />
      </Link>
      <Link href="/image-gallery" activeClassName="p-button-secondary">
        <Button
          icon="pi pi-images"
          className={
            (router.pathname == "/image-gallery" ? "p-button-secondary" : "") +
            "p-button-text p-button-lg w-full"
          }
        />
      </Link>
      <Link href="/video-gallery">
        <Button
          icon="pi pi-video"
          className={
            (router.pathname == "/video-gallery" ? "p-button-secondary" : "") +
            "p-button-text p-button-lg w-full"
          }
        />
      </Link>
      <Link href="/contact">
        <Button
          icon="pi pi-phone"
          className={
            (router.pathname == "/contact" ? "p-button-secondary" : "") +
            "p-button-text p-button-lg w-full"
          }
        />
      </Link>
    </div>
  );
}
export default TopNav;
