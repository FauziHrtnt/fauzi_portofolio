"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Schema,
  Row,
  Line,
} from "@once-ui-system/core";
import TableOfContents from "@/components/about/TableOfContents";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Reveal } from "@/components/Reveal";

interface AboutClientProps {
  baseURL: string;
  about: any;
  person: any;
  social: any[];
}

export default function AboutClient({
  baseURL,
  about,
  person,
  social,
}: AboutClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const progress = Math.min(1, Math.max(0, currentScroll / 200));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience: any) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution: any) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill: any) => skill.title),
    },
  ];

  const easeProgress = scrollProgress * (2 - scrollProgress);
  const avatarScale = 1 - easeProgress * 0.08;

  return (
    <Column maxWidth="m" fillWidth gap="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <TableOfContents structure={structure} about={about} />
      )}

      {/* DYNAMIC CONTINUOUS SMOOTH SLIDING HERO SECTION */}
      <ScrollReveal direction="zoom" duration={0.85}>
        <Column
          fillWidth
          gap="m"
          paddingTop="m"
          marginTop="s"
          id={about.intro.title}
          horizontal="center"
          align="center"
          style={{
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: `translate3d(0, ${easeProgress * 6}px, 0)`,
          }}
        >
          <Column
            fillWidth
            gap="s"
            horizontal="center"
            align="center"
            style={{
              textAlign: "center",
            }}
          >
            {/* AVATAR & METADATA COLUMN */}
            {about.avatar.display && (
              <Column
                gap="s"
                horizontal="center"
                align="center"
                minWidth="160"
                style={{
                  transform: `scale(${avatarScale}) translate3d(0, ${easeProgress * 8}px, 0)`,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Avatar src={person.avatar} size="xl" />
                <Row gap="8" vertical="center" horizontal="center">
                  <Icon onBackground="accent-weak" name="globe" />
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {person.location}
                  </Text>
                </Row>
                {person.languages && person.languages.length > 0 && (
                  <Row wrap gap="8" horizontal="center">
                    {person.languages.map((language: string, index: number) => (
                      <Tag key={`hero-lang-${index}`} size="l">
                        {language}
                      </Tag>
                    ))}
                  </Row>
                )}
              </Column>
            )}

            {/* NAME, ROLE & SOCIAL BUTTONS COLUMN */}
            <Column
              gap="xs"
              horizontal="center"
              align="center"
              style={{
                transform: `translate3d(0, ${easeProgress * 4}px, 0)`,
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Heading
                align="center"
                variant="display-strong-l"
              >
                {person.name}
              </Heading>
              <Text
                align="center"
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>

              {social.length > 0 && (
                <Row
                  paddingTop="8"
                  gap="8"
                  wrap
                  horizontal="center"
                  vertical="center"
                >
                  {social
                    .filter((item) => item.essential)
                    .map((item, idx) => (
                      item.link ? (
                        <Row key={`hero-soc-row-${idx}-${item.name.replace(/[^a-zA-Z0-9]/g, "")}`} gap="8">
                          <Row s={{ hide: true }}>
                            <Button
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </Row>
                      ) : null
                    ))}
                  <Button
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = "/documents/CV_Fauzi_Hartanto.pdf";
                      a.download = "CV_Fauzi_Hartanto.pdf";
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                    }}
                    prefixIcon="arrowDown"
                    size="s"
                    variant="primary"
                  >
                    Unduh CV
                  </Button>
                </Row>
              )}
            </Column>

            {/* INTRO BIO DESCRIPTION */}
            {about.intro.display && (
              <Column
                maxWidth="s"
                fillWidth
                gap="s"
                marginTop="s"
                style={{
                  opacity: Math.max(0.5, 1 - easeProgress * 0.3),
                  transform: `translate3d(0, ${easeProgress * 10}px, 0)`,
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Text
                  variant="body-default-m"
                  onBackground="neutral-medium"
                  style={{
                    textAlign: "justify",
                    lineHeight: "170%",
                  }}
                >
                  {about.intro.description}
                </Text>
              </Column>
            )}
          </Column>
        </Column>
      </ScrollReveal>

      <Line fillWidth background="neutral-alpha-medium" />

      {/* KONTEN UTAMA MELEBAR DENGAN LAZY SCROLL REVEAL DUA ARAH */}
      <Column fillWidth gap="l">
        {about.work.display && (
          <Column fillWidth gap="m">
            <ScrollReveal direction="up" duration={0.6}>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="s">
                {about.work.title}
              </Heading>
            </ScrollReveal>

            <Column fillWidth gap="l">
              {about.work.experiences.map((experience: any, index: number) => {
                const cardDirection = index % 2 === 0 ? "left" : "right";

                return (
                  <ScrollReveal
                    key={`work-exp-card-${index}-${experience.company.replace(/[^a-zA-Z0-9]/g, "")}`}
                    direction={cardDirection}
                    duration={0.8}
                    delay={0.05}
                  >
                    <Column
                      fillWidth
                      background="surface"
                      border="neutral-alpha-weak"
                      radius="l"
                      padding="l"
                      gap="s"
                    >
                      <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-strong" weight="strong">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="12" marginTop="8">
                        {experience.achievements.map(
                          (achievement: string, aIdx: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`work-exp-ach-${index}-${aIdx}`}
                              style={{ textAlign: "justify", lineHeight: "175%" }}
                            >
                              {achievement}
                            </Text>
                          ),
                        )}
                      </Column>
                      {experience.documentUrl && (
                        <Row paddingTop="s">
                          <Button
                            onClick={() => {
                              const a = document.createElement("a");
                              a.href = experience.documentUrl;
                              a.download = experience.documentName || "Dokumen_Resmi.pdf";
                              document.body.appendChild(a);
                              a.click();
                              document.body.removeChild(a);
                            }}
                            prefixIcon="arrowDown"
                            size="s"
                            variant="secondary"
                          >
                            {experience.documentName || "Unduh Dokumen PDF"}
                          </Button>
                        </Row>
                      )}
                      {experience.images && experience.images.length > 0 && (
                        <Row fillWidth paddingTop="m" gap="12" wrap>
                          {experience.images.map((image: any, imgIdx: number) => (
                            <Row
                              key={`work-exp-img-${index}-${imgIdx}`}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </ScrollReveal>
                );
              })}
            </Column>
          </Column>
        )}

        {about.studies.display && (
          <Column fillWidth gap="m" marginTop="l">
            <ScrollReveal direction="up" duration={0.6}>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="s">
                {about.studies.title}
              </Heading>
            </ScrollReveal>

            <Column fillWidth gap="m">
              {about.studies.institutions.map((institution: any, index: number) => (
                <ScrollReveal
                  key={`studies-card-${index}-${institution.name.replace(/[^a-zA-Z0-9]/g, "")}`}
                  direction="up"
                  duration={0.8}
                  delay={index * 0.1}
                >
                  <Column
                    fillWidth
                    gap="s"
                    background="surface"
                    border="neutral-alpha-weak"
                    radius="l"
                    padding="l"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-weak"
                      style={{ textAlign: "justify", lineHeight: "175%" }}
                    >
                      {institution.description}
                    </Text>
                    {institution.documentUrl && (
                      <Row paddingTop="s">
                        <Button
                          onClick={() => {
                            const a = document.createElement("a");
                            a.href = institution.documentUrl;
                            a.download = institution.documentName || "Sertifikat_EPT.pdf";
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                          }}
                          prefixIcon="arrowDown"
                          size="s"
                          variant="secondary"
                        >
                          {institution.documentName || "Unduh Sertifikat PDF"}
                        </Button>
                      </Row>
                    )}
                  </Column>
                </ScrollReveal>
              ))}
            </Column>
          </Column>
        )}

        {about.technical.display && (
          <Column fillWidth gap="m" marginTop="l">
            <ScrollReveal direction="up" duration={0.6}>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="s"
              >
                {about.technical.title}
              </Heading>
            </ScrollReveal>

            <Column fillWidth gap="m">
              {about.technical.skills.map((skill: any, index: number) => (
                <ScrollReveal
                  key={`tech-skill-card-${index}-${skill.title.replace(/[^a-zA-Z0-9]/g, "")}`}
                  direction="zoom"
                  duration={0.85}
                  delay={index * 0.1}
                >
                  <Column
                    fillWidth
                    gap="s"
                    background="surface"
                    border="neutral-alpha-weak"
                    radius="l"
                    padding="l"
                  >
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-weak"
                      style={{ textAlign: "justify", lineHeight: "175%" }}
                    >
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag: any, tagIndex: number) => (
                          <Tag key={`tech-tag-${index}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image: any, imgIdx: number) => (
                          <Row
                            key={`tech-img-${index}-${imgIdx}`}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                </ScrollReveal>
              ))}
            </Column>
          </Column>
        )}
      </Column>
    </Column>
  );
}
