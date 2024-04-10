import { useEffect, useRef } from "react";
import "./text-area.scss";

const TextArea = (props) => {
  const reftextArea = useRef();
  useEffect(() => {
    reftextArea?.current?.addEventListener("input", () => {
      const scrollHeight = reftextArea.current.scrollHeight;
      if (scrollHeight < 100) {
        reftextArea.current.style.height = `${scrollHeight}px`; // Establecer la altura según el contenido, hasta un máximo de 100px
      }
    });
    reftextArea?.current?.addEventListener("keyup", () => {
      // Ajustar la altura del textarea al contenido al borrar el texto
      if (reftextArea.current.value === "") {
        reftextArea.current.style.height = "4rem"; // Restablecer la altura a "auto" para adaptarse al contenido
      }
    });
    reftextArea.current.style.height = "4rem";
  }, []);
  return (
    <textarea ref={reftextArea} className="text-area scroll-bar" {...props} />
  );
};

export default TextArea;
