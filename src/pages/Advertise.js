import { Input } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Advertise = () => {
  let { client } = useParams();
  let [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (e) => {
    const fileList = [...e.target.files].map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedFiles(fileList);
  };

  return (
    <div>
      <h1>Swad Restaurant - {client}</h1>
      <Input type="file" onChange={handleChange} />
      {JSON.stringify(selectedFiles)}
      <Carousel>
        {selectedFiles.map((file, index) => {
          return (
            <div>
              <img src={selectedFiles[index]} />
              <p className="legend">Legend 1</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
