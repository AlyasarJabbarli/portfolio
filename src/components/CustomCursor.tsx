import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-12 h-12 border-2 border-border_color rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      >
        <div className="w-1 h-1 bg-zinc-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-full -translate-y-1/2"></div>

      </div>


    </>
  );
};

export default CustomCursor;
