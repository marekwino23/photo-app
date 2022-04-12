import "./App.css";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Photos from "./components/Photos";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [picPerPage, setPicPerPage] = useState(3);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [setPhotos]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPictures = currentPage * picPerPage;
  const indexOfFirstPictures = indexOfLastPictures - picPerPage;
  const currentPictures = photos.slice(
    indexOfFirstPictures,
    indexOfLastPictures
  );
  return (
    <div className="App">
      <header className="App-header">List Images</header>
      <div className="box">
        <Photos photos={currentPictures} loading={loading} />
      </div>
      <div className="paginate">
        <Pagination
          picPerPage={picPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPictures={photos.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
