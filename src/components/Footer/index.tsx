import { VBox } from "styles/VBox";
import Circles from "../Circles";
import { H1 } from "styles/Text";
import styled from "styled-components";
import { HBox } from "styles/HBox";
import { ArrowRight } from "react-bootstrap-icons";

const StyledVBox = styled(VBox)`
  align-items: start;
  background-color: #ededed;
  margin: 20px;
  padding: 50px;
  width: inherit;
  border-radius: 10px;
`;
const Footer = () => {
  return (
    <StyledVBox>
      <Circles direction="top"></Circles>
      <HBox>
        <H1>Saqibalip321@gmail.com</H1>
        <ArrowRight color="#3963d0" size={40} />
      </HBox>
    </StyledVBox>
  );
};

export default Footer;
