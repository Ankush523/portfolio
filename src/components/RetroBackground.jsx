import './RetroBackground.css';

export default function RetroBackground() {
  return (
    <div className="retro-bg" aria-hidden="true">
      {/* Grid - TV test pattern style */}
      <div className="retro-bg__grid" />
      {/* Vignette - CRT edges */}
      <div className="retro-bg__vignette" />
      {/* Floating decorative elements */}
      <div className="retro-bg__shape retro-bg__shape--1">REC</div>
      <div className="retro-bg__shape retro-bg__shape--2">VHS</div>
      <div className="retro-bg__shape retro-bg__shape--3">▶</div>
      <div className="retro-bg__shape retro-bg__shape--4">TRACK</div>
      <div className="retro-bg__shape retro-bg__shape--5">STEREO</div>
      <div className="retro-bg__shape retro-bg__shape--6">PLAY</div>
      <div className="retro-bg__shape retro-bg__shape--7">HI-FI</div>
      {/* Corner brackets / frame */}
      <div className="retro-bg__corner retro-bg__corner--tl" />
      <div className="retro-bg__corner retro-bg__corner--tr" />
      <div className="retro-bg__corner retro-bg__corner--bl" />
      <div className="retro-bg__corner retro-bg__corner--br" />
      {/* Large diagonal bars */}
      <div className="retro-bg__bar retro-bg__bar--1" />
      <div className="retro-bg__bar retro-bg__bar--2" />
    </div>
  );
}
