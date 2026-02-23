import { motion } from 'framer-motion';

/**
 * Hero graphic - dashboard-style card with teal glow (Uplinq style).
 */
export function HeroGraphic() {
  return (
    <motion.div
      className="hero__photo-wrap"
      initial={{ opacity: 0, x: 24, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.4 }}
    >
      <div className="hero__photo-frame">
        <div className="hero__photo-bar">
          <span className="hero__photo-rec">
            <span className="hero__photo-rec-dot" /> REC
          </span>
          <span className="hero__photo-time">00:00:00</span>
        </div>
        <div className="hero__photo-inner">
          <p className="hero__dashboard-greeting">Hi, I'm Ankush</p>
          <div className="hero__dashboard-tabs">
            <span>Dashboard</span>
            <span>Reports</span>
            <span>Activity</span>
          </div>
          <div className="hero__dashboard-metrics">
            <div className="hero__dashboard-metric">
              <span>Projects</span>
              <span>5+</span>
            </div>
            <div className="hero__dashboard-metric">
              <span>Users reached</span>
              <span>12K+</span>
            </div>
            <div className="hero__dashboard-metric">
              <span>Experience</span>
              <span>4+ yrs</span>
            </div>
            <div className="hero__dashboard-metric">
              <span>Hackathons</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Avatar with initials - used in About */
export function Avatar({ initials = 'AD', src = null, className = '' }) {
  return (
    <motion.div
      className={`hero__avatar ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
    >
      {src ? (
        <img src={src} alt="" width={120} height={120} />
      ) : (
        <span className="hero__avatar-initials">{initials}</span>
      )}
    </motion.div>
  );
}
