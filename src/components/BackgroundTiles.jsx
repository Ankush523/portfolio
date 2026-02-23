import { useState, useEffect, useMemo } from 'react';
import './BackgroundTiles.css';

const TILE_SIZE = 170;
const GAP = 6;
const CELL = TILE_SIZE + GAP;

export default function BackgroundTiles() {
  const [size, setSize] = useState({ cols: 24, rows: 40 });

  useEffect(() => {
    const update = () => {
      setSize({
        cols: Math.ceil((window.innerWidth + CELL * 2) / CELL),
        rows: Math.ceil((window.innerHeight * 2.5 + CELL * 2) / CELL),
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const tiles = useMemo(() => {
    const list = [];
    for (let r = 0; r < size.rows; r++) {
      for (let c = 0; c < size.cols; c++) {
        list.push({ key: `${r}-${c}` });
      }
    }
    return list;
  }, [size.cols, size.rows]);

  return (
    <div className="bg-tiles" aria-hidden>
      <div
        className="bg-tiles__grid"
        style={{
          '--tile-size': `${TILE_SIZE}px`,
          '--tile-gap': `${GAP}px`,
          gridTemplateColumns: `repeat(${size.cols}, ${TILE_SIZE}px)`,
          gap: `${GAP}px`,
        }}
      >
        {tiles.map(({ key }) => (
          <div key={key} className="bg-tiles__tile" />
        ))}
      </div>
    </div>
  );
}
