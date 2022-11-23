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
  AboutButtonWrapper,
} from "./AboutElements";
import { Button } from "../../components/UI/Button/Button";
import about_image from "../../images/about_img_1.jpg";

const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutImageWrapper>
          <AboutImage src={about_image} />
        </AboutImageWrapper>
        <AboutContent>
          <AboutSmall>WHAT IS MIDTRADER</AboutSmall>
          <AboutH2>
            Most compact tool for tracking important economic data
          </AboutH2>
          <AboutP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium eligendi nostrum ipsa debitis vel mollitia, asperiores
            rerum fugit error, cum provident labore quam atque, modi animi
            quibusdam placeat fugiat autem!
          </AboutP>
          <AboutButtonWrapper>
            <Button>See Indicators</Button>
          </AboutButtonWrapper>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutSection;
