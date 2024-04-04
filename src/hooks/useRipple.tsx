import { useState, ReactNode, FC, RefObject } from "react";

interface RippleState {
  rippleX: number;
  rippleY: number;
  size: number;
}

interface RippleProps {
  opcacity?: number;
  className?: string;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

const useRipple = () => {
  const [ripple, setRipple] = useState<RippleState>({
    rippleX: 0,
    rippleY: 0,
    size: 0,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - target.left;
    const yPos = e.clientY - target.top;
    const size = Math.max(target.width, target.height);
    const rippleX = xPos - size / 2;
    const rippleY = yPos - size / 2;
    const newRipple = { rippleX, rippleY, size };
    setRipple(newRipple);
  };

  const Ripple: FC<RippleProps> = ({
    opcacity = 0.4,
    className,
    children,
    ref,
  }) => {
    return (
      <div
        ref={ref}
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <span
          className={`absolute bg-white rounded-full pointer-events-none ${className}`}
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.rippleY,
            left: ripple.rippleX,
            transform: "translate(-50%, -50%)",
            opacity: opcacity,
            animation: "ripple-effect 1s ease-out",
          }}
        ></span>
      </div>
    );
  };

  return { Ripple };
};

export default useRipple;
