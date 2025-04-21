// useScrollRestoration.js
import { useEffect } from 'react';

const useScrollRestoration = () => {
  useEffect(() => {
    // Disable the browser's default scroll restoration so our custom logic takes charge.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Function to restore the scroll position only for the current page.
    const restoreScrollPosition = () => {
      const savedData = sessionStorage.getItem('scrollPosition');
      if (savedData) {
        const { x, y, path } = JSON.parse(savedData);
        // Check if the current page is the same as the one saved.
        if (window.location.pathname === path) {
          // Wait for a short delay to ensure content is rendered.
          setTimeout(() => {
            // Calculate the maximum scrollable Y position.
            const maxScrollY = document.body.scrollHeight - window.innerHeight;
            // If the saved position is very near the bottom, adjust it upward.
            const bottomThreshold = 100;
            const adjustedY = (maxScrollY - y < bottomThreshold)
              ? Math.max(0, maxScrollY - 50)
              : y;
            window.scrollTo({ top: adjustedY, left: x, behavior: 'smooth' });
          }, 100);
          return;
        }
      }
      // If no saved scroll data or page changed, scroll to the top.
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // Restore scroll position when the component mounts.
    restoreScrollPosition();

    // Save the scroll position along with the current page path.
    const handleScroll = () => {
      const scrollData = {
        x: window.scrollX,
        y: window.scrollY,
        path: window.location.pathname,
      };
      sessionStorage.setItem('scrollPosition', JSON.stringify(scrollData));
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove event listener when component unmounts.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // The empty dependency array ensures this runs only on mount.
};

export default useScrollRestoration;
