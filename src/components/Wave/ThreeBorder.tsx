import { CircleFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { Box } from "styles/Box";

const Border = styled(Box)`
  border-radius: 50%;
  position: relative;
  width: fit-content;
  backdrop-filter: blur(2px);
  z-index: 1000;
  @keyframes rotanim {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotanim 20s linear infinite;
`;
const Circle1 = styled(CircleFill)`
  position: absolute;
  top: -10px;
  left: 50%;
  z-index: -10;
  color: red;
`;
const Circle2 = styled(CircleFill)`
  position: absolute;
  bottom: -10px;
  left: 40%;
  color: green;
`;
const Circle3 = styled(CircleFill)`
  position: absolute;
  top: -10px;
  left: 50%;
`;
const ThreeBorder = ({ children }: { children: JSX.Element }) => {
  return (
    <Border>
      <Circle1 />
      <Circle2 />

      {children}
    </Border>
  );
};

export default ThreeBorder;
