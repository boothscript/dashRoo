import React, { useState, useRef } from 'react';

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  function handleEnter() {
    setIsHovered(true);
  }
  function handleLeave() {
    setIsHovered(false);
  }

  return [isHovered, handleEnter, handleLeave];
}
