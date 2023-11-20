import React from "react";
import { photosStyles } from "./Photo.css";
import { Photo } from "../types";

interface PhotoProps {
  photo: Photo;
}

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <div className={photosStyles} key={`${photo.id}`}>
      <img src={photo.urls.small} alt="" />
      <p>{photo.user.username}</p>
      <span>Like: {photo.user.total_likes}</span>
    </div>
  );
};

export default Photo;
