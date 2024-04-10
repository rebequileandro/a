import { useEffect, useRef, useState } from 'react';

const useObserver = (options: IntersectionObserverInit) => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry>();

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver(
      ([observerEntries]) => setEntries(observerEntries),
      options
    )
  );
  useEffect(() => {
    observer.current.disconnect();
    console.log(elements);
    if (elements.length) {
      console.log('OBSERVERSS', observer.current);
      elements.forEach((entry: HTMLElement) => observer.current.observe(entry));
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements]);

  return [entries, setElements, elements];
};
export default useObserver;
