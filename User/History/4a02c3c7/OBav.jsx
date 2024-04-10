import React, { useEffect, useRef } from "react";
import "./add-image.scss";
import { useState } from "react";
import addImage from "../../assets/add-image.svg";
const AddImage = ({ setState, img }) => {
  const [dropArea, setDropArea] = useState(false);
  const [image, setImage] = useState(addImage);
  const fileRef = useRef(null);
  useEffect(() => {
    img && setImage(img);
  }, [img]);

  const upLoadImage = (e) => {
    e.preventDefault();
    z;
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

  const drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDropArea(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const dragleave = (e) => {
    e.preventDefault();
    setDropArea(false);
  };
  const drag = (e) => {
    e.preventDefault();
    setDropArea(true);
  };
  useEffect(() => {
    window.addEventListener("dragenter", drag, false);
    window.addEventListener("dragover", drag, false);
    window.addEventListener("dragend", dragleave, false);
    window.addEventListener("dragleave", dragleave, false);
    window.addEventListener("drop", drop, false);
    return () => {
      window.removeEventListener("dragenter", drag, false);
      window.removeEventListener("dragover", drag, false);
      window.removeEventListener("dragend", dragleave, false);
      window.removeEventListener("dragleave", dragleave, false);
      window.removeEventListener("drop", drop, false);
    };
  }, []);

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
