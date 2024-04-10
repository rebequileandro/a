import "./edit-new-recap.scss";
import { Input, Loader, Select } from "components";
import { useEffect, useRef, useState } from "react";
import { NewRecapInterface } from "models/interface.models";
import { validationsNewRecap } from "utilities/validations.utilities";
import { newRecap } from "pages/Recap/services/recap.services";
interface NewRecapIntefaceComponent {
  setIsOpen: (value: boolean) => void;
  getData: () => void;
}

const NewRecap: React.FC<NewRecapIntefaceComponent> = (prop) => {
  const INITIAL_STATE = {
    filePortada: "",
    country: "",
    city: "",
    date: "",
    show: "",
    filePolaroid: {},
    video: {},
  };

  const [inputState, setInputState] = useState(INITIAL_STATE);
  const [filePortadaRender, setFilePortadaRender] = useState<any>();
  const [filePolaroidRender, setFilePolaroidRender] = useState<string[]>([]);
  const [fileVideoRender, setFileVideoRender] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [done, setDone] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const upLoadFiles = (e: any, type: string) => {
    e.preventDefault();
    const file = e.target.files[0];
    if ("filePortada" === type) {
      setInputState({
        ...inputState,
        filePortada: file,
      });
      if (file && file.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePortadaRender(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else if ("filePolaroid" === type) {
      let filePolaroidRenderCopy: any = [...filePolaroidRender];
      Object.keys(e.target.files).map((element) => {
        let image = URL.createObjectURL(e.target.files[element]);
        filePolaroidRenderCopy.push(image);
      });
      setFilePolaroidRender(filePolaroidRenderCopy);
      if (Object.keys(inputState.filePolaroid).length) {
        let objectLength = Object.keys(inputState.filePolaroid).length;
        let newObjectFiles = { ...inputState.filePolaroid };
        Object.keys(e.target.files).map((index) => {
          newObjectFiles = {
            ...newObjectFiles,
            [objectLength + parseInt(index)]: e.target.files[index],
          };
        });
        setInputState({
          ...inputState,
          filePolaroid: newObjectFiles,
        });
      } else {
        setInputState({
          ...inputState,
          filePolaroid: e.target.files,
        });
      }
    } else if ("video" === type) {
      // let fileVideoCopy: any = [...inputState.video];
      // fileVideoCopy.push(file);
      // const videoUrl = URL.createObjectURL(file);
      // let fileVideoRenderCopy = [...fileVideoRender];
      // fileVideoRenderCopy.push(videoUrl);
      // setFileVideoRender(fileVideoRenderCopy);
      // setInputState({
      //   ...inputState,
      //   video: fileVideoCopy,
      // });
      let fileVideoRenderCopy: any = [...fileVideoRender];
      Object.keys(e.target.files).map((element) => {
        let video = URL.createObjectURL(e.target.files[element]);
        fileVideoRenderCopy.push(video);
      });
      setFileVideoRender(fileVideoRenderCopy);
      if (Object.keys(inputState.video).length) {
        let objectLength = Object.keys(inputState.video).length;
        let newObjectFiles = { ...inputState.video };
        Object.keys(e.target.files).map((index) => {
          newObjectFiles = {
            ...newObjectFiles,
            [objectLength + parseInt(index)]: e.target.files[index],
          };
        });
        setInputState({
          ...inputState,
          video: newObjectFiles,
        });
      } else {
        setInputState({
          ...inputState,
          video: e.target.files,
        });
      }
    }
  };
  const removeImagePolaroid = (index: number) => {
    let filePolaroidCopy: any = { ...inputState.filePolaroid };
    delete filePolaroidCopy[index];
    let fileRenderPolaroidCopy: any = filePolaroidRender.filter(
      (_, i) => i !== index
    );
    setFilePolaroidRender(fileRenderPolaroidCopy);
    setInputState({
      ...inputState,
      filePolaroid: filePolaroidCopy,
    });
  };
  const removeVideo = (index: number) => {
    let fileVideoCopy: any = { ...inputState.video };
    delete fileVideoCopy[index];
    let fileRenderVideoCopy: any = fileVideoRender.filter(
      (_: any, i: any) => i !== index
    );
    setFileVideoRender(fileRenderVideoCopy);
    setInputState({
      ...inputState,
      video: fileVideoCopy,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const validation = validationsNewRecap(inputState);
    if (!validation) {
      const response: any = await newRecap(inputState);
      if (response.status === 200) {
        setLoading(false);
        setDone("Fecha añadida con éxito");
        prop.getData();
      } else {
        setLoading(false);
        setError(
          "Algo salió mal al intentar agregar la fecha, inténtalo de nuevo"
        );
      }
    }
  };
  console.log(inputState.video);
  return (
    <div className="edit-popup">
      <div
        className="edit-popup__close-overlay"
        onClick={() => prop.setIsOpen(false)}
      />
      <form className="edit-popup__container" onSubmit={handleSubmit}>
        <button
          type="reset"
          className="edit-popup__close"
          onClick={() => prop.setIsOpen(false)}
        >
          x
        </button>
        <h2 className="edit-popup__title">Nueva Fecha</h2>
        <label>
          Show:
          <Input
            type="text"
            name="show"
            placeHolder="Amnesia"
            value={inputState.show}
            onChange={handleChange}
          />
        </label>
        <label>
          Ciudad:
          <Input
            type="text"
            name="city"
            placeHolder="Ibiza"
            value={inputState.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Pais:
          <Input
            type="text"
            name="country"
            placeHolder="España"
            value={inputState.country}
            onChange={handleChange}
          />
        </label>

        <label>
          Fecha:
          <Input
            type="date"
            name="date"
            placeHolder="11/11/2023"
            value={inputState.date}
            onChange={handleChange}
          />
        </label>
        <div className="edit-popup__img-wrapper">
          <div className="edit-popup__img-label-weapper">
            <p className="edit-popup__img-label-weapper--label">
              Imagen de portada:
            </p>
            <button
              className={`edit-popup__img-btn edit-popup__img-btn--m ${
                inputState.filePortada &&
                filePortadaRender &&
                "edit-popup__img-btn--noborder"
              }`}
              title="Seleccionar imagen de portada"
              type="button"
            >
              {inputState.filePortada && filePortadaRender ? (
                <img
                  className="edit-popup__img-btn--img"
                  src={filePortadaRender}
                  alt="portada"
                />
              ) : (
                "+"
              )}
              <input
                className="edit-popup__input-file"
                type="file"
                accept="image/*"
                onChange={(e) => upLoadFiles(e, "filePortada")}
              />
            </button>
          </div>
          <div className="edit-popup__img-label-weapper">
            <p className="edit-popup__img-label-weapper--label">
              Imagenes Polaroid:
            </p>
            <div className="edit-popup__img-polaroid-wrapper">
              {inputState.filePolaroid &&
                filePolaroidRender?.map((image: string, index) => (
                  <div
                    className="edit-popup__polaroid-img-container"
                    key={image + index}
                    onClick={() => removeImagePolaroid(index)}
                  >
                    <img
                      className="edit-popup__polaroid-img"
                      src={image}
                      alt="portada"
                    />
                  </div>
                ))}
              <button
                className="edit-popup__img-btn edit-popup__img-btn--s"
                title="Polaroid"
                type="button"
              >
                +
                <input
                  className="edit-popup__input-file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => upLoadFiles(e, "filePolaroid")}
                  multiple
                />
              </button>
            </div>
          </div>
          {/* ///
          //////////////// */}
          <div className="edit-popup__img-label-weapper">
            <p className="edit-popup__img-label-weapper--label">Video:</p>
            <div className="edit-popup__img-polaroid-wrapper">
              {Object.keys(inputState.video).length > 0 &&
                fileVideoRender?.map((video: string, index: any) => (
                  <div className="edit-popup__video-container" key={index}>
                    <video
                      className="edit-popup__video"
                      src={video}
                      controls
                      playsInline
                    />
                    <button
                      className="edit-popup__remove-btn"
                      title="Eliminar Video"
                      type="button"
                      onClick={() => removeVideo(index)}
                    >
                      x
                    </button>
                  </div>
                ))}
              <button
                className="edit-popup__img-btn edit-popup__img-btn--l"
                title="Video"
                type="button"
              >
                +
                <input
                  className="edit-popup__input-file"
                  type="file"
                  multiple
                  accept="video/mp4"
                  onChange={(e) => upLoadFiles(e, "video")}
                />
              </button>
            </div>
          </div>
        </div>

        {error && <span className="edit-popup__error">* {error} *</span>}
        {done && <span className="edit-popup__done">{done}</span>}

        <div className="edit-popup__buttons-wrapper">
          <button
            type="reset"
            className="btn-primary"
            onClick={() => prop.setIsOpen(false)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-primary ">
            {loading ? <Loader /> : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRecap;
