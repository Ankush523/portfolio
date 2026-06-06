export default function SectionTitle({ index, children }) {
  return (
    <div className="section-head">
      {index && <span className="section-head__index">{index}</span>}
      <h2 className="section-title">
        <span className="section-title__bracket">[</span>
        {children}
        <span className="section-title__bracket">]</span>
      </h2>
      <span className="section-head__rule" aria-hidden />
    </div>
  );
}
