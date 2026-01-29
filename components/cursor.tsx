'use client';

import { useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const followerPositionRef = useRef<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateFollower = () => {
      if (followerRef.current) {
        followerPositionRef.current.x +=
          (positionRef.current.x - followerPositionRef.current.x) * 0.25;
        followerPositionRef.current.y +=
          (positionRef.current.y - followerPositionRef.current.y) * 0.25;

        followerRef.current.style.left = `${followerPositionRef.current.x}px`;
        followerRef.current.style.top = `${followerPositionRef.current.y}px`;
      }
      requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateFollower();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 bg-[var(--accent)] dark:bg-[var(--accent)] shadow-lg dark:shadow-lg dark:shadow-accent/50"
      />
      {/* Follower/halo effect */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed z-40 w-8 h-8 border-2 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 border-[var(--accent)] dark:border-[var(--accent)] dark:opacity-70"
      />
    </>
  );
}
