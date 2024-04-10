import { useEffect, useRef, useState } from 'react';

const useObserver = (options: IntersectionObserverInit) => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry>();

  const observer = new IntersectionObserver(
    ([observerEntries]) => setEntries(observerEntries),
    options
  );

  useEffect(() => {
    // observer.current.disconnect();
    console.log(elements);
    if (elements.length) {
      console.log('OBSERVERSS');
      elements.forEach((entry: HTMLElement) => observer.observe(entry));
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [elements]);

  return [entries, setElements, elements];
};
export default useObserver;
