import React, { useState } from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { theme } from "styles/index";
import { useStaticQuery, graphql } from "gatsby";

const { colors, fonts } = theme;

const Section = styled.section`
  width: 100%;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 900px) {
    display: block;
    padding: 0 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const Grid = styled.div`
  background: ${colors.maastrichtBlue};
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: min-content 1fr;
  grid-gap: 2.5rem;
  @media screen and (max-width: 920px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-family: ${fonts.primary};
  font-size: 5rem;
  font-weight: normal;
  letter-spacing: 0.8rem;
  margin-bottom: 5rem;
  grid-row: 1/2;
  justify-self: center;
  @media screen and (max-width: 920px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 3rem;
    font-size: 3.5rem;
  }
`;

const AboutGrid = styled.article`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 100%;
  justify-self: center;
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 60px 60px 1fr;
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-row: 2/3;
    order: 2;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content 1fr;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/4;
  align-self: flex-start;
  @media screen and (max-width: 600px) {
    grid-column: 1/4;
    grid-row: 2/3;
  }
`;

const Text = styled.p`
  display: block;
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  line-height: 1.7;
  text-align: left;
  margin-bottom: 1rem;
`;

const HighLight = styled.span`
  /* text-decoration-line: underline;
  text-decoration-color: ${colors.brightYellow};
  text-decoration-style: double; */
  color: ${colors.white};
  border-bottom: 1px solid ${colors.brightYellow};
`;

const Figure = styled.figure`
  width: 100%;
  grid-row: 2/3;
  grid-column: 2/3;
  /* The AOS custom animation needs to be in a parent container */
  [data-aos="about-frame"] {
    transform: rotate(-90deg);
    &.aos-animate {
      transform: rotate(0);
    }
  }
  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
    margin-bottom: 10rem;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 8rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 30rem;
`;

const Frame = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  padding: 3.5rem;
  border: 10px solid ${colors.brightYellow};
  width: 25rem;
  height: 25rem;
  z-index: 95;
  @media screen and (max-width: 920px) {
  }
  @media screen and (max-width: 600px) {
    top: 20%;
    left: 30%;
    width: 20rem;
    height: 20rem;
  }
`;

const imgeStyle = css`
  width: 25rem;
  max-width: 100%;
  position: relative;
  z-index: 100;
  filter: contrast(140%) grayscale(100%);
  @media screen and (max-width: 600px) {
    width: 20rem;
    margin: 0 auto;
  }
`;

const tabButtonStyle = css`
  width: 8.5rem;
  padding: 1rem 0;
  outline: none;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-start;
  transition: all 250ms ease-out;
  &:hover {
    border-bottom: 2px solid ${colors.brightYellow};
  }
`;

const IntroButton = styled.button`
  ${tabButtonStyle}
  grid-row: 1/2;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${props =>
      props.activeText === INTRO ? colors.brightYellow : "transparent"};
  @media screen and (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const JourneyButton = styled.button`
  ${tabButtonStyle}
  grid-row: 2/3;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${props =>
      props.activeText === JOURNEY ? colors.brightYellow : "transparent"};
  @media screen and (max-width: 600px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const PresentButton = styled.button`
  ${tabButtonStyle}
  grid-row: 3/4;
  grid-column: 1/2;
  border-bottom: 2px solid
    ${props =>
      props.activeText === LEARNING ? colors.brightYellow : "transparent"};
  @media screen and (max-width: 600px) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
`;

const INTRO = "INTRO";
const JOURNEY = "JOURNEY";
const LEARNING = "LEARNING";

const About = () => {
  const [activeText, setActiveText] = useState(INTRO);
  const {
    file: { image },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profilepic.jpg" }) {
        image: childImageSharp {
          fluid {
            aspectRatio
            base64
            originalImg
            originalName
            presentationHeight
            presentationWidth
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
          }
        }
      }
    }
  `);

  const renderActiveParagraph = tab => {
    switch (tab) {
      case INTRO:
        return (
          <TextWrapper>
            <Text>
              I am a highly motivated{" "}
              <HighLight>
                Front End Developer who is passionate about creating rich user
                interfaces and interactive web applications{" "}
              </HighLight>{" "}
              using a wide range of JavaScript technologies and libraries. I
              strongly believe in the importance of writing clean, modular and
              loosely coupled code that is easy to document, maintain and reuse.
            </Text>
            <Text>
              My story as self-taught developer is outlined by the passion which
              has driven me through a challenging yet exciting journey to become
              a Software Developer.
            </Text>
          </TextWrapper>
        );
      case JOURNEY:
        return (
          <TextWrapper>
            <Text>
            Despite choosing a different academic path, which led me to
            successfully complete a Bachelor in Communication Sciences
            (Social, Political and Communication Sciences) technology has
            remained my primary interest and a source of inspiration and
            curiosity.
            In December 2017, after completing a Microsoft Tehnology Associate (MTA),{" "}
              <HighLight>
                I realised that I wanted to do something different, something I
                was really passionate about, an invest all my energy into it.
              </HighLight>
            </Text>
            <Text>
            I started coding everyday after work for 1 hour, and
            for 8 hours during the weekends.
            </Text>
          </TextWrapper>
        );
      case LEARNING:
        return (
          <TextWrapper>
            <Text>
              From the beginning of my adventure, I have spent the majority
              of my free time to not only improve and consolidate my
              knowledge of the building blocks of the web (HTML, CSS,
              JavaScript, Browser Compatibility, Web Performance and Web Security,
              Accessibility) but I have also spent a large amount of
              time learning and experimenting with modern framework and
              technologies (React, Redux, GraphQL, Node, Apollo, Vue, SVG Animation, GSAP, AWS).
            </Text>
            <Text>
              I constantly keep myself up to date with the latest innovation in
              Front End Development and in the JavaScript ecosystem, using
              different media such as Twitter, Medium, dev.to, CSS Tricks,etc.
            </Text>
            <Text>
              <HighLight>
                I strongly believe that learning is a life-long process that is
                essential to an Engineer�s success{" "}
              </HighLight>
              in delivering software the reflects the best standard of the
              industry
            </Text>
          </TextWrapper>
        );
      default:
        return "Error retrieving the selected option, reload the page ...";
    }
  };

  return (
    <Section id="about">
      <Grid>
        <Title
          data-aos="fade-down"
          data-aos-duration="350"
          data-aos-delay="500"
        >
          About me
        </Title>
        <AboutGrid>
          {renderActiveParagraph(activeText)}
          <IntroButton
            onClick={() => setActiveText(INTRO)}
            activeText={activeText}
          >
            Intro
          </IntroButton>
          <JourneyButton
            onClick={() => setActiveText(JOURNEY)}
            activeText={activeText}
          >
            Journey
          </JourneyButton>
          <PresentButton
            onClick={() => setActiveText(LEARNING)}
            activeText={activeText}
          >
            Learning
          </PresentButton>
        </AboutGrid>
        <Figure>
          <ImgContainer>
            <Frame
              data-aos="about-frame"
              data-aos-duration="750"
              data-aos-delay="300"
            />
            <Img
              fluid={image.fluid}
              alt="Profile Picture of Florin Dumitru"
              css={imgeStyle}
            />
          </ImgContainer>
        </Figure>
      </Grid>
    </Section>
  );
};

export default About;