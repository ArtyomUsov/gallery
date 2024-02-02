export const getGalleryPhotos = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (responce.status === 200){
    const data = await responce.json()
    return data.map(item=> ({id:item.id, url: item.url}))
  } 
  throw new Error("Some error")
};
