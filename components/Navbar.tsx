'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const items = [
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Experience', '/experience'],
  ['Education', '/education'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const path = usePathname();

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} className="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo">
          PND<span>.</span>
        </Link>

        <nav>
          {items.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={path === href ? 'active' : ''}
            >
              {name}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="talk">
          Let's Talk
        </Link>
      </div>
    </motion.header>
  );
}
