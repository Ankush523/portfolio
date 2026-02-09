import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

const TextScramble = ({ text, className = '', delay = 0, as: Tag = 'span' }) => {
  const [display, setDisplay] = useState('');
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    let frame = 0;
    const totalFrames = text.length + 15;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        const result = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (frame - 5 > i) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        setDisplay(result);
        frame++;
        if (frame > totalFrames) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, text, delay]);

  return (
    <Tag ref={ref} className={className}>
      {display || '\u00A0'}
    </Tag>
  );
};

export default TextScramble;
