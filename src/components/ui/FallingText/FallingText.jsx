'use client';

import { Fragment, useEffect, useMemo, useRef } from 'react';
import Matter from 'matter-js';
import './FallingText.css';

const THEMES = {
  dark: {
    '--falling-text-tile': 'linear-gradient(180deg, #3a3644 0%, #27242f 100%)',
    '--falling-text-tile-edge': 'rgba(255,255,255,0.07)',
    '--falling-text-tile-highlight': 'rgba(255,255,255,0.12)',
    '--falling-text-tile-shadow': '0 4px 10px -4px rgba(0,0,0,0.7)',
    '--falling-text-tile-ink': '#f4f4f5',
  },
  light: {
    '--falling-text-tile': 'linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)',
    '--falling-text-tile-edge': 'rgba(24,24,27,0.08)',
    '--falling-text-tile-highlight': 'rgba(255,255,255,1)',
    '--falling-text-tile-shadow': '0 4px 10px -5px rgba(24,24,27,0.25)',
    '--falling-text-tile-ink': '#27272a',
  },
};

const STEP = 1000 / 120;
const WALL = 400;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const FallingText = ({
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  trigger = 'auto',
  variant = 'text',
  split = 'words',
  gravity = 1,
  bounciness = 0.2,
  scatter = 0.5,
  stagger = 0.03,
  order = 'random',
  draggable = true,
  mouseConstraintStiffness = 0.2,
  cursorPush = 0.5,
  restoreDelay = 0,
  fontSize = '1rem',
  accentColor = '#b78b4a',
  theme = 'light',
  backgroundColor = 'transparent',
  wireframes = false,
  className = '',
  style,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const settingsRef = useRef({});
  settingsRef.current = {
    trigger, gravity, bounciness, scatter, stagger,
    order, draggable, mouseConstraintStiffness,
    cursorPush, restoreDelay,
  };

  const highlightKey = highlightWords.join('\u0000');
  const groups = useMemo(() => {
    const marks = highlightKey ? highlightKey.split('\u0000') : [];
    return String(text)
      .split(/\s+/)
      .filter(Boolean)
      .map(word => ({
        word,
        highlighted: marks.some(entry => entry && word.startsWith(entry)),
      }));
  }, [text, highlightKey]);

  useEffect(() => {
    const container = containerRef.current;
    const block = textRef.current;
    if (!container || !block) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let engine = null;
    let pieces = [];
    let walls = [];
    let raf = 0;
    let phase = 'idle';
    let last = 0;
    let clock = 0;
    let accumulator = 0;
    let quietSince = null;
    let inside = false;
    let visible = true;
    let armed = true;

    const placeWalls = () => {
      if (!engine) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const [floor, left, right, ceiling] = walls;
      Matter.Body.setPosition(floor, { x: width / 2, y: height + WALL / 2 });
      Matter.Body.setPosition(left, { x: -WALL / 2, y: height / 2 });
      Matter.Body.setPosition(right, { x: width + WALL / 2, y: height / 2 });
      Matter.Body.setPosition(ceiling, { x: width / 2, y: -WALL / 2 });
    };

    const reset = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (engine) {
        Matter.Composite.clear(engine.world, false);
        Matter.Engine.clear(engine);
      }
      engine = null;
      for (const piece of pieces) {
        piece.element.getAnimations().forEach(a => a.cancel());
        Object.assign(piece.element.style, {
          position: '', left: '', top: '', width: '', height: '', margin: '', transform: '',
        });
      }
      pieces = [];
      walls = [];
      block.style.minHeight = '';
      phase = 'idle';
      quietSince = null;
      delete container.dataset.phase;
      delete container.dataset.dragging;
    };

    const restore = () => {
      if (phase !== 'falling') return;
      phase = 'restoring';
      container.dataset.phase = 'restoring';
      cancelAnimationFrame(raf);
      raf = 0;
      const animations = pieces.map((piece, index) => {
        const body = piece.body;
        const from = 'translate3d(' + (body.position.x - piece.w / 2) + 'px, ' + (body.position.y - piece.h / 2) + 'px, 0) rotate(' + body.angle + 'rad)';
        const to = 'translate3d(' + piece.x0 + 'px, ' + piece.y0 + 'px, 0)';
        piece.element.style.transform = to;
        return piece.element.animate(
          [{ transform: from }, { transform: to }],
          { duration: 760, delay: Math.min(index * 14, 360), easing: 'cubic-bezier(0.34,1.4,0.64,1)', fill: 'backwards' }
        );
      });
      Promise.all(animations.map(a => a.finished.catch(() => null))).then(() => {
        if (phase === 'restoring') reset();
      });
    };

    const frame = now => {
      raf = 0;
      if (!engine || !visible) return;
      const dt = Math.min(0.05, last ? (now - last) / 1000 : 1 / 60);
      last = now;
      clock += dt;
      const s = settingsRef.current;
      engine.gravity.y = clamp(s.gravity, -3, 4) * 1.4;
      for (const piece of pieces) {
        if (!piece.released && clock >= piece.at) {
          piece.released = true;
          Matter.Body.setStatic(piece.body, false);
          Matter.Body.setVelocity(piece.body, {
            x: (Math.random() - 0.5) * 6 * s.scatter,
            y: -Math.random() * 2.5 * s.scatter,
          });
          Matter.Body.setAngularVelocity(piece.body, (Math.random() - 0.5) * 0.12 * s.scatter);
        }
      }
      accumulator += dt * 1000;
      while (accumulator >= STEP) {
        Matter.Engine.update(engine, STEP);
        accumulator -= STEP;
      }
      for (const piece of pieces) {
        const body = piece.body;
        piece.element.style.transform =
          'translate3d(' + (body.position.x - piece.w / 2) + 'px, ' + (body.position.y - piece.h / 2) + 'px, 0) rotate(' + body.angle + 'rad)';
      }
      const settled = pieces.every(p => p.released && (p.body.isSleeping || p.body.speed < 0.05));
      if (s.restoreDelay > 0 && settled && !inside) {
        quietSince = quietSince ?? now;
        if (now - quietSince > s.restoreDelay * 1000) { restore(); return; }
      } else {
        quietSince = null;
      }
      raf = requestAnimationFrame(frame);
    };

    const fall = () => {
      if (phase !== 'idle' || reduced) return;
      const elements = [...block.querySelectorAll('[data-piece]')];
      if (!elements.length) return;
      const box = container.getBoundingClientRect();
      const rects = elements.map(el => {
        const rect = el.getBoundingClientRect();
        return { x: rect.left - box.left, y: rect.top - box.top, w: rect.width, h: rect.height };
      });
      block.style.minHeight = block.offsetHeight + 'px';
      engine = Matter.Engine.create({ enableSleeping: true });
      engine.gravity.y = gravity * 1.4;
      walls = [
        Matter.Bodies.rectangle(0, 0, 10000, WALL, { isStatic: true }),
        Matter.Bodies.rectangle(0, 0, WALL, 10000, { isStatic: true }),
        Matter.Bodies.rectangle(0, 0, WALL, 10000, { isStatic: true }),
        Matter.Bodies.rectangle(0, 0, 10000, WALL, { isStatic: true }),
      ];
      pieces = elements.map((element, index) => {
        const rect = rects[index];
        const body = Matter.Bodies.rectangle(
          rect.x + rect.w / 2, rect.y + rect.h / 2,
          Math.max(2, rect.w - 1), Math.max(2, rect.h - 1),
          { isStatic: true, restitution: bounciness, friction: 0.4, frictionAir: 0.012 }
        );
        Object.assign(element.style, {
          position: 'absolute', left: '0', top: '0',
          width: rect.w + 'px', height: rect.h + 'px', margin: '0',
          transform: 'translate3d(' + rect.x + 'px, ' + rect.y + 'px, 0)',
        });
        return { element, body, w: rect.w, h: rect.h, x0: rect.x, y0: rect.y, at: index * stagger, released: false };
      });
      Matter.Composite.add(engine.world, [...walls, ...pieces.map(p => p.body)]);
      placeWalls();
      phase = 'falling';
      container.dataset.phase = 'falling';
      clock = 0; last = 0;
      raf = requestAnimationFrame(frame);
    };

    const onEnter = () => { inside = true; if (trigger === 'hover') fall(); };
    const onLeave = () => { inside = false; };
    const onClick = () => { if (trigger === 'click') fall(); };

    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      visible = entry.isIntersecting;
      if (trigger === 'scroll' && entry.intersectionRatio >= 0.3 && armed) {
        armed = false; fall();
      }
    }, { threshold: [0, 0.3] });
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      if (phase === 'falling') placeWalls();
    });
    resizeObserver.observe(container);

    container.addEventListener('pointerenter', onEnter);
    container.addEventListener('pointerleave', onLeave);
    container.addEventListener('click', onClick);

    if (trigger === 'auto') {
      const ready = document.fonts ? document.fonts.ready : Promise.resolve();
      ready.then(() => requestAnimationFrame(fall));
    }

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('pointerenter', onEnter);
      container.removeEventListener('pointerleave', onLeave);
      container.removeEventListener('click', onClick);
      reset();
    };
  }, [groups, split, variant, fontSize, trigger]);

  const pieceClass = 'falling-text__piece' + (variant === 'tiles' ? ' falling-text__piece--tile' : '');

  return (
    <div
      ref={containerRef}
      className={'falling-text' + (wireframes ? ' falling-text--wireframes' : '') + (className ? ' ' + className : '')}
      data-trigger={trigger}
      data-draggable={draggable ? '' : undefined}
      style={{...(THEMES[theme] ?? THEMES.light),
        '--falling-text-accent': accentColor,
        background: backgroundColor,
        fontSize,
        ...style,}}
    >
      <div ref={textRef} className="falling-text__text">
        {groups.map((group, index) => (
          <Fragment key={index}>
            {index > 0 && ' '}
            {split === 'letters' ? (
              <span className="falling-text__group">
                {[...group.word].map((letter, position) => (
                  <span
                    key={position}
                    className={pieceClass + (group.highlighted ? ' ' + highlightClass : '')}
                    data-piece=""
                    data-highlight={group.highlighted ? '' : undefined}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ) : (
              <span
                className={pieceClass + (group.highlighted ? ' ' + highlightClass : '')}
                data-piece=""
                data-highlight={group.highlighted ? '' : undefined}
              >
                {group.word}
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default FallingText;
