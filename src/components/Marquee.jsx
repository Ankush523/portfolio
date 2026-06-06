const items = [
  'BLUETOOTH MESH',
  'P2P',
  'OFFLINE-FIRST',
  'E2E ENCRYPTION',
  'REACT NATIVE',
  'WEB3',
  '12K+ USERS',
  'ETHINDIA WINNER',
  'PLAYWRIGHT',
  'VELTO',
  'BLUETOOTH MESH',
  'P2P',
  'OFFLINE-FIRST',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
