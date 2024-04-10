import React, { useEffect, useRef } from "react";
import "./add-image.scss";
import { useState } from "react";
import addImage from "../../assets/add-image.svg";
const AddImage = ({ setState, refArea }) => {
  const [dropArea, setDropArea] = useState(false);
  const [image, setImage] = useState(addImage);
  const fileRef = useRef(null);

  const upLoadImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const dragenter = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setDropArea(true);
  };

  const dragover = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setDropArea(true);
  };
  useEffect(() => {
    if (refArea.current) {
      refArea.current.addEventListener("dragenter", dragenter, false);
      refArea.current.addEventListener("dragover", dragover, false);
    }
  }, [refArea.current]);

  return (
    <>
      <button
        onClick={() => fileRef.current.click()}
        className="add-image-button"
        type="button"
      >
        <img
          className="add-image-button__img"
          src={image}
          alt="agregar imagen"
          loading="lazy"
        />
        <input
          className="add-image-button__input"
          accept="image/*"
          type="file"
          ref={fileRef}
          onChange={upLoadImage}
        />
      </button>
      {dropArea && (
        <div className="add-image-drop-area">
          <div className="add-image-drop-area__container">
            <img
              className="add-image-drop-area__img"
              src={addImage}
              alt="agregar imagen"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddImage;
