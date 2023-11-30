import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Work</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}