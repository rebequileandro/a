import "./multimedia-viewer.scss";

const MultimediaViewer = ({ images, videos, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }
  }, [isOpen]);

  return <div className="multimedia-viewer">MultimediaViewer</div>;
};

export default MultimediaViewer;
