import { useEffect, useRef, useState } from 'react';

const useObserver = (options: IntersectionObserverInit) => {
  const refElement: any = useRef<HTMLElement>();

  const [intersecting, setIntersecting] = useState<IntersectionObserverEntry>();

  const observer = new IntersectionObserver(
    ([observerEntries]) => setIntersecting(observerEntries),
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

  return [intersecting?.isIntersecting, refElement];
};
export default useObserver;
