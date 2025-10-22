import { useEffect } from "react";

const ScrollSaver = () => {
  useEffect(() => {
    // Save scroll position before page unload
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  return null;
};

export default ScrollSaver;