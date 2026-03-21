export type SlideId = 'hero' | 'problem' | 'main' | 'tech' | 'final';

export interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}
