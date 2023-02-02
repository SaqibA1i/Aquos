import Wave, { Container, StyledWave } from "@/components/Wave";
import type { AppProps } from "next/app";
import styled from "styled-components";
import "@/styles/globals.css";
import { HBox } from "styles/HBox";
import { H1, P } from "styles/Text";
import { VBox } from "styles/VBox";
import { Button } from "styles/Button";
import { ArrowDown, ArrowUpLeft } from "react-bootstrap-icons";
import Circles from "@/components/Circles";
import WaveImg from "@/images/wave.svg";
import ProjectPill from "@/components/ProjectPill";

const StyledHBox = styled(HBox)`
  gap: 40px;
`;
const StyledVBox = styled(VBox)`
  background: white;
  width: 100vw;
  gap: 20px;
`;
const StyledArrow = styled(ArrowUpLeft)`
  padding: 20px;
  transform: rotate(225deg);
  backdrop-filter: blur(2px);
  box-shadow: rgba(0, 0, 0, 0.127) 0px 0px 10px;
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledVBox style={{ gap: "100px" }}>
      <StyledHBox
        style={{
          minHeight: "80vh",
          maxHeight: "100vh",
          background: "#e9e9e9",
          width: "-webkit-fill-available",
        }}
      >
        <VBox>
          <H1>Digital Magic</H1>
          <P>Welcome, my name is Saqib Ali, I am a cona</P>
          <Button intent="submit">Lets Talk</Button>
        </VBox>
        <Wave />
        <StyledArrow size={35} color={"#333"} />
      </StyledHBox>
      <StyledHBox>
        <VBox>
          <P>We provide concept driven creative identites</P>
          <Container
            style={{ borderRadius: "0", width: "300px", height: "200px" }}
          >
            <StyledWave src={WaveImg} alt="Waves" width="600" height="200" />
          </Container>
        </VBox>
        <Circles direction="right">
          <H1>Services</H1>
        </Circles>
      </StyledHBox>
      <StyledHBox>
        <Circles direction="left">
          <H1>About Us</H1>
        </Circles>
        <P style={{ maxWidth: "300px" }}>
          We are a diverse group of people working around the globe with
          different cultures and ideas the set us apart
        </P>
      </StyledHBox>
      <StyledVBox>
        <StyledHBox>
          <Circles direction="left">
            <H1>Project</H1>
          </Circles>
          <P style={{ maxWidth: "300px" }}>
            We are a diverse group of people working around the globe with
            different cultures and ideas the set us apart
          </P>
        </StyledHBox>
        <ProjectPill
          year="2022"
          label="Schmart"
          desc="thais ahdad hasidh saidhs ad"
        />
        <ProjectPill
          year="2022"
          label="Schmart"
          desc="thais ahdad hasidh saidhs ad"
        />
        <ProjectPill
          year="2022"
          label="Schmart"
          desc="thais ahdad hasidh saidhs ad"
        />
        <ProjectPill
          year="2022"
          label="Schmart"
          desc="thais ahdad hasidh saidhs ad"
        />
      </StyledVBox>
    </StyledVBox>
  );
}
