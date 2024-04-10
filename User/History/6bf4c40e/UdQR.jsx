import { useEffect, useRef } from "react";
import "./multimedia-viewer.scss";

const MultimediaViewer = ({ data, setData }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (data) {
      document.body.style.overflowY = "hidden";
      popupRef.current.classList.add("multimedia-viewer--show");
    } else {
      document.body.style.overflowY = "scroll";
      popupRef.current.classList.add("multimedia-viewer--hidden");
    }
  }, [data]);

  return (
    <div ref={popupRef} className="multimedia-viewer">
      MultimediaViewer
    </div>
  );
};

export default MultimediaViewer;
