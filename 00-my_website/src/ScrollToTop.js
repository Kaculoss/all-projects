import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={classNames(
        isVisible ? "visible-scroll" : "not-visible-scroll"
      )}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};
