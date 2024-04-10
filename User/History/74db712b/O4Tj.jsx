export const useObserver = (options) => {
  const refElement = useRef(null);

  const [intersecting, setIntersecting] = useState(null);

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
