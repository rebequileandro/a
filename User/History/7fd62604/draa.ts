import axios from "axios";

let user: any = window.sessionStorage.getItem("user");
let token = JSON.parse(user).token;

export const getRecap = async () => {
  try {
    const response = await axios.get(
      "https://api.bizarrap.com/api/bzrptour/all"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const newRecap = async (data: any, { setProgress }: any) => {
  try {
    console.log("DATA", data);
    const formData = new FormData();
    formData.append("show", data.show);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("date", data.date);
    formData.append("filePortada", data.filePortada);
    Object.keys(data.filePolaroid).map((file) => {
      formData.append("filePolaroid", data.filePolaroid[file]);
    });
    Object.keys(data.video).map((vid: any) => {
      formData.append("fileVideos", data.video[vid]);
    });
    const response = await axios({
      method: "post",
      url: "https://api.bizarrap.com/api/bzrptour/add",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress: (progressEvent: any) => {
        const progress = Math.round(
          (parseInt(progressEvent.loaded) * 100) / parseInt(progressEvent.total)
        );
        setProgress(progress);
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateRecap = async (
  data: any,
  id: string,
  { setProgress }: any
) => {
  try {
    if (data?.video || data?.polaroid) {
      let response;
      const formData = new FormData();
      data?.video && formData.append("video", data.video);
      data?.polaroid && formData.append("polaroid", data.polaroid);

      response = await axios({
        method: "put",
        url: `https://api.bizarrap.com/api/bzrptour/${id}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const formDataFile = new FormData();
      Object.keys(data).map((element) => {
        if (element !== "video" && element !== "polaroid") {
          if (element === "filePolaroid") {
            Object.keys(data.filePolaroid).map((file) => {
              formDataFile.append("filePolaroid", data.filePolaroid[file]);
            });
          } else if (element === "fileVideos") {
            Object.keys(data.fileVideos).map((vid: any) => {
              formDataFile.append("fileVideos", data.fileVideos[vid]);
            });
          } else {
            formDataFile.append(element, data[element]);
          }
        }
      });
      if (!formDataFile.entries().next().done) {
        console.log("ENTRE");
        response = await axios({
          method: "put",
          url: `https://api.bizarrap.com/api/bzrptour/${id}`,
          data: formDataFile,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent: any) => {
            const progress = Math.round(
              (parseInt(progressEvent.loaded) * 100) /
                parseInt(progressEvent.total)
            );
            setProgress(progress);
          },
        });
        console.log("RESPONSE FILES", response);
      }
      return response;
    } else {
      const formData = new FormData();
      Object.keys(data).map((element) => {
        if (element === "filePolaroid") {
          Object.keys(data.filePolaroid).map((file) => {
            formData.append("filePolaroid", data.filePolaroid[file]);
          });
        } else if (element === "fileVideos") {
          Object.keys(data.fileVideos).map((vid: any) => {
            formData.append("fileVideos", data.fileVideos[vid]);
          });
        } else {
          formData.append(element, data[element]);
        }
      });

      const response = await axios({
        method: "put",
        url: `https://api.bizarrap.com/api/bzrptour/${id}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent: any) => {
          const progress = Math.round(
            (parseInt(progressEvent.loaded) * 100) /
              parseInt(progressEvent.total)
          );
          setProgress(progress);
        },
      });
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deleteRecap = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://api.bizarrap.com/api/bzrptour/delete/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// https://api.bizarrap.com/api/bzrptour/add POST (Agregar tour)
// BODY
// filePortada
// country
// city
// date
// filePolaroid
// video
// (si vas a probar en postman el body formdata para los archivos)
