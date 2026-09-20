'use client';

import { motion } from 'framer-motion';

export default function PageHero({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="page-hero">
      <div className="glow" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="eyebrow">✦ {kicker}</div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </motion.div>
      </div>
    </section>
  );
}
