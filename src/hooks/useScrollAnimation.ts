import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true
  } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    elementRef,
    isVisible: triggerOnce ? (isVisible || hasAnimated) : isVisible,
  };
};

export const useStaggeredScrollAnimation = <T extends HTMLElement = HTMLDivElement>(itemCount: number, options: UseScrollAnimationOptions = {}) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of child elements
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newItems = [...prev];
                newItems[i] = true;
                return newItems;
              });
            }, i * 100); // 100ms delay between each item
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -10% 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [itemCount, options.threshold, options.rootMargin]);

  return {
    containerRef,
    visibleItems,
  };
};
