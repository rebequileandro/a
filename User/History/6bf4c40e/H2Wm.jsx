import { useEffect, useRef } from "react";
import "./multimedia-viewer.scss";

const MultimediaViewer = ({ data, setData }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (data) {
      document.body.style.overflowY = "hidden";
      popupRef.current.classList.add("multimedia-viewer--show");
      popupRef.current.classList.remove("multimedia-viewer--hidden");
    } else {
      document.body.style.overflowY = "scroll";
      popupRef.current.classList.add("multimedia-viewer--hidden");
      popupRef.current.classList.remove("multimedia-viewer--show");
    }
  }, [data]);

  return (
    <div ref={popupRef} className="multimedia-viewer">
      <div className="multimedia-viewer__container">
        <button onClick={() => setData(null)}>X</button>
        MultimediaViewer
      </div>
    </div>
  );
};

export default MultimediaViewer;
