import { useState, useEffect } from 'react';

// Define the hook
export const useMediaQuery = (query: string): boolean => {
  // Use useState to manage the media query match state
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Create a MediaQueryList object
    const mediaQueryList = window.matchMedia(query);

    // Callback function to update the state when the media query match changes
    const handleChange = () => {
      setMatches(mediaQueryList.matches);
    };

    // Add an event listener for changes to the media query match
    mediaQueryList.addEventListener('change', handleChange);

    // Set the initial match state
    setMatches(mediaQueryList.matches);

    // Clean up the event listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]); // Re-evaluate the effect when the query changes

  // Return the current match state
  return matches;
};