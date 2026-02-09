import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiDisc } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import VHSFrame from './VHSFrame';
import TrackingSweep from './TrackingSweep';
import SectionSweep from './SectionSweep';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" className="section" ref={ref}>
      <SectionSweep />
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <FiDisc className="section__label-icon" aria-hidden /> TRACK 05
        </motion.p>
        <motion.h2
          className="section__title glitch"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.08 }}
        >
          CONTACT
        </motion.h2>

        <TrackingSweep>
        <VHSFrame rec time="END">
          <div className="contact__inner">
            <motion.p
              className="contact__line"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.15 }}
            >
              Have a project in mind?
            </motion.p>
            <motion.a
              href="mailto:ankush.ad050203@gmail.com"
              className="contact__email glitch"
              aria-label="Email ankush.ad050203@gmail.com"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.25 }}
            >
              <FiMail className="contact__email-icon" aria-hidden />
              ankush.ad050203@gmail.com
            </motion.a>
            <motion.div
              className="contact__links"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 28, delay: 0.35 }}
            >
              <a href="https://github.com/Ankush523" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="contact__link-icon" /> GITHUB
              </a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/ankush-dutta-920b5b202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="contact__link-icon" /> LINKEDIN
              </a>
              <span>·</span>
              <a href="tel:+916289944028" aria-label="Call +91 628 994 4028">
                <FiPhone className="contact__link-icon" /> +91 628 994 4028
              </a>
              <span>·</span>
              <span className="contact__location">
                <FiMapPin className="contact__link-icon" /> KOLKATA, INDIA
              </span>
            </motion.div>
          </div>
        </VHSFrame>
        </TrackingSweep>
      </div>
    </section>
  );
}
