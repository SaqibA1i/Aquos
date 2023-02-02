import { CircleFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { Box } from "styles/Box";
import { HBox } from "styles/HBox";
import { VBox } from "styles/VBox";

const StyledHBox = styled(HBox)`
  width: 400px;
  gap: 20px;
`;

const StyledVBox = styled(VBox)`
  gap: 10px;
`;

const Circles = ({
  children,
  direction,
}: {
  children: JSX.Element;
  direction: string;
}) => {
  const FlexBox = direction == "right" ? StyledHBox : VBox;
  const FlexBoxCircle = direction == "right" ? StyledVBox : HBox;

  return (
    <FlexBox>
      <Box>{children}</Box>
      <FlexBoxCircle>
        <CircleFill color="purple" size={10} />
        <CircleFill color="orange" size={10} />
        <CircleFill color="green" size={10} />
      </FlexBoxCircle>
    </FlexBox>
  );
};

export default Circles;
