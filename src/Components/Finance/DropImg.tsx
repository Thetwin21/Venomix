import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {BsBoxArrowUp } from "react-icons/bs"
interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

function DropImg(props: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
        props.onImageUpload(file);
      };

      reader.readAsDataURL(file);
    },
    [props.onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone  flex flex-col space-y-2 rounded-sm justify-center items-center ${
        image ? "h-fit" : "h-[270px]"
      } w-[307px] p-4 ${isDragActive ? "bg-[#8a8a8a]" : "bg-[#D9D9D9]"}`}
    >
      <input {...getInputProps()} />
      <BsBoxArrowUp className={`font-bold text-[30px] text-black text-center ${image ? "hidden" : "block"}`} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
          <p className={`text-center ${image ? "hidden" : "block"}`}>
            Drag and drop an image here, or <br /> click to select image
          </p>
      )}
      {image && (
        <div className="h-[200px] w-full">
          {/* <p>Select a different image</p> */}
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="Uploaded"
          />
        </div>
      )}
    </div>
  );
}
export default DropImg;
