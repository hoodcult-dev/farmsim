import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isGrab, setIsGrab] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for different cursor states
      if (target.matches('button, a, [role="button"]')) {
        setIsPointer(true);
        setIsText(false);
        setIsGrab(false);
        setIsHover(false);
      } else if (target.matches('input, textarea, [contenteditable]')) {
        setIsText(true);
        setIsPointer(false);
        setIsGrab(false);
        setIsHover(false);
      } else if (target.matches('[draggable="true"], .draggable')) {
        setIsGrab(true);
        setIsPointer(false);
        setIsText(false);
        setIsHover(false);
      } else if (target.matches('.hover-effect, .card, .farm-card')) {
        setIsHover(true);
        setIsPointer(false);
        setIsText(false);
        setIsGrab(false);
      } else {
        setIsPointer(false);
        setIsText(false);
        setIsGrab(false);
        setIsHover(false);
      }
    };

    const handleMouseLeave = () => {
      setIsPointer(false);
      setIsText(false);
      setIsGrab(false);
      setIsHover(false);
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);


  const cursorClass = [
    'custom-cursor',
    isPointer && 'cursor-pointer',
    isText && 'cursor-text',
    isGrab && 'cursor-grab',
    isHover && 'cursor-hover',
    isClicking && 'clicking'
  ].filter(Boolean).join(' ');

  return (
    <>
      {/* Main cursor */}
      {isVisible && (
        <div
          className={cursorClass}
          style={{
            left: position.x - 10,
            top: position.y - 10,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
