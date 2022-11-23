import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

export const AboutWrapper = styled.section`
  padding: 1.5em;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutImageWrapper = styled.div`
  border: 1px solid ${colors.clr_cream_900};
  padding: 0.75em;
  margin-bottom: 0.5em;
`;

export const AboutImage = styled.img`
  width: 100%;
  vertical-align: middle;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSmall = styled.small`
  font-size: ${font_sizes.fs_350};
  background-color: ${colors.clr_blue_800};
  color: white;
  padding: 0.375em 0.125em;
  width: 50%;
  text-align: center;
  margin-top: 0.5em;
`;

export const AboutH2 = styled.h2`
  font-size: ${font_sizes.fs_550};
  font-weight: 700;
  margin-block: 0.5em;
  line-height: 1.75rem;
`;

export const AboutP = styled.p`
  font-size: ${font_sizes.fs_400};
  margin-block: 0.25em;
  line-height: 1.375rem;
`;

export const AboutButtonWrapper = styled.div`
  margin-block: 0.5em;
`;
