import useWindowDimensions from "@/app/_hooks/useWindowDimension";
import { useCycle } from "framer-motion";
import React from "react";

const useHeaderHook = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const { currentWindowWidth } = useWindowDimensions();
  const isMobile = currentWindowWidth < 1024;
  const [active, setActive] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    if (width > 1023 && mobileNav) {
      toggleMobileNav();
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [mobileNav, toggleMobileNav, width]);

  return { mobileNav, toggleMobileNav, isMobile, active, width, setWidth };
};

export default useHeaderHook;
