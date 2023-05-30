import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
function DropImg() {
    const [imgUrl, setImgUrl] = useState<string>()

  return (
    <>
    <Dropzone onDrop={acceptedFiles => setImgUrl(acceptedFiles[0].name)}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
      <img src={imgUrl && `${imgUrl}`} alt={imgUrl} />
      </>
    
  )
}
export default DropImg