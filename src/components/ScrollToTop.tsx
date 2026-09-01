"use client";

import { useEffect, useState } from "react";
import { IconButton, Flex } from "@once-ui-system/core";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <Flex
      position="fixed"
      bottom="32"
      right="32"
      style={{
        zIndex: 99,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
      }}
    >
      <IconButton
        icon="chevronUp"
        variant="secondary"
        size="l"
        onClick={scrollToTop}
        tooltip="Kembali ke Atas"
      />
    </Flex>
  );
};
