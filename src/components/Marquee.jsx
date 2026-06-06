const items = [
  'BLUETOOTH MESH',
  'P2P',
  'OFFLINE-FIRST',
  'NYU MS CS',
  'RAG',
  'LLM AGENTS',
  'REACT NATIVE',
  '10K+ ANDROID',
  'ETHINDIA 2022',
  'VELTO',
  'PLAYWRIGHT',
  'PASSKEYS',
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
