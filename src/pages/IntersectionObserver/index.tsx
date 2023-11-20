import { useEffect, useRef, useState, useTransition } from "react";
import { button, container } from "./index.css";
import Photo from "./components/Photo";
import { getPhoto } from "./service/photo";

const IntersectionObserverPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPending, startTransition] = useTransition();
  const pageEnd = useRef(null);
  let num = 1;

  const fetchPhotos = async (pageNumber: number) => {
    startTransition(() => {
      if (isPending) return;
      getPhoto(pageNumber).then((newPhotos) => {
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      });
    });
  };

  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    if (!isPending) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num += 1;
            loadMore();
            if (num >= 10 && pageEnd.current) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      if (pageEnd.current) {
        observer.observe(pageEnd?.current);
      }
    }
  }, [isPending, num]);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
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
