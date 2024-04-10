import { useEffect, useRef } from "react";
import "./text-area.scss";

const TextArea = (props) => {
  const reftextArea = useRef();
  useEffect(() => {
    reftextArea?.current?.addEventListener("input", () => {
      const scrollHeight = reftextArea.current.scrollHeight;
      if (scrollHeight < 100) {
        reftextArea.current.style.height = `${scrollHeight}px`; // Establecer la altura según el contenido, hasta un máximo de 100px
      } else if (scrollHeight > 100) {
        reftextArea.current.style.height = "100px";
      } else {
        reftextArea.current.style.height = `${scrollHeight}px`;
      }
    });
  }, [reftextArea.current]);
  return <textarea ref={reftextArea} className="text-area" {...props} />;
};

export default TextArea;
