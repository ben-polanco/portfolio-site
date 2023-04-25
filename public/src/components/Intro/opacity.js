//opacity.js
import { useState } from 'react';

export const useOpacity = (opacitySettings) => {
  const [opacity, setOpacity] = useState(opacitySettings.initial);

  const opacityFunction = (scrollPosition) => {

    if (!opacitySettings.executed) {
        opacitySettings.minScroll = window.innerHeight * opacitySettings.minScroll;
        opacitySettings.maxScroll = window.innerHeight * opacitySettings.maxScroll;
        opacitySettings.executed = true;
    }

    // Set to zero if hasn't scrolled to minScrollPosition
    
    if (scrollPosition <= opacitySettings.minScroll - (window.innerHeight * .10)) {
      return 0;

    // Set to zero if has scrolled past maxScrollPosition
    } else if (scrollPosition > opacitySettings.maxScroll + (window.innerHeight * .10)) {
      return 0;

    // Set to 1 if in between minScrollPosition and maxScrollPosition
    } else if (scrollPosition >= opacitySettings.minScroll && scrollPosition <= opacitySettings.maxScroll) {
      return 1;

    } else {
      const opacityValue = (opacitySettings.maxScroll - scrollPosition) / (opacitySettings.maxScroll - opacitySettings.minScroll);
      return opacityValue;
    }
  }

  const handleScroll = () => {
    // Get current scroll position
    const scrollPosition = window.scrollY;
  
    // Set opacity based on scroll position
    setOpacity(opacityFunction(scrollPosition));
  
    // Use requestAnimationFrame to optimize performance
    requestAnimationFrame(() => {
      setOpacity(opacityFunction(scrollPosition));
    });
  }

  return [opacity, handleScroll];
}