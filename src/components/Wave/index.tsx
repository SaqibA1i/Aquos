import styled from "styled-components";
import { Box } from "styles/Box";
import Image from "next/image";
import WaveImg from "@/images/wave.svg";
import ThreeBorder from "./ThreeBorder";

const BorderContainer = styled(Box)`
  border-radius: 50%;
  background: #efefefb7;
  width: fit-content;
  padding: 15px;
  backdrop-filter: blur(2px);
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.127) 0px 0px 15px;
`;
export const Container = styled(Box)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
`;
export const StyledWave = styled(Image)`
  transform-origin: center;
  @keyframes wave {
    from {
      left: -200px;
    }
    to {
      left: 0px;
    }
  }
  /* margin: 0 auto; */
  top: 0;
  position: absolute;
  animation: wave 4s ease-in-out infinite alternate;
`;
const Wave = () => {
  return (
    <BorderContainer>
      <ThreeBorder>
        <BorderContainer>
          <BorderContainer>
            <Container>
              <StyledWave src={WaveImg} alt="Waves" width="300" height="100" />
            </Container>
          </BorderContainer>
        </BorderContainer>
      </ThreeBorder>
    </BorderContainer>
  );
};

export default Wave;
