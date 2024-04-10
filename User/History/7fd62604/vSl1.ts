import axios from "axios";

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
      headers: { "Content-Type": "multipart/form-data" },
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

// https://api.bizarrap.com/api/bzrptour/add POST (Agregar tour)
// BODY
// filePortada
// country
// city
// date
// filePolaroid
// video
// (si vas a probar en postman el body formdata para los archivos)
