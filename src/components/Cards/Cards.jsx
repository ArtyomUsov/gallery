import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import Card from "../Card/Card";
import { getGalleryPhotos } from "../../api/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, loadCards } from "../../store/gallery/gallerySlice";
import { InView, useInView } from "react-intersection-observer";

const Cards = () => {
  const photos = useSelector((store) => store.gallery.photos);
  const cards = useSelector((store) => store.gallery.cards);
  const dispatch = useDispatch();

  const { ref, isView } = useInView({
    onChange: (InView) => {
      if (InView && cards <= 45) dispatch(loadCards(cards + 15));
      console.log(cards);
    },
  });
  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getGalleryPhotos();
      dispatch(addPhoto(data));
    };
    fetchPhotos();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: 3,
        }}
      >
        <Card photos={photos.slice(0, cards)} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
        ref={ref}
      >
        <Button
          sx={{
            color: "black",
            fontSize: 30,
            border: 1,
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Наверх
        </Button>
      </Box>
    </>
  );
};

export default Cards;
