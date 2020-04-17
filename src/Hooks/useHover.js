import  { useState} from 'react';

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  function handleEnter() {
    setIsHovered(true);
  }
  function handleLeave() {
    setIsHovered(false);
  }

  return [isHovered, handleEnter, handleLeave];
}
