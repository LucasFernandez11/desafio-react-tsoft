import React, { useState } from 'react';

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
  fallbackSrc = '/not_found.jpg',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(path ? `${IMAGE_BASE_URL}${size}${path}` : fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setImgSrc(path ? `${IMAGE_BASE_URL}${size}${path}` : fallbackSrc);
    setIsLoading(true);
  }, [path, size, fallbackSrc]);

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        loading='lazy'
        className={`w-full h-full object-cover transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default Image;