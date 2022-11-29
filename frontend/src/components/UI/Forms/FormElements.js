import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  max-width: 90%;
  font-size: ${font_sizes.fs_500};
  border: 1px solid ${colors.clr_very_dark_blue_900};
  border-radius: 0.25rem;
  margin-block: 0.25em;
  padding: 0.25em;
`;

export const FormButtonWrapper = styled.div`
  margin-top: 0.5em;
  width: fit-content;
`;
