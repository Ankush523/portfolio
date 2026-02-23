import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Let's build something
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.06 }}
        >
          Get in touch
        </motion.h2>

        <motion.div
          className="contact__card card"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.12 }}
        >
          <div className="contact__row">
            <span className="contact__icon" aria-hidden>
              <FiMail />
            </span>
            <h3 className="contact__heading">Get in touch</h3>
          </div>
          <div className="contact__detail">
            <p className="contact__line">Have a project in mind or want to chat?</p>
            <a
              href="mailto:ankush.ad050203@gmail.com"
              className="contact__email"
              aria-label="Email ankush.ad050203@gmail.com"
            >
              <FiMail className="contact__email-icon" />
              ankush.ad050203@gmail.com
            </a>
            <div className="contact__links">
              <a href="https://github.com/Ankush523" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="contact__link-icon" /> GitHub
              </a>
              <span className="contact__sep">·</span>
              <a href="https://www.linkedin.com/in/ankush-dutta-920b5b202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="contact__link-icon" /> LinkedIn
              </a>
              <span className="contact__sep">·</span>
              <a href="tel:+916289944028" aria-label="Call +91 628 994 4028">
                +91 628 994 4028
              </a>
            </div>
            <a href="mailto:ankush.ad050203@gmail.com" className="contact__btn btn-primary">
              Send an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
