import { RefObject, useState, useEffect } from "react";

/** UseOnScreen: Listen object element is visible on screen */
export function useOnSrceen(
  ref: RefObject<HTMLElement>,
  rootMargin: string = "0px"
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
