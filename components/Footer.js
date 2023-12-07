import { Flex, IconButton, Text } from "theme-ui";
import Link from 'next/link';
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Resume from "../../assets/resume.svg";
import { LINKS } from "../../utils/constants";

export default function Footer() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        gap: "16px",
        pt: "16px",
        fontSize: 3,
        lineHeight: "normal",
        "& > span, & > strong": { fontSize: "inherit", lineHeight: "inherit" },
      }}
    >
      <Text as="strong">
        derman sultan <span sx={{ fontFamily: "Arial", mx: "5px" }}>•</span>{" "}
        {new Date().getFullYear()}
      </Text>
      <Text as="strong">I'm always up for a chat ☕</Text>
      <Text as="strong">
        Get in touch below or directly at{" "}
        <a href={LINKS.EMAIL} style={{ variant: "email" }}>
          abdurrehmansultan4@gmail.com
        </a>
      </Text>
      <Flex sx={{ gap: "16px" }}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <a
          href={LINKS.RESUME}
          target="_blank"
          style={{ svg: { mr: "2px", width: "10px", height: "auto" } }}
        >
          <Resume /> Resume
        </a>
        <Flex sx={{ gap: "9px" }}>
          <a
            href={LINKS.LINKEDIN}
            target="__blank"
            style={{
              background: "transparent",
              width: "20px",
              height: "auto",
              padding: 0,
              "svg path": { fill: "strong" },
            }}
          >
            <Linkedin />
          </a>
          <a
            href={LINKS.GITHUB}
            target="__blank"
            style={{
              background: "transparent",
              width: "20px",
              height: "auto",
              padding: 0,
              "svg path": { fill: "strong" },
            }}
          >
            <Github />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}
