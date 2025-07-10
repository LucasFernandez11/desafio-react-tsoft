import React from 'react';

const colorClasses = [
  'bg-[#F36F45] hover:bg-[#e6653e]',
  'bg-[#8769FF] hover:bg-[#7a5bf2]', 
  'bg-[#61D1EA] hover:bg-[#52c4de]',
  'bg-[#FFB74D] hover:bg-[#f6a43f]',
  'bg-[#FF6F61] hover:bg-[#e65c54]',
  'bg-[#4CAF50] hover:bg-[#43a047]',
  'bg-[#9C27B0] hover:bg-[#8e24aa]',  
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
      className={`
        px-4 py-2
        ${colorClass}
        text-white
        rounded-full
        text-sm
        cursor-pointer
        transition-all duration-200
        hover:scale-105
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default Chip;
