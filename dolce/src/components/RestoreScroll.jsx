import { useEffect } from "react";

const RestoreScroll = () => {
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollPosition");
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  }, []);

  return null;
};

export default RestoreScroll;