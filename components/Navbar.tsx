'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const items = [
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Experience', '/experience'],
  ['Education', '/education'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} className="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo">
          PND<span>.</span>
        </Link>

        <nav className={menuOpen ? 'open' : ''}>
          {items.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={path === href ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="talk">
          Let's Talk
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.header>
  );
}
