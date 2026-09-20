'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export default function Home() {
  return (
    <section className="hero">
      <div className="glow" />

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">✦ INSTRUCTIONAL DESIGN MANAGER</div>

          <h1>
            Prajwal <span>N D</span>
          </h1>

          <p>
            Creating <strong>simple, visually appealing learning experiences</strong>{' '}
            for learners and businesses.
          </p>

          <div className="actions">
            <Link href="/about" className="btn primary">
              Explore Portfolio <ArrowRight size={17} />
            </Link>

            <a href="/Prajwal-ND-Resume.pdf" download className="btn ghost">
              <Download size={17} /> Download CV
            </a>
          </div>
        </motion.div>

        <div className="stat-row">
          <div className="stat">
            <strong>10+</strong>
            <span>Years across learning & development</span>
          </div>

          <div className="stat">
            <strong>4</strong>
            <span>Organizations across varied domains</span>
          </div>

          <div className="stat">
            <strong>8+</strong>
            <span>Core design & authoring skills</span>
          </div>
        </div>
      </div>
    </section>
  );
}
