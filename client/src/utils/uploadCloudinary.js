const upload_preset = import.meta.env.VITE_UPLOAD_PRESET || "default_preset";
const cloud_name = import.meta.env.VITE_CLOUD_NAME || "default_cloud";

const uploadImageToCloudinary = async (file) => {
  if (!file || !(file instanceof Blob)) {
    throw new Error("Invalid file input for Cloudinary upload");
  }

  try {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", upload_preset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: uploadData,
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `Failed to upload image to Cloudinary: ${
          errorData.error?.message || res.statusText
        }`
      );
    }

    const data = await res.json();
    return { url: data.secure_url, public_id: data.public_id };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error.message);
    throw error;
  }
};

export default uploadImageToCloudinary;
