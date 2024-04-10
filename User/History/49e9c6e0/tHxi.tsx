import { useEffect, useRef, useState } from 'react';

const useObserver = (options: IntersectionObserverInit) => {
  const refElement = useRef(null);
  const setReference: any = (element: any) => {
    refElement.current = element;
  };
  const [isIntersecting, setIsIntersecting] =
    useState<IntersectionObserverEntry>();

  const observer = new IntersectionObserver(
    ([observerEntries]) => setIsIntersecting(observerEntries),
    options
  );

  useEffect(() => {
    observer.disconnect();
    if (refElement.current) {
      observer.observe(refElement.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return [isIntersecting, setReference];
};
export default useObserver;
