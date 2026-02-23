import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiUsers, FiBriefcase, FiAward, FiTarget } from 'react-icons/fi';
import { Avatar } from './HeroVisual';
import './About.css';

function Counter({ to, suffix = '' }) {
  const v = useMotionValue(0);
  const display = useTransform(v, (n) =>
    (Number.isInteger(to) ? Math.round(n) : n.toFixed(2)) + suffix
  );
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  useEffect(() => {
    if (inView) animate(v, to, { duration: 2, ease: 'easeOut' });
  }, [inView, v, to]);
  return <motion.span ref={ref} className="about__num">{display}</motion.span>;
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const stats = [
    { to: 12, suffix: 'K+', label: 'Users week 1', Icon: FiUsers },
    { to: 4, suffix: '', label: 'Companies', Icon: FiBriefcase },
    { to: 9.66, suffix: '', label: 'CGPA', Icon: FiAward },
    { to: 3, suffix: '', label: 'Hackathons', Icon: FiTarget },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Why work with me
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.06 }}
        >
          <span className="section__title--gradient">About</span>
        </motion.h2>

        <div className="about__box-wrap">
          <motion.div
            className="about__card card"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.1 }}
          >
          <div className="about__intro">
            <Avatar initials="AD" className="about__avatar" />
            <p className="about__lead">
              I build systems that work in the hardest conditions — no internet, no problem.
            </p>
          </div>
          <div className="about__cols">
            <p className="about__p">
              At <span className="about__hi">Offline Protocol</span> I built a P2P messaging app that hit 12,000+ users in a week on Bluetooth Mesh. I architect full mobile stacks: networking, E2E encryption, local persistence, secure peer discovery.
            </p>
            <p className="about__p">
              Before that: cross-chain notification systems, decentralized identity SDKs, smart contract marketplaces. Graduated <span className="about__hi">SRM IST</span> with 9.66 CGPA (AI/ML). Won <span className="about__hi">ETHIndia</span> & <span className="about__hi">ETHforAll</span>.
            </p>
          </div>
          <div className="about__stats">
            {stats.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={i}
                  className="about__stat"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.2 + i * 0.06 }}
                >
                  <span className="about__stat-icon" aria-hidden>
                    <Icon />
                  </span>
                  <Counter to={s.to} suffix={s.suffix} />
                  <span>{s.label}</span>
                </motion.div>
              );
            })}
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
