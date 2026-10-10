import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shineColor?: string;
  textColor?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  shineColor = '#059669',
  textColor = '#065F46',
}) => {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[length:220%_100%] ${
        disabled ? '' : 'animate-shine'
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(110deg, ${textColor} 35%, ${shineColor} 50%, ${textColor} 65%)`,
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
