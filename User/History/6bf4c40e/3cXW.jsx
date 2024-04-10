import { useEffect } from "react";
import "./multimedia-viewer.scss";

const MultimediaViewer = ({ images, videos, data, setData }) => {
  useEffect(() => {
    if (data) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [data]);

  return <div className="multimedia-viewer">MultimediaViewer</div>;
};

export default MultimediaViewer;
