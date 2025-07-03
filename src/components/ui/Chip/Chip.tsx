import React from 'react';

const colorClasses = [
  'bg-orange-600 hover:bg-orange-500',
  'bg-purple-600 hover:bg-purple-500',
  'bg-cyan-500 hover:bg-cyan-400',
];

type ChipProps = {
  id: number;
  label: string;
  className?: string;
  onClick?: () => void;
};

export const Chip: React.FC<ChipProps> = ({ id, label, className = '', onClick }) => {
  const colorIndex = id % colorClasses.length;
  const colorClass = colorClasses[colorIndex];

  return (
    <span
      onClick={onClick}
      className={`px-4 py-2 ${colorClass} text-white rounded-full text-sm cursor-pointer transition-all duration-200 hover:scale-105 ${className}`}
    >
      {label}
    </span>
  );
};

export default Chip;