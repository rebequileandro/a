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

export const newRecap = async (data: any) => {
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

    formData.append("video", "[]");
    const response = await axios({
      method: "post",
      url: "https://api.bizarrap.com/api/bzrptour/add",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
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
