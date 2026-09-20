import { useEffect, useRef, useState } from 'react';

const createObserver = (onIntersect, threshold = 0.12, rootMargin = '0px 0px -40px 0px') => {
  if (typeof IntersectionObserver === 'undefined') return null;
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry);
      });
    },
    { threshold, rootMargin }
  );
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll-triggered reveal for a single element.
export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }
    const threshold = options.threshold || 0.12;
    const rootMargin = options.rootMargin || '0px 0px -40px 0px';

    const observer = createObserver(
      () => setIsVisible(true),
      threshold,
      rootMargin
    );

    if (observer && ref.current) {
      observer.observe(ref.current);
    } else {
      setIsVisible(true);
    }

    return () => observer && observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible === true];
};

// Staggered reveal for a grid of children.
export const useStaggeredReveal = (itemCount, options = {}) => {
  const [isVisible, setIsVisible] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }
    const threshold = options.threshold || 0.1;
    const rootMargin = options.rootMargin || '0px 0px -40px 0px';

    const observer = createObserver(
      () => setIsVisible(true),
      threshold,
      rootMargin
    );

    if (observer && ref.current) {
      observer.observe(ref.current);
    } else {
      setIsVisible(true);
    }

    return () => observer && observer.disconnect();
  }, [options.threshold, options.rootMargin, itemCount]);

  return [ref, isVisible === true];
};