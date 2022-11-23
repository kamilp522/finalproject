import React from "react";
import {
  AboutWrapper,
  AboutContainer,
  AboutImageWrapper,
  AboutImage,
  AboutContent,
  AboutSmall,
  AboutH2,
  AboutP,
} from "./AboutElements";
import about_image from "../../images/about_img_1.jpg";

const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutImageWrapper>
          <AboutImage src={about_image} />
        </AboutImageWrapper>
        <AboutContent>
          <AboutSmall>What is midtrader</AboutSmall>
          <AboutH2>
            Most compact tool for tracking important economic data
          </AboutH2>
          <AboutP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium eligendi nostrum ipsa debitis vel mollitia, asperiores
            rerum fugit error, cum provident labore quam atque, modi animi
            quibusdam placeat fugiat autem!
          </AboutP>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutSection;
