import React from "react";

const useCarousel = (arrayLength = 1) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardWidth, setCardWidth] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const cardRef = React.useRef<HTMLLIElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arrayLength - 1 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const getXPosition = () => {
    const itemsInView = Math.floor(containerWidth / (cardWidth + 24));
    const maxScrollableIndex = arrayLength - itemsInView;

    if (arrayLength <= itemsInView) return 0;

    return currentIndex <= maxScrollableIndex
      ? currentIndex * -(cardWidth + 24)
      : -maxScrollableIndex * (cardWidth + 24);
  };

  return {
    cardRef,
    containerRef,
    currentIndex,
    nextSlide,
    prevSlide,
    getXPosition,
  };
};

export default useCarousel;
