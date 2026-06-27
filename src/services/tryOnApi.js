import axios from "axios";

export const generateVirtualTryOn = async (userFile, clothFile) => {
  const formData = new FormData();

  formData.append("userImage", userFile);
  formData.append("clothImage", clothFile);

  const response = await axios.post(
    "http://localhost:5000/api/virtual-tryon",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};