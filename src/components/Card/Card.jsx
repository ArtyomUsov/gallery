import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { likePhoto, unlikePhoto } from "../../store/gallery/gallerySlice";

const Card = ({ photos }) => {
  const likedPhotos = useSelector((store) => store.gallery.likedPhotos);
  const dispatch = useDispatch();

  const handleLikeClick = (id) => {
    if (likedPhotos.includes(id)) dispatch(unlikePhoto(id));
    else dispatch(likePhoto(id));
  };

  return (
    <>
      {photos.map((item) => (
        <Box
          sx={{ position: "relative", padding: 3, height: 400, width: 350 }}
          key={item.id}
        >
          <img src={item.url} />
          <FavoriteIcon
            sx={{
              position: "absolute",
              right: 30,
              top: 30,
              color: likedPhotos.includes(item.id) ? "#f50057" : "#fff",
            }}
            onClick={() => handleLikeClick(item.id)}
          />
        </Box>
      ))}
    </>
  );
};

export default Card;
