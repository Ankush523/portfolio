const items = [
  'FERNWEH',
  '10K+ DOWNLOADS',
  'LANGGRAPH',
  'RAG',
  'NYU MS CS',
  'REACT NATIVE',
  'FASTAPI',
  'EARNINGSPULSE',
  'PLAYWRIGHT',
  'CI/CD',
  'ETHINDIA 2022',
  'BLUETOOTH MESH',
  'FERNWEH',
  '10K+ DOWNLOADS',
  'LANGGRAPH',
  'RAG',
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
