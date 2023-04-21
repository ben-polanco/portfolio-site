// opacity.js
export const opacityFunction = (scrollPosition, minScrollPosition, maxScrollPosition) => {
    // Calculate opacity based on scroll position
    if (scrollPosition < minScrollPosition - (window.innerHeight * .15)) {
      return 0;
    } else if (scrollPosition > maxScrollPosition + (window.innerHeight * .15)) {
      return 0;
    } else {
      const opacityValue = (maxScrollPosition - scrollPosition) / (maxScrollPosition - minScrollPosition);
      return opacityValue;
    }
  }
  
  export const handleScroll = (setOpacity, minScrollPosition, maxScrollPosition) => {
    // Get current scroll position
    const scrollPosition = window.scrollY;
  
    // Set opacity based on scroll position
    setOpacity(opacityFunction(scrollPosition, minScrollPosition, maxScrollPosition));
  
    // Use requestAnimationFrame to optimize performance
    requestAnimationFrame(() => {
      setOpacity(opacityFunction(scrollPosition, minScrollPosition, maxScrollPosition));
    });
  }