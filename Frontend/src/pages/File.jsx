import React, { useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import add from "../assets/add.png";
import { Image } from "react-bootstrap";

const FileUpload = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    axios.post('http://localhost:8000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
      alert('File uploaded successfully!');
    }).catch(error => {
      console.error('Error uploading file: ', error);
      alert('Error uploading file.');
    });

  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {
          isDragActive ?
          <Image src={add} alt=" add"/> :
            <Image src={add} alt=" add"/>
        }
      </div>
    </div>
  );
}

export default FileUpload;
