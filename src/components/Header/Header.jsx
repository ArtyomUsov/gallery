import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const likedPhotos = useSelector((store) => store.gallery.likedPhotos);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
        color: "white",
        bgcolor: "primary.main",
        padding: 2,
      }}
    >
      <h1>Gallery</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          height: 50,
          width: 100,
          borderRadius: 1,
        }}
      >
        <FavoriteIcon sx={{ color: "#f50057" }} />
        <p style={{color:"black"}}>{likedPhotos.length}</p>
      </Box>
    </Box>
  );
};

export default Header;
