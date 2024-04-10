import { useEffect, useRef, useState } from 'react';

const useObserver = (options: IntersectionObserverInit) => {
  const [refElement, setRefElement] = useState<HTMLElement | any | null>();
  const [isIntersecting, setIsIntersecting] =
    useState<IntersectionObserverEntry>();

  const observer = new IntersectionObserver(
    ([observerEntries]) => setIsIntersecting(observerEntries),
    options
  );

  useEffect(() => {
    observer.disconnect();
    console.log(refElement);
    if (refElement) {
      observer.observe(refElement);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return [isIntersecting, setRefElement];
};
export default useObserver;
