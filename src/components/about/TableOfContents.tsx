"use client";

import React, { useEffect, useState } from "react";
import { Column, Flex, Text, Badge, Row } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const visibleSections = structure.filter((s) => s.display);
      if (visibleSections.length === 0) return;

      // 1. Mentok Paling Atas -> "Ringkasan Profil"
      if (scrollY < 80) {
        setActiveSection(visibleSections[0].title);
        return;
      }

      // 2. Mentok Paling Bawah -> "Keahlian Teknis & Bahasa"
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection(visibleSections[visibleSections.length - 1].title);
        return;
      }

      // 3. Scroll Manual -> Deteksi section yang paling pas di viewport top
      let currentActive = visibleSections[0].title;
      for (const section of visibleSections) {
        const element = document.getElementById(section.title);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 220) {
            currentActive = section.title;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [structure]);

  const scrollTo = (id: string, offset: number) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <Column
      style={{
        position: "fixed",
        left: "24px",
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
        zIndex: 100,
      }}
      gap="12"
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="m"
      shadow="l"
      m={{ hide: true }}
    >
      <Row paddingBottom="4">
        <Badge textVariant="label-default-s" background="brand-alpha-weak">
          Navigasi Menu
        </Badge>
      </Row>

      <Column gap="s">
        {structure
          .filter((section) => section.display)
          .map((section, sectionIndex) => {
            const isActive = activeSection === section.title;

            return (
              <Column key={`toc-sec-${section.title}-${sectionIndex}`} gap="s">
                <Flex
                  cursor="interactive"
                  className={styles.hover}
                  gap="8"
                  vertical="center"
                  paddingY="8"
                  paddingX="12"
                  radius="m"
                  style={{
                    background: isActive
                      ? "var(--brand-alpha-medium, rgba(59, 130, 246, 0.2))"
                      : "transparent",
                    borderLeft: isActive
                      ? "3px solid var(--brand-solid-strong, #3b82f6)"
                      : "3px solid transparent",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onClick={() => scrollTo(section.title, 80)}
                >
                  <Text
                    variant="body-default-s"
                    weight={isActive ? "strong" : "default"}
                    onBackground={isActive ? "brand-strong" : "neutral-medium"}
                  >
                    {section.title}
                  </Text>
                </Flex>

                {about.tableOfContent.subItems && section.items && section.items.length > 0 && (
                  <Column gap="2" paddingLeft="12">
                    {section.items.map((item, itemIndex) => {
                      const isSubActive = activeSection === item;
                      return (
                        <Flex
                          l={{ hide: true }}
                          className={styles.hover}
                          key={`toc-subitem-${sectionIndex}-${itemIndex}-${item.replace(/[^a-zA-Z0-9]/g, "")}`}
                          style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                          gap="8"
                          paddingY="4"
                          paddingX="8"
                          radius="s"
                          vertical="center"
                          onClick={() => scrollTo(item, 80)}
                        >
                          <Flex
                            height="2"
                            background={isSubActive ? "brand-strong" : "neutral-alpha-medium"}
                            style={{
                              minWidth: isSubActive ? "12px" : "6px",
                              transition: "all 0.3s ease",
                            }}
                          />
                          <Text
                            variant="body-default-xs"
                            weight={isSubActive ? "strong" : "default"}
                            onBackground={isSubActive ? "brand-strong" : "neutral-weak"}
                          >
                            {item}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Column>
                )}
              </Column>
            );
          })}
      </Column>
    </Column>
  );
};

export default TableOfContents;
