
import { Flex, IconButton, Link, Text } from "theme-ui";
import { Link as RRDLink } from "react-router-dom";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Resume } from "../../assets/resume.svg";
import { LINKS, ROUTES } from "../../utils/constants";

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
        <Link href={LINKS.EMAIL} variant="email">
          abdurrehmansultan4@gmail.com
        </Link>
      </Text>
      <Flex sx={{ gap: "16px" }}>
        <Link as={RRDLink} to={ROUTES.HOME.path}>
          Home
        </Link>
        <Link
          href={LINKS.RESUME}
          target="_blank"
          sx={{ svg: { mr: "2px", width: "10px", height: "auto" } }}
        >
          <Resume /> Resume
        </Link>
        <Flex sx={{ gap: "9px" }}>
          <IconButton
            as={Link}
            href={LINKS.LINKEDIN}
            target="__blank"
            sx={{
              bg: "transparent",
              width: "20px !important",
              height: "auto !important",
              padding: 0,
              "svg path": { fill: "strong" },
            }}
          >
            <Linkedin />
          </IconButton>
          <IconButton
            as={Link}
            href={LINKS.GITHUB}
            target="__blank"
            sx={{
              bg: "transparent",
              width: "20px !important",
              height: "auto !important",
              padding: 0,
              "svg path": { fill: "strong" },
            }}
          >
            <Github />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
