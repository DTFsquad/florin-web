import React from "react";
import styled from "@emotion/styled";
import Project from "components/project/project";
import { theme } from "styles/index";

const { fonts, colors } = theme;

const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  margin: 10rem 0 5rem 0;
  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 5rem;
  letter-spacing: 0.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const DescTitle = styled.h5`
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: ${colors.white};
`;

const CardText = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  line-height: 2;
  text-align: left;
  color: ${colors.maastrichtBlue};
  margin: 0;
  width: 100%;

  @media screen and (max-width: 900px) {
    font-size: 1.4rem;
    br {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    line-height: 1.5;
  }
`;

const Work = () => {
  return (
    <Section id="work">
      {/* <Title>Work</Title> */}
      <Project
        originalPhoneMockupPhotoName="we-pair-iphone-mockup.png"
        originalMacMockupPhotoName="we-pair-macbook-mockup.png"
        title="We Pair | Team App"
        card={WePairCard}
      />
      <Project
        originalPhoneMockupPhotoName="portfolio-iphone-mockup.png"
        originalMacMockupPhotoName="portfolio-macbook-mockup.png"
        title="Portfolio | Version 1"
        card={PortfolioCard}
      />
      <Project
        originalPhoneMockupPhotoName="kodflix-iphone-mockup.png"
        originalMacMockupPhotoName="kodflix-macbook-mockup.png"
        title="Kodflix | Movie Database"
        card={KodflixCard}
      />
    </Section>
  );
};

export default Work;

var WePairCard = (
  <>
    <DescTitle>We Pair | Team App</DescTitle>
    <CardText>
        We Pair is a web-based platform designed for Pair Programming in London, to analyze and
      match in real-time skills and location for users. My work involved:
      <br />
      • Develop new user-facing features both for web-app and mobile
      applications using React, JavaScript, HTML5, CSS3.
      <br />
      • Migrate the codebase from Figma (Design phase) to Prototype following building
      to functional React components.
      <br />• Build reusable code and libraries for future use.
      <br />• Ensure the technical feasibility of UI/UX designs.
    </CardText>
  </>
);
var PortfolioCard = (
  <>
    <DescTitle>Portfolio | Version 1</DescTitle>
    <CardText>
      The 'Portfolio Version 1' is the first iteration of my personal portfolio, with
      which I have had the chance to experiment with Gatsby and more generally
      with the concepts behind modern Static Sites Generators.
      I did implemented a modern CSS-in-JS style guide using
      'emotion' and animation libraries such as AOS and GSAP 3. Some of the
      highlights and things I have achieved are:
      <br />
      • Built the portfolio using Gatsby.js, the gatsby-plugin ecosystem and
      GraphQL.
      <br />
      • Designed and created icons using Adobe Illustrator CC
      <br />
      • Motion design and animation using AOS and GSAP 3.
      <br />• CSS-in-JS using emotion and emotion/styled.
    </CardText>
  </>
);

var KodflixCard = (
  <>
    <DescTitle>Kodflix | Movie Database</DescTitle>
    <CardText>
      The Kodflix has been my first project as Junior Developer and has allowed
      me to learn React 16 and HTML5, along with being exposed to a broad
      range of CSS techniques and styleguides. Other highlights are:
      <br />
      • Designed and developed the front-end of the Kodflix using
      SSH, CSS Grid, Flexbox, React-Dom, React.
      <br />
      • Unit Testing using Jasmine.
      <br />• Worked with different stakeholders and presented sprints progress
      and demos to large audience in-person and online.
    </CardText>
  </>
);