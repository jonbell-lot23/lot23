import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const pages = ["talks", "writing", "work", "projects"];
  const navitems = pages.map((page) => (
    <div>
      <Nav page={page} />
    </div>
  ));

  const router = useRouter();

  return (
    <div className="px-4 mx-auto mt-8 w-80">
      <div className="fixed left-4">
        {router.pathname !== "/" ? <HomeLink page="home" /> : null}
      </div>
      <div className="flex flex-wrap space-x-0">{navitems}</div>
    </div>
  );
}

export function Nav({ page }) {
  const router = useRouter();
  const currentPath = router.asPath;
  const link = `/${page}`;

  const img = currentPath == link ? `/${page}_highlight.png` : `/${page}.png`;
  const highlight = `${page}_highlight.png`.toString();

  return (
    <Link href={link}>
      <img
        src={img}
        className="header"
        onMouseOver={(e) => (e.currentTarget.src = highlight)}
        onMouseOut={(e) => (e.currentTarget.src = img)}
      />
    </Link>
  );
}

export function HomeLink({ page }) {
  const router = useRouter();
  const currentPath = router.asPath;
  const link = `/`;

  const img = currentPath == link ? `/${page}_highlight.png` : `/${page}.png`;
  const highlight = `${page}_highlight.png`.toString();

  return (
    <Link href={link}>
      <img
        src={img}
        className="header"
        onMouseOver={(e) => (e.currentTarget.src = highlight)}
        onMouseOut={(e) => (e.currentTarget.src = img)}
      />
    </Link>
  );
}
