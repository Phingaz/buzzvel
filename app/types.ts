export type TTestimonial = {
  name: string;
  avatar: string;
  content: string;
  role: string;
};

export type TCarouselBtnsProps = {
  prevSlide: () => void;
  currentIndex: number;
  nextSlide: () => void;
  arrayLength: number;
};

export type TCarouselCardProps = {
  index: number;
  currentCard: boolean;
  testimonial: TTestimonial;
};
