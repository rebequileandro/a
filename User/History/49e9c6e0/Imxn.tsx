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
    const { current: currentObserver } = observer;
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach((entry: HTMLElement) => currentObserver.observe(entry));
    }
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return [entries, setElements, elements];
};
export default useObserver;
