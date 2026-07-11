import { useState, useEffect, useRef, ReactNode, Suspense } from 'react';

interface LazyHydrateProps {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  minHeight?: string;
}

export default function LazyHydrate({
  children,
  rootMargin = '150px',
  threshold = 0.01,
  minHeight = '200px'
}: LazyHydrateProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldRender) return;

    // Use IntersectionObserver to lazy load & lazy hydrate
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, shouldRender]);

  return (
    <div 
      ref={containerRef} 
      style={{ minHeight: shouldRender ? 'auto' : minHeight }} 
      className="w-full transition-all duration-300"
    >
      {shouldRender ? (
        <Suspense fallback={
          <div style={{ minHeight }} className="w-full flex items-center justify-center text-slate-400 font-mono text-xs animate-pulse">
            Loading Component...
          </div>
        }>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight }} className="w-full" />
      )}
    </div>
  );
}
