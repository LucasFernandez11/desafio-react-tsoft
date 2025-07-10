import React, { useEffect, useState } from 'react';

export type ImageSize = 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'w780' | 'original';

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  path: string;
  alt: string;
  size?: ImageSize;
  width?: number | string;
  height?: number | string;
  className?: string;
  fallbackSrc?: string;
}

const IMAGE_BASE_URL = import.meta.env.VITE_API_IMAGE_BASE_URL;

export const Image: React.FC<ImageProps> = ({
  path,
  alt,
  size = 'w300',
  width,
  height,
  className = '',
  fallbackSrc = '/placeholder.jpg',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (path) {
      setImgSrc(`${IMAGE_BASE_URL}${size}${path}`);
    } else {
      setImgSrc(fallbackSrc);
    }
    setIsLoading(true);
  }, [path, size, fallbackSrc]);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-zinc-700 animate-pulse z-0" />
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          decoding="async"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } z-10`}
          {...props}
        />
      )}
    </div>
  );
};

export default Image;
