import { useEffect, useRef, useState } from 'react';

const useObserver = (options: IntersectionObserverInit) => {
  const refElement = useRef<React.RefObject<HTMLElement> | any>(null);
  const [isIntersecting, setIsIntersecting] =
    useState<IntersectionObserverEntry>();

  const observer = new IntersectionObserver(
    ([observerEntries]) => setIsIntersecting(observerEntries),
    options
  );

  useEffect(() => {
    observer.disconnect();
    console.log(refElement);
    if (refElement.current) {
      observer.observe(refElement.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return [isIntersecting, refElement];
};
export default useObserver;
