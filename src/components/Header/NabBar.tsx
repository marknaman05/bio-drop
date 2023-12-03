import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-3">
      <Link href="/">
        <span className="text-sm font-medium">Home</span>
      </Link>
      <Link href="/people">
        <span className="text-sm font-medium">People</span>
      </Link>
      <Link href="/about">
        <span className="text-sm font-medium">About</span>
      </Link>
    </nav>
  );
}