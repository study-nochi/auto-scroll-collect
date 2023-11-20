import { useEffect, useRef, useState } from "react";
import { button, container } from "./index.css";
import Photo from "./components/Photo";
import { getPhoto } from "./service/photo";

let debounceFetchTimer: number;

const IntersectionObserverPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageEnd = useRef(null);

  const fetchPhotos = async (pageNumber: number) => {
    getPhoto(pageNumber).then((newPhotos) => {
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    });
  };

  useEffect(() => {
    clearTimeout(debounceFetchTimer);
    debounceFetchTimer = setTimeout(() => {
      fetchPhotos(pageNumber);
    }, 300);
  }, [pageNumber]);

  useEffect(() => {
    let debounceTimer: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          loadMore();
        }, 300);
      },
      { threshold: 1 }
    );

    if (pageEnd.current) {
      observer.observe(pageEnd.current);
    }

    return () => {
      if (pageEnd.current) {
        observer.unobserve(pageEnd.current);
      }
      clearTimeout(debounceTimer);
    };
  }, []);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1); // 페이지 번호 상태 업데이트
  };

  return (
    <section className={container}>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
      <h3>{photos.length}</h3>

      <button className={button} onClick={loadMore} type="button" ref={pageEnd}>
        Load More
      </button>
    </section>
  );
};

export default IntersectionObserverPage;
