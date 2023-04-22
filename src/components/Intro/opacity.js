// opacity.js
export const opacityFunction = (scrollPosition, minScrollPosition, maxScrollPosition) => {
    // Set to zero if hasn't scrolled to minScrollPosition
    if (scrollPosition < minScrollPosition - (window.innerHeight * .10)) {
      return 0;

    // Set to zero if has scrolled past maxScrollPosition
    } else if (scrollPosition > maxScrollPosition + (window.innerHeight * .10)) {
      return 0;

    // Set to 1 if in between minScrollPosition and maxScrollPosition
    } else if (scrollPosition >= minScrollPosition && scrollPosition <= maxScrollPosition) {
      return 1;

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