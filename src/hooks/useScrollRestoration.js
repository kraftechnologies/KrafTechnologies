import { useEffect, useRef } from 'react';

const useScrollRestoration = (pageName) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Restore scroll position on mount
    const savedScrollPosition = sessionStorage.getItem(`${pageName}ScrollPosition`);
    if (savedScrollPosition && containerRef.current) {
      containerRef.current.scrollTop = parseInt(savedScrollPosition);
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      if (containerRef.current) {
        sessionStorage.setItem(`${pageName}ScrollPosition`, containerRef.current.scrollTop.toString());
      }
    };

    // Save scroll position on scroll
    const handleScroll = () => {
      if (containerRef.current) {
        sessionStorage.setItem(`${pageName}ScrollPosition`, containerRef.current.scrollTop.toString());
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pageName]);

  return containerRef;
};

export default useScrollRestoration; 