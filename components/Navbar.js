import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <img src="/images/Logo.jpeg" alt="Website Logo" />
        </Link>
      </div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
