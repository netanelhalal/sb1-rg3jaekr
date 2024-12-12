import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function useAnimatedEntry({
  threshold = 0.1,
  rootMargin = '0px',
  duration = 0.5,
  delay = 0,
  once = true,
}: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Skip if element should only animate once and has already animated
    if (once && hasAnimated) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once, hasAnimated]);

  const style = {
    opacity: 0,
    transform: 'translateX(30px)',
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
    ...(isVisible && {
      opacity: 1,
      transform: 'translateX(0)',
    }),
  };

  return { ref, style, isVisible };
}