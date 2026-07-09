import React, { useEffect } from 'react';

function normalizeImage(image) {
  if (typeof image === 'string') {
    return { src: image, alt: '', title: '' };
  }
  return image || { src: '', alt: '', title: '' };
}

export default function ImageLightbox({ images = [], currentIndex, onClose, onChange }) {
  const isOpen = Number.isInteger(currentIndex) && currentIndex >= 0 && currentIndex < images.length;
  const current = isOpen ? normalizeImage(images[currentIndex]) : null;
  const hasMultiple = images.length > 1;

  const goPrevious = () => {
    if (!hasMultiple) return;
    onChange((currentIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!hasMultiple) return;
    onChange((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrevious();
      if (event.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || !current?.src) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || current.title || 'Image agrandie'}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/12 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center text-2xl transition z-20"
        aria-label="Fermer"
        title="Fermer"
      >
        ×
      </button>

      {hasMultiple && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goPrevious();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/12 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center text-3xl transition z-20"
          aria-label="Image précédente"
          title="Image précédente"
        >
          ‹
        </button>
      )}

      {hasMultiple && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/12 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center text-3xl transition z-20"
          aria-label="Image suivante"
          title="Image suivante"
        >
          ›
        </button>
      )}

      <div className="max-w-[95vw] max-h-[92vh] flex flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt || current.title || ''}
          className="max-w-[95vw] max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10 bg-white/5"
          draggable="false"
        />

        <div className="text-center text-white/90 px-4">
          {(current.title || current.alt) && (
            <div className="font-bold text-sm sm:text-base mb-1">
              {current.title || current.alt}
            </div>
          )}
          {hasMultiple && (
            <div className="text-xs sm:text-sm text-white/60">
              Image {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
