import { Input, Loader, Select } from "components";
import "./edit-new-recap.scss";
import {
  formatDateNumber,
  formatDateToYYYYMMDDUTC,
} from "utilities/format-date";
import { useEffect, useState } from "react";
// import countries from "utilities/countries-code.json";
// import { NexDatesInterface } from "models";
// import { deleteDate, editDate } from "pages/BzrpTour/services";
import { RecapInterface } from "models/interface.models";
import { deleteRecap, updateRecap } from "pages/Recap/services/recap.services";

interface EditInterface extends RecapInterface {
  setIsOpen: (value: any) => void;
  getData: () => void;
}

const EditRecap: React.FC<EditInterface> = (prop) => {
  const INITIAL_STATE = {
    portada: prop.portada,
    filePortada: {},
    country: prop.country,
    city: prop.city,
    date: formatDateToYYYYMMDDUTC(new Date(prop.date)),
    show: prop.show,
    polaroid: prop.polaroid,
    filePolaroid: {},
    video: prop.video,
    fileVideos: {},
  };

  const [inputState, setInputState] = useState(INITIAL_STATE);
  const [filePortadaRender, setFilePortadaRender] = useState<any>(prop.portada);
  const [filePolaroidRender, setFilePolaroidRender] = useState<string[]>([]);
  const [fileVideoRender, setFileVideoRender] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
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
    if (file) {
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
      } else if ("fileVideos" === type) {
        let fileVideoRenderCopy: any = [...fileVideoRender];
        Object.keys(e.target.files).map((element) => {
          let video = URL.createObjectURL(e.target.files[element]);
          fileVideoRenderCopy.push(video);
        });
        setFileVideoRender(fileVideoRenderCopy);
        if (Object.keys(inputState.fileVideos).length) {
          let objectLength = Object.keys(inputState.fileVideos).length;
          let newObjectFiles = { ...inputState.fileVideos };
          Object.keys(e.target.files).map((index) => {
            newObjectFiles = {
              ...newObjectFiles,
              [objectLength + parseInt(index)]: e.target.files[index],
            };
          });
          setInputState({
            ...inputState,
            fileVideos: newObjectFiles,
          });
        } else {
          setInputState({
            ...inputState,
            fileVideos: e.target.files,
          });
        }
      }
    }
  };

  const removeImagePolaroid = (index: number) => {
    let removed: any = inputState.polaroid.filter((_, i) => i !== index);
    setInputState({
      ...inputState,
      polaroid: removed,
    });
  };
  const removeFilePolaroid = (index: number) => {
    let fileRenderPolaroidCopy: any = filePolaroidRender.filter(
      (_, i) => i !== index
    );
    let filePolaroidCopy: any = { ...inputState.filePolaroid };
    delete filePolaroidCopy[index];
    setFilePolaroidRender(fileRenderPolaroidCopy);
    setInputState({
      ...inputState,
      filePolaroid: filePolaroidCopy,
    });
  };

  const removeVideo = (index: number) => {
    let videoRemoved: any = inputState.video.filter((_, i) => i !== index);
    setInputState({
      ...inputState,
      video: videoRemoved,
    });
  };
  const removeVideoFile = (index: number) => {
    let fileRenderVideoCopy: any = fileVideoRender.filter(
      (_: any, i: number) => i !== index
    );
    setFileVideoRender(fileRenderVideoCopy);
    let fileVideoCopy: any = { ...inputState.fileVideos };
    delete fileVideoCopy[index];

    setInputState({
      ...inputState,
      fileVideos: fileVideoCopy,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProgress(0);
    setLoading(true);
    let data: any = { ...inputState };
    prop.show === inputState.show && delete data.show;
    prop.city === inputState.city && delete data.city;
    prop.country === inputState.country && delete data.country;
    formatDateToYYYYMMDDUTC(new Date(prop.date)) === inputState.date &&
      delete data.date;
    prop.portada === inputState.portada && delete data.portada;
    prop.polaroid === inputState.polaroid && delete data.polaroid;
    prop.video === inputState.video && delete data.video;
    inputState.filePortada instanceof File === false && delete data.filePortada;
    !Object.keys(inputState.filePolaroid).length && delete data.filePolaroid;
    !Object.keys(inputState.fileVideos).length && delete data.fileVideos;

    // const validation = validationsNewRecap(inputState);
    // if (!validation) {
    //
    //
    //
    if (Object.keys(data).length) {
      console.log("DATA", data);
      const response: any = await updateRecap(data, prop._id, {
        setProgress,
      });
      if (response.status === 200) {
        setLoading(false);
        setDone("Fecha actualizada con éxito");
        prop.getData();
      } else {
        setLoading(false);
        setError(
          "Algo salió mal al intentar actualizar la fecha, inténtalo de nuevo"
        );
      }
    }
    // }
  };

  const removeDate = async () => {
    const response = window.confirm(
      `¿Quieres eliminar el show ${prop.show} del: ${formatDateNumber(
        prop.date
      )}? Estos cambios son permanentes y no podrás volver atrás`
    );
    if (response) {
      setLoading(true);
      const res: any = await deleteRecap(prop._id);
      if (res.status === 200) {
        prop.getData();
        prop.setIsOpen(false);
      } else {
        setError("No se pudo eliminar la fecha, inténtalo de nuevo");
      }
    }
    setLoading(false);
  };
  console.log(inputState.filePolaroid);
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
                filePortadaRender && "edit-popup__img-btn--noborder"
              }`}
              title="Seleccionar imagen de portada"
              type="button"
            >
              {filePortadaRender ? (
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
              {inputState.polaroid?.map((image, index) => (
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
              {filePolaroidRender?.map((image, index) => (
                <div
                  className="edit-popup__polaroid-img-container"
                  key={image + index}
                  onClick={() => removeFilePolaroid(index)}
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
          <div className="edit-popup__img-label-weapper">
            <p className="edit-popup__img-label-weapper--label">Video:</p>
            <div className="edit-popup__img-polaroid-wrapper">
              {inputState.video?.map((video, index) => (
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

              {fileVideoRender?.map((video: string, index: number) => (
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
                    onClick={() => removeVideoFile(index)}
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
                  accept="video/mp4"
                  onChange={(e) => upLoadFiles(e, "fileVideos")}
                />
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="edit-popup__delete-date"
          onClick={() => removeDate()}
        >
          Eliminar Fecha
        </button>
        {error && <span className="edit-popup__error">* {error} *</span>}
        {done && <span className="edit-popup__done">{done}</span>}
        {loading && (
          <div className="edit-popup__progress-bar-wrapper">
            <div className="edit-popup__progress-bar">
              <div
                style={{ width: `${progress}%` }}
                className="edit-popup__progress-bar--progress"
              />
            </div>
          </div>
        )}
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

export default EditRecap;
